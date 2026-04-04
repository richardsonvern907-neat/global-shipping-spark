

# EAGLE-EXPRESS Enterprise Logistics Platform

## Brand Identity
- **Primary Blue:** Deep navy (#003087) — trust, professionalism
- **Accent Orange:** Warm amber (#FF6600) — energy, speed
- **Dark mode** toggle with full theme support
- **Sans-serif typography:** Inter for body, bold headings
- **DHL-inspired but distinctly EAGLE-EXPRESS**

## Pages & Features

### 1. Homepage (`/`)
- Hero section with animated background, tagline "Connecting the World from Zurich"
- Prominent **Track Your Shipment** search box (EE + 10 digits)
- Services overview cards (Express, Freight, E-Commerce, Warehousing)
- **Quote Calculator** — select origin/destination, weight, client type (private/international) → dynamic mock pricing (includes Dubai→US example)
- Trust badges (ISO 9001, IATA, EcoVadis, Swiss GDP)
- GDPR/DSG cookie consent banner

### 2. Ship Now (`/ship`)
- Multi-step booking form: Origin → Destination → Package Details → Review
- Supports any global route (including Dubai → United States)
- On submit: generates tracking number (EE + 10 digits)
- Confirmation page with booking summary
- Payment step → "Contact Support for Payment Confirmation" modal with support form → instant simulated success message + ticket ID
- All bookings stored in localStorage

### 3. Tracking (`/tracking`)
- Enter tracking number → validates EE format
- Animated real-time progress bar with JS timers cycling through: **Picked Up → In Transit → Customs → Out for Delivery → Delivered**
- Location-specific feedback (e.g., "Departed Dubai Hub – En route to US East Coast, ETA 72h")
- Interactive map placeholder with route visualization
- Live status timeline with timestamps

### 4. Account System
- **Sign Up** (`/signup`): Name, email, password, client type (private/international), company (optional)
- Welcome modal: "Automated message sent to [email] — Welcome to EAGLE-EXPRESS!" with sample tracking number
- **Login** (`/login`): Email + password → loads dashboard
- All auth data persisted in localStorage

### 5. Client Dashboard (`/dashboard`)
- Authenticated user's booking history table
- Quick actions: Track, Rebook, Export CSV
- Route management panel
- Personalized greeting with client type badge

### 6. Admin Panel (`/admin`)
- Protected with simple auth toggle (admin password)
- Enterprise table of all shipments/routes
- Add, edit, delete shipments with instant updates
- Bulk actions (mark delivered, export)
- Analytics placeholder cards

### 7. About Us (`/about`)
- Company story: "Founded 2024 in Zurich, Switzerland"
- Mission, vision, sustainability commitment
- 4 realistic enterprise client testimonials (private + international)
- Certifications grid (ISO 9001:2015, Swiss GDP, IATA, EcoVadis)
- Team section placeholder

### 8. Contact & Support (`/contact`)
- Enterprise support form (name, email, subject, priority, message)
- Simulated ticket creation with instant reply + ticket ID
- Escalation workflow simulation
- **Floating support button** on all pages

## Cross-Cutting Features
- **Dark mode toggle** in header
- **Mobile-first responsive** design with hamburger menu
- **SEO meta tags** on every page
- **WCAG 2.2 accessibility** (aria labels, focus management, contrast)
- **Multi-language placeholder** (English default, German ready)
- **PWA manifest** for Add to Home Screen (no service worker)
- **Analytics event placeholders** throughout
- **API integration comments** for ShipEngine, EasyPost, DHL API
- **One-click backend swap** instructions in comments (localStorage → Supabase)
- **Input sanitization** on all forms with Zod validation
- **Rate limiting placeholders** in comments

## Footer
- Full enterprise legal links (Privacy, Terms, Impressum, Cookie Policy)
- © 2024 EAGLE-EXPRESS, Zurich, Switzerland
- Social media icons, newsletter signup

## Data Layer
- All state managed via localStorage + React context
- TypeScript interfaces for Shipment, User, Booking, Ticket
- Clear comments marking every localStorage call with Supabase migration path

