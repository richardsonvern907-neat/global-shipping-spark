import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/context/AuthContext';
import { getUserBookings, getUserShipments } from '@/lib/store';
import { Package, Truck, Download, User, Building } from 'lucide-react';

export default function DashboardPage() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated || !user) return <Navigate to="/login" replace />;

  const bookings = getUserBookings(user.id);
  const shipments = getUserShipments(user.id);

  const exportCSV = () => {
    const headers = 'Tracking,Origin,Destination,Weight,Status,Date\n';
    const rows = shipments.map(s => `${s.trackingNumber},${s.origin},${s.destination},${s.weight},${s.status},${s.createdAt}`).join('\n');
    const blob = new Blob([headers + rows], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url; a.download = 'eagle-express-shipments.csv'; a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              {user.clientType === 'international' ? <Building className="h-7 w-7 text-eagle-orange" /> : <User className="h-7 w-7 text-eagle-orange" />}
              Welcome, {user.name}
            </h1>
            <p className="text-muted-foreground mt-1">
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                user.clientType === 'international' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400' : 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
              }`}>
                {user.clientType === 'international' ? 'International Business' : 'Private Client'}
              </span>
              {user.company && <span className="ml-2 text-sm">{user.company}</span>}
            </p>
          </div>
          <div className="flex gap-2">
            <Link to="/ship"><Button className="bg-eagle-orange hover:bg-eagle-orange-hover text-white gap-1"><Package className="h-4 w-4" /> Ship Now</Button></Link>
            <Button variant="outline" onClick={exportCSV} className="gap-1"><Download className="h-4 w-4" /> Export CSV</Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-eagle-orange">{shipments.length}</p>
              <p className="text-sm text-muted-foreground">Total Shipments</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold text-eagle-success">{shipments.filter(s => s.status === 'delivered').length}</p>
              <p className="text-sm text-muted-foreground">Delivered</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-3xl font-bold">{shipments.filter(s => s.status !== 'delivered').length}</p>
              <p className="text-sm text-muted-foreground">In Progress</p>
            </CardContent>
          </Card>
        </div>

        {/* Bookings Table */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><Truck className="h-5 w-5 text-eagle-orange" /> Booking History</CardTitle>
          </CardHeader>
          <CardContent>
            {bookings.length === 0 ? (
              <div className="text-center py-8 text-muted-foreground">
                <Package className="h-12 w-12 mx-auto mb-3 opacity-50" />
                <p>No bookings yet. <Link to="/ship" className="text-eagle-orange hover:underline">Create your first shipment</Link></p>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Tracking</TableHead>
                    <TableHead>Route</TableHead>
                    <TableHead>Weight</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Payment</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {bookings.map(b => (
                    <TableRow key={b.id}>
                      <TableCell className="font-mono text-sm text-eagle-orange">{b.trackingNumber}</TableCell>
                      <TableCell className="text-sm">{b.origin} → {b.destination}</TableCell>
                      <TableCell>{b.weight} kg</TableCell>
                      <TableCell>{b.currency} {b.price.toFixed(2)}</TableCell>
                      <TableCell>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          b.paymentStatus === 'confirmed' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                        }`}>
                          {b.paymentStatus}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Link to={`/tracking?number=${b.trackingNumber}`}>
                          <Button variant="ghost" size="sm" className="text-eagle-orange">Track</Button>
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
