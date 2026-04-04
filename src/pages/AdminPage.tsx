import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useAuth } from '@/context/AuthContext';
import { getShipments, deleteShipment, bulkUpdateStatus, createShipment } from '@/lib/store';
import { ShipmentStatus, Shipment } from '@/types';
import { toast } from 'sonner';
import { Shield, Trash2, Plus, Package, RefreshCw } from 'lucide-react';

const STATUS_LABELS: Record<ShipmentStatus, string> = {
  picked_up: 'Picked Up',
  in_transit: 'In Transit',
  customs: 'Customs',
  out_for_delivery: 'Out for Delivery',
  delivered: 'Delivered',
};

export default function AdminPage() {
  const { isAuthenticated, isAdmin, adminLogin } = useAuth();
  const [adminPassword, setAdminPassword] = useState('');
  const [shipments, setShipments] = useState<Shipment[]>(getShipments());
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [addDialogOpen, setAddDialogOpen] = useState(false);

  const refresh = () => setShipments(getShipments());

  if (!isAuthenticated || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card className="max-w-sm w-full animate-fade-in">
          <CardHeader className="text-center">
            <Shield className="h-10 w-10 text-eagle-orange mx-auto mb-2" />
            <CardTitle>Admin Access</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={e => { e.preventDefault(); if (!adminLogin(adminPassword)) toast.error('Invalid password'); }} className="space-y-4">
              <Input type="password" value={adminPassword} onChange={e => setAdminPassword(e.target.value)} placeholder="Admin password" />
              <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white">Access Admin Panel</Button>
              <p className="text-xs text-center text-muted-foreground">Demo password: eagle-admin-2024</p>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  const toggleSelect = (id: string) => {
    const next = new Set(selected);
    next.has(id) ? next.delete(id) : next.add(id);
    setSelected(next);
  };

  const handleBulkAction = (status: ShipmentStatus) => {
    bulkUpdateStatus(Array.from(selected), status);
    setSelected(new Set());
    refresh();
    toast.success(`Updated ${selected.size} shipments to ${STATUS_LABELS[status]}`);
  };

  const handleDelete = (id: string) => {
    deleteShipment(id);
    refresh();
    toast.success('Shipment deleted');
  };

  const handleAddShipment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    createShipment({
      origin: fd.get('origin') as string,
      destination: fd.get('destination') as string,
      weight: parseFloat(fd.get('weight') as string),
      clientType: (fd.get('clientType') as string) === 'international' ? 'international' : 'private',
      description: fd.get('description') as string,
    });
    refresh();
    setAddDialogOpen(false);
    toast.success('Shipment added');
  };

  const exportAll = () => {
    const headers = 'Tracking,Origin,Destination,Weight,Status,Client,Created\n';
    const rows = shipments.map(s => `${s.trackingNumber},${s.origin},${s.destination},${s.weight},${s.status},${s.clientType},${s.createdAt}`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'eagle-express-all-shipments.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2"><Shield className="h-7 w-7 text-eagle-orange" /> Admin Panel</h1>
          <div className="flex gap-2 flex-wrap">
            <Button variant="outline" onClick={refresh} className="gap-1"><RefreshCw className="h-4 w-4" /> Refresh</Button>
            <Button variant="outline" onClick={exportAll}>Export All CSV</Button>
            <Button onClick={() => setAddDialogOpen(true)} className="bg-eagle-orange hover:bg-eagle-orange-hover text-white gap-1"><Plus className="h-4 w-4" /> Add Shipment</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-6">
          {(['picked_up','in_transit','customs','out_for_delivery','delivered'] as ShipmentStatus[]).map(s => (
            <Card key={s}>
              <CardContent className="pt-4 pb-4 text-center">
                <p className="text-2xl font-bold">{shipments.filter(sh => sh.status === s).length}</p>
                <p className="text-xs text-muted-foreground">{STATUS_LABELS[s]}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bulk Actions */}
        {selected.size > 0 && (
          <div className="flex items-center gap-3 mb-4 p-3 rounded-lg bg-secondary border animate-fade-in">
            <span className="text-sm font-medium">{selected.size} selected</span>
            <Select onValueChange={(v: ShipmentStatus) => handleBulkAction(v)}>
              <SelectTrigger className="w-48"><SelectValue placeholder="Bulk update status" /></SelectTrigger>
              <SelectContent>
                {Object.entries(STATUS_LABELS).map(([k, v]) => (
                  <SelectItem key={k} value={k}>{v}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* Shipments Table */}
        <Card>
          <CardContent className="pt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-8"></TableHead>
                  <TableHead>Tracking</TableHead>
                  <TableHead>Route</TableHead>
                  <TableHead>Weight</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Client</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {shipments.length === 0 ? (
                  <TableRow><TableCell colSpan={7} className="text-center py-8 text-muted-foreground">No shipments yet</TableCell></TableRow>
                ) : shipments.map(s => (
                  <TableRow key={s.id}>
                    <TableCell><Checkbox checked={selected.has(s.id)} onCheckedChange={() => toggleSelect(s.id)} /></TableCell>
                    <TableCell className="font-mono text-sm text-eagle-orange">{s.trackingNumber}</TableCell>
                    <TableCell className="text-sm">{s.origin} → {s.destination}</TableCell>
                    <TableCell>{s.weight} kg</TableCell>
                    <TableCell>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-secondary">{STATUS_LABELS[s.status]}</span>
                    </TableCell>
                    <TableCell className="text-xs">{s.clientType}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" onClick={() => handleDelete(s.id)} className="text-destructive"><Trash2 className="h-4 w-4" /></Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Add Shipment Dialog */}
        <Dialog open={addDialogOpen} onOpenChange={setAddDialogOpen}>
          <DialogContent>
            <DialogHeader><DialogTitle>Add New Shipment</DialogTitle></DialogHeader>
            <form onSubmit={handleAddShipment} className="space-y-3">
              <Input name="origin" placeholder="Origin (e.g. Zurich, CH)" required />
              <Input name="destination" placeholder="Destination (e.g. Dubai, UAE)" required />
              <Input name="weight" type="number" min="0.1" step="0.1" placeholder="Weight (kg)" required />
              <Select name="clientType" defaultValue="private">
                <SelectTrigger><SelectValue /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="international">International</SelectItem>
                </SelectContent>
              </Select>
              <Input name="description" placeholder="Description (optional)" />
              <Button type="submit" className="w-full bg-eagle-orange hover:bg-eagle-orange-hover text-white">Create Shipment</Button>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
