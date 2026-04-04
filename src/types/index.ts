/**
 * EAGLE-EXPRESS Enterprise Type Definitions
 * 
 * 🔄 BACKEND SWAP: These interfaces map directly to database tables.
 * When migrating to Supabase, create tables matching these schemas.
 * - User → auth.users + profiles table
 * - Shipment → shipments table
 * - Booking → bookings table
 * - SupportTicket → support_tickets table
 */

export type ClientType = 'private' | 'international';

export type ShipmentStatus = 'picked_up' | 'in_transit' | 'customs' | 'out_for_delivery' | 'delivered';

export type TicketPriority = 'low' | 'medium' | 'high' | 'urgent';

export type TicketStatus = 'open' | 'in_progress' | 'resolved' | 'escalated';

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // 🔄 BACKEND SWAP: Remove — handled by Supabase Auth
  clientType: ClientType;
  company?: string;
  createdAt: string;
  isAdmin?: boolean;
}

export interface Shipment {
  id: string;
  trackingNumber: string; // Format: EE + 10 digits
  origin: string;
  destination: string;
  status: ShipmentStatus;
  weight: number; // kg
  dimensions?: { length: number; width: number; height: number };
  description?: string;
  clientType: ClientType;
  userId?: string;
  createdAt: string;
  updatedAt: string;
  estimatedDelivery: string;
  statusHistory: StatusUpdate[];
  // 🔄 API PLACEHOLDER: ShipEngine/EasyPost carrier info
  // carrier?: string;
  // carrierTrackingId?: string;
}

export interface StatusUpdate {
  status: ShipmentStatus;
  timestamp: string;
  location: string;
  description: string;
}

export interface Booking {
  id: string;
  shipmentId: string;
  trackingNumber: string;
  userId?: string;
  origin: string;
  destination: string;
  weight: number;
  packageType: string;
  clientType: ClientType;
  price: number;
  currency: string;
  paymentStatus: 'pending' | 'confirmed';
  createdAt: string;
  ticketId?: string;
}

export interface SupportTicket {
  id: string;
  ticketNumber: string; // Format: TK-XXXXXX
  name: string;
  email: string;
  subject: string;
  message: string;
  priority: TicketPriority;
  status: TicketStatus;
  createdAt: string;
  resolvedAt?: string;
}

export interface QuoteRequest {
  origin: string;
  destination: string;
  weight: number;
  clientType: ClientType;
}

export interface QuoteResult {
  basePrice: number;
  discount: number;
  finalPrice: number;
  currency: string;
  estimatedDays: number;
  service: string;
}
