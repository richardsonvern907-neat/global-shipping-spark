import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Search, MapPin, Clock, CheckCircle, Truck, Package, Shield, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { getShipmentByTracking } from '@/lib/store';
import { Shipment, ShipmentStatus } from '@/types';

const STATUS_ORDER: ShipmentStatus[] = ['picked_up', 'in_transit', 'customs', 'out_for_delivery', 'delivered'];
const STATUS_LABELS: Record<ShipmentStatus, string> = {
  picked_up: 'Picked Up',
  in_transit: 'In Transit',
  customs: 'Customs',
  out_for_delivery: 'Out for Delivery',
  delivered: 'Delivered',
};
const STATUS_ICONS: Record<ShipmentStatus, React.ElementType> = {
  picked_up: Package,
  in_transit: Truck,
  customs: Shield,
  out_for_delivery: Plane,
  delivered: CheckCircle,
};

function getLocationFeedback(origin: string, destination: string, status: ShipmentStatus): string {
  const o = origin.toLowerCase();
  const d = destination.toLowerCase();
  if (o.includes('dubai') && (d.includes('united states') || d.includes('usa') || d.includes('us'))) {
    switch (status) {
      case 'picked_up': return `Package collected from Dubai logistics hub`;
      case 'in_transit': return `Departed Dubai Hub – En route to US East Coast, ETA 72h`;
      case 'customs': return `Clearing US Customs at JFK International`;
      case 'out_for_delivery': return `Package out for delivery in destination city`;
      case 'delivered': return `Successfully delivered in the United States`;
    }
  }
  switch (status) {
    case 'picked_up': return `Package collected from ${origin}`;
    case 'in_transit': return `Shipment in transit from ${origin} to ${destination}`;
    case 'customs': return `Clearing customs at destination country`;
    case 'out_for_delivery': return `Out for delivery in ${destination}`;
    case 'delivered': return `Successfully delivered in ${destination}`;
  }
}

export default function TrackingPage() {
  const [searchParams] = useSearchParams();
  const [trackingInput, setTrackingInput] = useState(searchParams.get('number') || '');
  const [shipment, setShipment] = useState<Shipment | null>(null);
  const [notFound, setNotFound] = useState(false);
  const [simulatedStatus, setSimulatedStatus] = useState<ShipmentStatus>('picked_up');
  const [progress, setProgress] = useState(0);

  const search = (number?: string) => {
    const num = (number || trackingInput).trim().toUpperCase();
    if (!num) return;
    const s = getShipmentByTracking(num);
    if (s) {
      setShipment(s);
      setSimulatedStatus(s.status);
      setNotFound(false);
    } else {
      setShipment(null);
      setNotFound(true);
    }
  };

  useEffect(() => {
    if (searchParams.get('number')) search(searchParams.get('number')!);
  }, []);

  // Animated progress simulation
  useEffect(() => {
    if (!shipment) return;
    const statusIdx = STATUS_ORDER.indexOf(simulatedStatus);
    const targetProgress = ((statusIdx + 1) / STATUS_ORDER.length) * 100;
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= targetProgress) { clearInterval(timer); return targetProgress; }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [simulatedStatus, shipment]);

  // Auto-advance status simulation
  useEffect(() => {
    if (!shipment || simulatedStatus === 'delivered') return;
    const timer = setTimeout(() => {
      const idx = STATUS_ORDER.indexOf(simulatedStatus);
      if (idx < STATUS_ORDER.length - 1) {
        setSimulatedStatus(STATUS_ORDER[idx + 1]);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [simulatedStatus, shipment]);

  return (
    <div className="min-h-screen py-8 md:py-16">
      <div className="container max-w-3xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Track Your Shipment</h1>
          <p className="text-muted-foreground">Enter your EAGLE-EXPRESS tracking number (EE + 10 digits)</p>
        </div>

        <form onSubmit={e => { e.preventDefault(); search(); }} className="flex gap-3 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              value={trackingInput}
              onChange={e => setTrackingInput(e.target.value)}
              placeholder="EE1234567890"
              className="pl-10 h-12"
              aria-label="Tracking number"
            />
          </div>
          <Button type="submit" className="h-12 px-8 bg-eagle-orange hover:bg-eagle-orange-hover text-white">Track</Button>
        </form>

        {notFound && (
          <Card className="animate-fade-in">
            <CardContent className="text-center py-8">
              <Package className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
              <p className="font-medium">No shipment found</p>
              <p className="text-sm text-muted-foreground mt-1">Please check your tracking number and try again. Format: EE followed by 10 digits.</p>
            </CardContent>
          </Card>
        )}

        {shipment && (
          <div className="space-y-6 animate-fade-in">
            {/* Summary Card */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="font-mono text-eagle-orange">{shipment.trackingNumber}</span>
                  <span className={`text-sm px-3 py-1 rounded-full ${
                    simulatedStatus === 'delivered' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
                    'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                    {STATUS_LABELS[simulatedStatus]}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div><span className="text-muted-foreground">From:</span> {shipment.origin}</div>
                  <div><span className="text-muted-foreground">To:</span> {shipment.destination}</div>
                  <div><span className="text-muted-foreground">Weight:</span> {shipment.weight} kg</div>
                  <div className="flex items-center gap-1"><Clock className="h-3 w-3 text-muted-foreground" /> ETA: {new Date(shipment.estimatedDelivery).toLocaleDateString()}</div>
                </div>

                {/* Progress Bar */}
                <div>
                  <Progress value={progress} className="h-3" />
                  <div className="flex justify-between mt-2">
                    {STATUS_ORDER.map((s, i) => {
                      const Icon = STATUS_ICONS[s];
                      const active = STATUS_ORDER.indexOf(simulatedStatus) >= i;
                      return (
                        <div key={s} className={`flex flex-col items-center ${active ? 'text-eagle-orange' : 'text-muted-foreground'}`}>
                          <Icon className="h-4 w-4" />
                          <span className="text-[10px] mt-1 hidden sm:block">{STATUS_LABELS[s]}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Location Feedback */}
                <div className="p-3 rounded-lg bg-secondary border text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-eagle-orange animate-pulse-slow" />
                    <span className="font-medium">{getLocationFeedback(shipment.origin, shipment.destination, simulatedStatus)}</span>
                  </div>
                </div>

                {/* Map Placeholder */}
                {/* 🔌 API PLACEHOLDER: Integrate Mapbox/Google Maps for real-time route visualization */}
                <div className="h-48 rounded-lg bg-secondary border flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 mx-auto mb-2" />
                    <p className="text-sm">Interactive Route Map</p>
                    <p className="text-xs">{shipment.origin} → {shipment.destination}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Status Timeline */}
            <Card>
              <CardHeader><CardTitle className="text-lg">Status Timeline</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {STATUS_ORDER.map((s, i) => {
                    const reached = STATUS_ORDER.indexOf(simulatedStatus) >= i;
                    const Icon = STATUS_ICONS[s];
                    return (
                      <div key={s} className={`flex gap-3 ${reached ? '' : 'opacity-40'}`}>
                        <div className={`h-8 w-8 rounded-full flex items-center justify-center shrink-0 ${
                          reached ? 'bg-eagle-orange text-white' : 'bg-secondary text-muted-foreground'
                        }`}>
                          <Icon className="h-4 w-4" />
                        </div>
                        <div>
                          <p className="font-medium text-sm">{STATUS_LABELS[s]}</p>
                          <p className="text-xs text-muted-foreground">
                            {reached ? getLocationFeedback(shipment.origin, shipment.destination, s) : 'Pending'}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
