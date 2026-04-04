/**
 * EAGLE-EXPRESS Data Store
 * 
 * Enterprise simulation layer using localStorage + in-memory state.
 * 
 * 🔄 BACKEND SWAP INSTRUCTIONS:
 * 1. Replace each function with Supabase client calls
 * 2. Users: supabase.auth.signUp / signInWithPassword
 * 3. Shipments: supabase.from('shipments').select/insert/update/delete
 * 4. Bookings: supabase.from('bookings').select/insert
 * 5. Tickets: supabase.from('support_tickets').select/insert/update
 * 
 * 🔌 API INTEGRATION PLACEHOLDERS:
 * - ShipEngine: POST /v1/rates for multi-carrier rate estimates
 * - EasyPost: POST /trackers for 100+ carrier tracking
 * - DHL Unified Tracking: GET /track/shipments?trackingNumber=EE...
 */

import { User, Shipment, Booking, SupportTicket, ShipmentStatus, StatusUpdate, QuoteRequest, QuoteResult, ClientType } from '@/types';

const STORAGE_KEYS = {
  USERS: 'eagle_users',
  CURRENT_USER: 'eagle_current_user',
  SHIPMENTS: 'eagle_shipments',
  BOOKINGS: 'eagle_bookings',
  TICKETS: 'eagle_tickets',
  COOKIE_CONSENT: 'eagle_cookie_consent',
} as const;

// --- Helpers ---

function generateId(): string {
  return crypto.randomUUID();
}

export function generateTrackingNumber(): string {
  const digits = Math.floor(1000000000 + Math.random() * 9000000000).toString();
  return `EE${digits}`;
}

export function generateTicketNumber(): string {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let result = 'TK-';
  for (let i = 0; i < 6; i++) result += chars.charAt(Math.floor(Math.random() * chars.length));
  return result;
}

function getFromStorage<T>(key: string, fallback: T): T {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : fallback;
  } catch {
    return fallback;
  }
}

function saveToStorage<T>(key: string, data: T): void {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (e) {
    console.error('Storage write error:', e);
  }
}

// --- Users / Auth ---

export function getUsers(): User[] {
  return getFromStorage<User[]>(STORAGE_KEYS.USERS, []);
}

export function getCurrentUser(): User | null {
  return getFromStorage<User | null>(STORAGE_KEYS.CURRENT_USER, null);
}

export function signUp(name: string, email: string, password: string, clientType: ClientType, company?: string): User {
  const users = getUsers();
  if (users.find(u => u.email.toLowerCase() === email.toLowerCase())) {
    throw new Error('An account with this email already exists.');
  }
  const user: User = {
    id: generateId(),
    name,
    email,
    password, // 🔄 BACKEND SWAP: Supabase handles password hashing
    clientType,
    company,
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  saveToStorage(STORAGE_KEYS.USERS, users);
  saveToStorage(STORAGE_KEYS.CURRENT_USER, user);
  // 📊 ANALYTICS PLACEHOLDER: track('user_signup', { clientType, company: !!company })
  return user;
}

export function login(email: string, password: string): User {
  const users = getUsers();
  const user = users.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === password);
  if (!user) throw new Error('Invalid email or password.');
  saveToStorage(STORAGE_KEYS.CURRENT_USER, user);
  // 📊 ANALYTICS PLACEHOLDER: track('user_login', { userId: user.id })
  return user;
}

export function logout(): void {
  localStorage.removeItem(STORAGE_KEYS.CURRENT_USER);
}

export function isAdmin(): boolean {
  const user = getCurrentUser();
  return user?.isAdmin === true;
}

export function loginAsAdmin(password: string): boolean {
  if (password === 'eagle-admin-2024') {
    const adminUser: User = {
      id: 'admin-001',
      name: 'Admin',
      email: 'admin@eagle-express.ch',
      password: '',
      clientType: 'international',
      isAdmin: true,
      createdAt: new Date().toISOString(),
    };
    saveToStorage(STORAGE_KEYS.CURRENT_USER, adminUser);
    return true;
  }
  return false;
}

// --- Shipments ---

function getDefaultStatusHistory(origin: string, destination: string): StatusUpdate[] {
  const now = new Date();
  return [
    {
      status: 'picked_up',
      timestamp: now.toISOString(),
      location: origin,
      description: `Package picked up from ${origin}`,
    },
  ];
}

export function getShipments(): Shipment[] {
  return getFromStorage<Shipment[]>(STORAGE_KEYS.SHIPMENTS, []);
}

export function getShipmentByTracking(trackingNumber: string): Shipment | undefined {
  return getShipments().find(s => s.trackingNumber === trackingNumber);
}

export function getUserShipments(userId: string): Shipment[] {
  return getShipments().filter(s => s.userId === userId);
}

export function createShipment(data: {
  origin: string;
  destination: string;
  weight: number;
  description?: string;
  clientType: ClientType;
  userId?: string;
  dimensions?: { length: number; width: number; height: number };
}): Shipment {
  const trackingNumber = generateTrackingNumber();
  const now = new Date();
  const estimatedDays = calculateEstimatedDays(data.origin, data.destination);
  const estimatedDelivery = new Date(now.getTime() + estimatedDays * 24 * 60 * 60 * 1000).toISOString();

  const shipment: Shipment = {
    id: generateId(),
    trackingNumber,
    origin: data.origin,
    destination: data.destination,
    status: 'picked_up',
    weight: data.weight,
    dimensions: data.dimensions,
    description: data.description,
    clientType: data.clientType,
    userId: data.userId,
    createdAt: now.toISOString(),
    updatedAt: now.toISOString(),
    estimatedDelivery,
    statusHistory: getDefaultStatusHistory(data.origin, data.destination),
  };

  const shipments = getShipments();
  shipments.push(shipment);
  saveToStorage(STORAGE_KEYS.SHIPMENTS, shipments);
  // 📊 ANALYTICS PLACEHOLDER: track('shipment_created', { origin, destination, weight })
  return shipment;
}

export function updateShipmentStatus(trackingNumber: string, status: ShipmentStatus, location: string, description: string): Shipment | null {
  const shipments = getShipments();
  const idx = shipments.findIndex(s => s.trackingNumber === trackingNumber);
  if (idx === -1) return null;

  shipments[idx].status = status;
  shipments[idx].updatedAt = new Date().toISOString();
  shipments[idx].statusHistory.push({
    status,
    timestamp: new Date().toISOString(),
    location,
    description,
  });

  saveToStorage(STORAGE_KEYS.SHIPMENTS, shipments);
  return shipments[idx];
}

export function deleteShipment(id: string): void {
  const shipments = getShipments().filter(s => s.id !== id);
  saveToStorage(STORAGE_KEYS.SHIPMENTS, shipments);
}

export function bulkUpdateStatus(ids: string[], status: ShipmentStatus): void {
  const shipments = getShipments();
  ids.forEach(id => {
    const idx = shipments.findIndex(s => s.id === id);
    if (idx !== -1) {
      shipments[idx].status = status;
      shipments[idx].updatedAt = new Date().toISOString();
      shipments[idx].statusHistory.push({
        status,
        timestamp: new Date().toISOString(),
        location: 'System Update',
        description: `Bulk status update to ${status}`,
      });
    }
  });
  saveToStorage(STORAGE_KEYS.SHIPMENTS, shipments);
}

// --- Bookings ---

export function getBookings(): Booking[] {
  return getFromStorage<Booking[]>(STORAGE_KEYS.BOOKINGS, []);
}

export function getUserBookings(userId: string): Booking[] {
  return getBookings().filter(b => b.userId === userId);
}

export function createBooking(data: {
  shipmentId: string;
  trackingNumber: string;
  userId?: string;
  origin: string;
  destination: string;
  weight: number;
  packageType: string;
  clientType: ClientType;
  price: number;
}): Booking {
  const booking: Booking = {
    id: generateId(),
    ...data,
    currency: 'CHF',
    paymentStatus: 'pending',
    createdAt: new Date().toISOString(),
  };

  const bookings = getBookings();
  bookings.push(booking);
  saveToStorage(STORAGE_KEYS.BOOKINGS, bookings);
  return booking;
}

export function updateBookingPayment(bookingId: string, ticketId: string): void {
  const bookings = getBookings();
  const idx = bookings.findIndex(b => b.id === bookingId);
  if (idx !== -1) {
    bookings[idx].paymentStatus = 'confirmed';
    bookings[idx].ticketId = ticketId;
    saveToStorage(STORAGE_KEYS.BOOKINGS, bookings);
  }
}

// --- Support Tickets ---

export function getTickets(): SupportTicket[] {
  return getFromStorage<SupportTicket[]>(STORAGE_KEYS.TICKETS, []);
}

export function createTicket(data: {
  name: string;
  email: string;
  subject: string;
  message: string;
  priority: SupportTicket['priority'];
}): SupportTicket {
  const ticket: SupportTicket = {
    id: generateId(),
    ticketNumber: generateTicketNumber(),
    ...data,
    status: 'open',
    createdAt: new Date().toISOString(),
  };

  const tickets = getTickets();
  tickets.push(ticket);
  saveToStorage(STORAGE_KEYS.TICKETS, tickets);
  // 📊 ANALYTICS PLACEHOLDER: track('ticket_created', { priority: data.priority })
  return ticket;
}

// --- Quote Calculator ---

/**
 * Mock pricing engine for enterprise demo.
 * 
 * 🔌 API PLACEHOLDER: Replace with ShipEngine POST /v1/rates
 * or EasyPost POST /rates for real multi-carrier quotes.
 * 
 * 🚦 RATE LIMITING PLACEHOLDER: Add express-rate-limit or
 * Supabase Edge Function rate limiting (10 req/min per IP)
 */
export function calculateQuote(request: QuoteRequest): QuoteResult {
  const { origin, destination, weight, clientType } = request;

  // Base rate per kg (mock)
  let ratePerKg = 8.50;
  let estimatedDays = 5;

  // Route-specific adjustments
  const route = `${origin.toLowerCase()}-${destination.toLowerCase()}`;
  if (route.includes('dubai') && route.includes('united states')) {
    ratePerKg = 12.75;
    estimatedDays = 3;
  } else if (route.includes('zurich') || route.includes('switzerland')) {
    ratePerKg = 6.50;
    estimatedDays = 2;
  } else if (route.includes('europe') || route.includes('eu')) {
    ratePerKg = 7.25;
    estimatedDays = 3;
  } else if (route.includes('asia') || route.includes('china') || route.includes('japan')) {
    ratePerKg = 11.00;
    estimatedDays = 5;
  }

  const basePrice = Math.round(ratePerKg * weight * 100) / 100;
  const discount = clientType === 'international' ? Math.round(basePrice * 0.15 * 100) / 100 : 0;
  const finalPrice = Math.round((basePrice - discount) * 100) / 100;

  return {
    basePrice,
    discount,
    finalPrice,
    currency: 'CHF',
    estimatedDays,
    service: clientType === 'international' ? 'EAGLE International Priority' : 'EAGLE Express',
  };
}

function calculateEstimatedDays(origin: string, destination: string): number {
  const route = `${origin.toLowerCase()}-${destination.toLowerCase()}`;
  if (route.includes('dubai') && route.includes('united states')) return 3;
  if (route.includes('zurich') || route.includes('switzerland')) return 2;
  return 5;
}

// --- Cookie Consent ---

export function getCookieConsent(): boolean {
  return getFromStorage<boolean>(STORAGE_KEYS.COOKIE_CONSENT, false);
}

export function setCookieConsent(accepted: boolean): void {
  saveToStorage(STORAGE_KEYS.COOKIE_CONSENT, accepted);
}
