export const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
  { code: 'pt', label: 'Português', flag: '🇧🇷' },
  { code: 'zh', label: '中文', flag: '🇨🇳' },
  { code: 'ar', label: 'العربية', flag: '🇸🇦' },
  { code: 'ja', label: '日本語', flag: '🇯🇵' },
  { code: 'ko', label: '한국어', flag: '🇰🇷' },
  { code: 'it', label: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', label: 'Nederlands', flag: '🇳🇱' },
  { code: 'tr', label: 'Türkçe', flag: '🇹🇷' },
] as const;

export type LangCode = typeof LANGUAGES[number]['code'];

type TranslationKeys = {
  // Nav
  nav_home: string;
  nav_ship: string;
  nav_track: string;
  nav_about: string;
  nav_contact: string;
  nav_login: string;
  nav_signup: string;
  nav_logout: string;
  nav_dashboard: string;

  // Hero
  hero_title_1: string;
  hero_title_2: string;
  hero_subtitle: string;
  hero_track_placeholder: string;
  hero_track_btn: string;
  hero_badge_tracking: string;
  hero_badge_countries: string;
  hero_badge_quality: string;

  // Services
  services_title: string;
  service_express: string;
  service_express_desc: string;
  service_freight: string;
  service_freight_desc: string;
  service_ecommerce: string;
  service_ecommerce_desc: string;
  service_warehouse: string;
  service_warehouse_desc: string;

  // Stats
  stat_countries: string;
  stat_ontime: string;
  stat_shipments: string;
  stat_support: string;

  // Quote
  quote_title: string;
  quote_origin: string;
  quote_destination: string;
  quote_weight: string;
  quote_client_type: string;
  quote_private: string;
  quote_international: string;
  quote_calculate: string;
  quote_result: string;
  quote_delivery: string;

  // Ship
  ship_title: string;
  ship_subtitle: string;
  ship_origin: string;
  ship_destination: string;
  ship_weight: string;
  ship_package_type: string;
  ship_description: string;
  ship_client_type: string;
  ship_next: string;
  ship_back: string;
  ship_review_title: string;
  ship_confirm: string;
  ship_payment_title: string;
  ship_payment_desc: string;
  ship_contact_support: string;
  ship_success_title: string;
  ship_tracking_number: string;
  ship_go_track: string;
  ship_go_dashboard: string;

  // Tracking
  track_title: string;
  track_subtitle: string;
  track_btn: string;
  track_status_picked: string;
  track_status_transit: string;
  track_status_customs: string;
  track_status_delivery: string;
  track_status_delivered: string;
  track_not_found: string;
  track_live_updates: string;

  // Auth
  auth_login_title: string;
  auth_signup_title: string;
  auth_email: string;
  auth_password: string;
  auth_name: string;
  auth_company: string;
  auth_client_type: string;
  auth_login_btn: string;
  auth_signup_btn: string;
  auth_no_account: string;
  auth_has_account: string;
  auth_welcome: string;
  auth_welcome_msg: string;

  // Dashboard
  dash_title: string;
  dash_bookings: string;
  dash_export: string;
  dash_no_bookings: string;
  dash_status: string;
  dash_date: string;
  dash_route: string;

  // About
  about_title: string;
  about_subtitle: string;
  about_story: string;
  about_mission: string;
  about_testimonials: string;
  about_certs: string;

  // Contact
  contact_title: string;
  contact_subtitle: string;
  contact_name: string;
  contact_email: string;
  contact_subject: string;
  contact_priority: string;
  contact_message: string;
  contact_send: string;
  contact_success: string;

  // Footer
  footer_privacy: string;
  footer_terms: string;
  footer_impressum: string;
  footer_cookies: string;
  footer_newsletter: string;
  footer_subscribe: string;
  footer_rights: string;

  // Cookie
  cookie_message: string;
  cookie_accept: string;
  cookie_decline: string;

  // Common
  common_loading: string;
  common_error: string;
  common_save: string;
  common_cancel: string;
  common_delete: string;
  common_edit: string;
  common_search: string;
  common_close: string;
};

export type Translations = Record<LangCode, TranslationKeys>;

export const translations: Translations = {
  en: {
    nav_home: 'Home', nav_ship: 'Ship Now', nav_track: 'Track', nav_about: 'About', nav_contact: 'Contact',
    nav_login: 'Login', nav_signup: 'Sign Up', nav_logout: 'Logout', nav_dashboard: 'Dashboard',
    hero_title_1: 'Connecting the World', hero_title_2: 'from Zurich',
    hero_subtitle: 'Enterprise logistics powered by Swiss precision. Ship anywhere, track everything, deliver on time.',
    hero_track_placeholder: 'Track your shipment (e.g. EE1234567890)',
    hero_track_btn: 'Track', hero_badge_tracking: 'Real-time tracking', hero_badge_countries: '200+ countries', hero_badge_quality: 'Swiss quality',
    services_title: 'Our Services',
    service_express: 'Express Shipping', service_express_desc: 'Next-day and same-day delivery across Switzerland and Europe.',
    service_freight: 'International Freight', service_freight_desc: 'Global cargo solutions for businesses of any size, any route.',
    service_ecommerce: 'E-Commerce Solutions', service_ecommerce_desc: 'Seamless fulfillment and returns management for online retailers.',
    service_warehouse: 'Warehousing & Logistics', service_warehouse_desc: 'State-of-the-art storage facilities with real-time inventory tracking.',
    stat_countries: 'Countries Served', stat_ontime: 'On-Time Delivery', stat_shipments: 'Monthly Shipments', stat_support: 'Global Support',
    quote_title: 'Get an Instant Quote', quote_origin: 'Origin', quote_destination: 'Destination', quote_weight: 'Weight (kg)',
    quote_client_type: 'Client Type', quote_private: 'Private', quote_international: 'International',
    quote_calculate: 'Calculate Quote', quote_result: 'Estimated Price', quote_delivery: 'Estimated Delivery',
    ship_title: 'Shipment Details', ship_subtitle: 'Enter your shipment information. We support any global route.',
    ship_origin: 'Origin', ship_destination: 'Destination', ship_weight: 'Weight (kg)', ship_package_type: 'Package Type',
    ship_description: 'Description (optional)', ship_client_type: 'Client Type', ship_next: 'Next', ship_back: 'Back',
    ship_review_title: 'Review Your Shipment', ship_confirm: 'Confirm & Book',
    ship_payment_title: 'Payment', ship_payment_desc: 'Contact support to complete payment for your shipment.',
    ship_contact_support: 'Contact Support for Payment',
    ship_success_title: 'Booking Confirmed!', ship_tracking_number: 'Tracking Number',
    ship_go_track: 'Track Shipment', ship_go_dashboard: 'Go to Dashboard',
    track_title: 'Track Your Shipment', track_subtitle: 'Enter your EAGLE-EXPRESS tracking number (EE + 10 digits)',
    track_btn: 'Track', track_status_picked: 'Picked Up', track_status_transit: 'In Transit',
    track_status_customs: 'Customs', track_status_delivery: 'Out for Delivery', track_status_delivered: 'Delivered',
    track_not_found: 'Shipment not found. Please check your tracking number.',
    track_live_updates: 'Live Updates',
    auth_login_title: 'Welcome Back', auth_signup_title: 'Create Account',
    auth_email: 'Email', auth_password: 'Password', auth_name: 'Full Name',
    auth_company: 'Company (optional)', auth_client_type: 'Client Type',
    auth_login_btn: 'Login', auth_signup_btn: 'Sign Up',
    auth_no_account: "Don't have an account?", auth_has_account: 'Already have an account?',
    auth_welcome: 'Welcome to EAGLE-EXPRESS!',
    auth_welcome_msg: 'Automated message sent to {email} — Your account is active.',
    dash_title: 'Dashboard', dash_bookings: 'Your Bookings', dash_export: 'Export CSV',
    dash_no_bookings: 'No bookings yet. Ship your first package!',
    dash_status: 'Status', dash_date: 'Date', dash_route: 'Route',
    about_title: 'About EAGLE-EXPRESS', about_subtitle: 'Founded 2024 in Zurich, Switzerland',
    about_story: 'Connecting the world with reliable, sustainable logistics.',
    about_mission: 'Our Mission', about_testimonials: 'What Our Clients Say', about_certs: 'Certifications',
    contact_title: 'Contact Us', contact_subtitle: 'Our support team is here to help 24/7.',
    contact_name: 'Name', contact_email: 'Email', contact_subject: 'Subject',
    contact_priority: 'Priority', contact_message: 'Message', contact_send: 'Send Message',
    contact_success: 'Message sent! We\'ll respond within 24 hours.',
    footer_privacy: 'Privacy Policy', footer_terms: 'Terms of Service', footer_impressum: 'Impressum',
    footer_cookies: 'Cookie Policy', footer_newsletter: 'Newsletter',
    footer_subscribe: 'Subscribe', footer_rights: 'All rights reserved.',
    cookie_message: 'We use cookies to enhance your experience. By continuing, you agree to our Cookie Policy and comply with Swiss DSG / EU GDPR regulations.',
    cookie_accept: 'Accept All', cookie_decline: 'Decline',
    common_loading: 'Loading...', common_error: 'An error occurred', common_save: 'Save',
    common_cancel: 'Cancel', common_delete: 'Delete', common_edit: 'Edit',
    common_search: 'Search', common_close: 'Close',
  },

  es: {
    nav_home: 'Inicio', nav_ship: 'Enviar', nav_track: 'Rastrear', nav_about: 'Nosotros', nav_contact: 'Contacto',
    nav_login: 'Iniciar Sesión', nav_signup: 'Registrarse', nav_logout: 'Cerrar Sesión', nav_dashboard: 'Panel',
    hero_title_1: 'Conectando el Mundo', hero_title_2: 'desde Zúrich',
    hero_subtitle: 'Logística empresarial impulsada por la precisión suiza. Envíe a cualquier lugar, rastree todo, entregue a tiempo.',
    hero_track_placeholder: 'Rastree su envío (ej. EE1234567890)',
    hero_track_btn: 'Rastrear', hero_badge_tracking: 'Rastreo en tiempo real', hero_badge_countries: '200+ países', hero_badge_quality: 'Calidad suiza',
    services_title: 'Nuestros Servicios',
    service_express: 'Envío Express', service_express_desc: 'Entrega al día siguiente en Suiza y Europa.',
    service_freight: 'Carga Internacional', service_freight_desc: 'Soluciones de carga global para empresas de cualquier tamaño.',
    service_ecommerce: 'Soluciones E-Commerce', service_ecommerce_desc: 'Cumplimiento y gestión de devoluciones para minoristas en línea.',
    service_warehouse: 'Almacenamiento y Logística', service_warehouse_desc: 'Instalaciones de almacenamiento con seguimiento de inventario en tiempo real.',
    stat_countries: 'Países Atendidos', stat_ontime: 'Entrega Puntual', stat_shipments: 'Envíos Mensuales', stat_support: 'Soporte Global',
    quote_title: 'Obtenga una Cotización', quote_origin: 'Origen', quote_destination: 'Destino', quote_weight: 'Peso (kg)',
    quote_client_type: 'Tipo de Cliente', quote_private: 'Privado', quote_international: 'Internacional',
    quote_calculate: 'Calcular Cotización', quote_result: 'Precio Estimado', quote_delivery: 'Entrega Estimada',
    ship_title: 'Detalles del Envío', ship_subtitle: 'Ingrese la información de su envío. Soportamos cualquier ruta global.',
    ship_origin: 'Origen', ship_destination: 'Destino', ship_weight: 'Peso (kg)', ship_package_type: 'Tipo de Paquete',
    ship_description: 'Descripción (opcional)', ship_client_type: 'Tipo de Cliente', ship_next: 'Siguiente', ship_back: 'Atrás',
    ship_review_title: 'Revise su Envío', ship_confirm: 'Confirmar y Reservar',
    ship_payment_title: 'Pago', ship_payment_desc: 'Contacte soporte para completar el pago.',
    ship_contact_support: 'Contactar Soporte para Pago',
    ship_success_title: '¡Reserva Confirmada!', ship_tracking_number: 'Número de Rastreo',
    ship_go_track: 'Rastrear Envío', ship_go_dashboard: 'Ir al Panel',
    track_title: 'Rastree su Envío', track_subtitle: 'Ingrese su número de rastreo EAGLE-EXPRESS (EE + 10 dígitos)',
    track_btn: 'Rastrear', track_status_picked: 'Recogido', track_status_transit: 'En Tránsito',
    track_status_customs: 'Aduanas', track_status_delivery: 'En Reparto', track_status_delivered: 'Entregado',
    track_not_found: 'Envío no encontrado. Verifique su número de rastreo.',
    track_live_updates: 'Actualizaciones en Vivo',
    auth_login_title: 'Bienvenido de Nuevo', auth_signup_title: 'Crear Cuenta',
    auth_email: 'Correo', auth_password: 'Contraseña', auth_name: 'Nombre Completo',
    auth_company: 'Empresa (opcional)', auth_client_type: 'Tipo de Cliente',
    auth_login_btn: 'Iniciar Sesión', auth_signup_btn: 'Registrarse',
    auth_no_account: '¿No tiene cuenta?', auth_has_account: '¿Ya tiene cuenta?',
    auth_welcome: '¡Bienvenido a EAGLE-EXPRESS!',
    auth_welcome_msg: 'Mensaje automático enviado a {email} — Su cuenta está activa.',
    dash_title: 'Panel', dash_bookings: 'Sus Reservas', dash_export: 'Exportar CSV',
    dash_no_bookings: 'Sin reservas aún. ¡Envíe su primer paquete!',
    dash_status: 'Estado', dash_date: 'Fecha', dash_route: 'Ruta',
    about_title: 'Sobre EAGLE-EXPRESS', about_subtitle: 'Fundada en 2024 en Zúrich, Suiza',
    about_story: 'Conectando el mundo con logística confiable y sostenible.',
    about_mission: 'Nuestra Misión', about_testimonials: 'Lo Que Dicen Nuestros Clientes', about_certs: 'Certificaciones',
    contact_title: 'Contáctenos', contact_subtitle: 'Nuestro equipo de soporte está disponible 24/7.',
    contact_name: 'Nombre', contact_email: 'Correo', contact_subject: 'Asunto',
    contact_priority: 'Prioridad', contact_message: 'Mensaje', contact_send: 'Enviar Mensaje',
    contact_success: '¡Mensaje enviado! Responderemos en 24 horas.',
    footer_privacy: 'Política de Privacidad', footer_terms: 'Términos de Servicio', footer_impressum: 'Impressum',
    footer_cookies: 'Política de Cookies', footer_newsletter: 'Boletín',
    footer_subscribe: 'Suscribirse', footer_rights: 'Todos los derechos reservados.',
    cookie_message: 'Usamos cookies para mejorar su experiencia. Al continuar, acepta nuestra Política de Cookies y cumplimos con DSG suiza / GDPR de la UE.',
    cookie_accept: 'Aceptar Todo', cookie_decline: 'Rechazar',
    common_loading: 'Cargando...', common_error: 'Ocurrió un error', common_save: 'Guardar',
    common_cancel: 'Cancelar', common_delete: 'Eliminar', common_edit: 'Editar',
    common_search: 'Buscar', common_close: 'Cerrar',
  },

  fr: {
    nav_home: 'Accueil', nav_ship: 'Expédier', nav_track: 'Suivre', nav_about: 'À Propos', nav_contact: 'Contact',
    nav_login: 'Connexion', nav_signup: 'Inscription', nav_logout: 'Déconnexion', nav_dashboard: 'Tableau de Bord',
    hero_title_1: 'Connecter le Monde', hero_title_2: 'depuis Zurich',
    hero_subtitle: 'Logistique d\'entreprise alimentée par la précision suisse. Expédiez partout, suivez tout, livrez à temps.',
    hero_track_placeholder: 'Suivez votre envoi (ex. EE1234567890)',
    hero_track_btn: 'Suivre', hero_badge_tracking: 'Suivi en temps réel', hero_badge_countries: '200+ pays', hero_badge_quality: 'Qualité suisse',
    services_title: 'Nos Services',
    service_express: 'Livraison Express', service_express_desc: 'Livraison le jour même et le lendemain en Suisse et en Europe.',
    service_freight: 'Fret International', service_freight_desc: 'Solutions de fret mondial pour les entreprises de toute taille.',
    service_ecommerce: 'Solutions E-Commerce', service_ecommerce_desc: 'Exécution et gestion des retours pour les détaillants en ligne.',
    service_warehouse: 'Entreposage et Logistique', service_warehouse_desc: 'Installations de stockage avec suivi d\'inventaire en temps réel.',
    stat_countries: 'Pays Desservis', stat_ontime: 'Livraison à Temps', stat_shipments: 'Envois Mensuels', stat_support: 'Support Mondial',
    quote_title: 'Devis Instantané', quote_origin: 'Origine', quote_destination: 'Destination', quote_weight: 'Poids (kg)',
    quote_client_type: 'Type de Client', quote_private: 'Privé', quote_international: 'International',
    quote_calculate: 'Calculer le Devis', quote_result: 'Prix Estimé', quote_delivery: 'Livraison Estimée',
    ship_title: 'Détails de l\'Envoi', ship_subtitle: 'Entrez les informations de votre envoi. Nous supportons toute route mondiale.',
    ship_origin: 'Origine', ship_destination: 'Destination', ship_weight: 'Poids (kg)', ship_package_type: 'Type de Colis',
    ship_description: 'Description (optionnel)', ship_client_type: 'Type de Client', ship_next: 'Suivant', ship_back: 'Retour',
    ship_review_title: 'Vérifiez Votre Envoi', ship_confirm: 'Confirmer et Réserver',
    ship_payment_title: 'Paiement', ship_payment_desc: 'Contactez le support pour finaliser le paiement.',
    ship_contact_support: 'Contacter le Support pour le Paiement',
    ship_success_title: 'Réservation Confirmée!', ship_tracking_number: 'Numéro de Suivi',
    ship_go_track: 'Suivre l\'Envoi', ship_go_dashboard: 'Aller au Tableau de Bord',
    track_title: 'Suivez Votre Envoi', track_subtitle: 'Entrez votre numéro de suivi EAGLE-EXPRESS (EE + 10 chiffres)',
    track_btn: 'Suivre', track_status_picked: 'Récupéré', track_status_transit: 'En Transit',
    track_status_customs: 'Douanes', track_status_delivery: 'En Cours de Livraison', track_status_delivered: 'Livré',
    track_not_found: 'Envoi non trouvé. Vérifiez votre numéro de suivi.',
    track_live_updates: 'Mises à Jour en Direct',
    auth_login_title: 'Bon Retour', auth_signup_title: 'Créer un Compte',
    auth_email: 'E-mail', auth_password: 'Mot de Passe', auth_name: 'Nom Complet',
    auth_company: 'Entreprise (optionnel)', auth_client_type: 'Type de Client',
    auth_login_btn: 'Connexion', auth_signup_btn: 'Inscription',
    auth_no_account: 'Pas encore de compte?', auth_has_account: 'Déjà un compte?',
    auth_welcome: 'Bienvenue chez EAGLE-EXPRESS!',
    auth_welcome_msg: 'Message automatique envoyé à {email} — Votre compte est actif.',
    dash_title: 'Tableau de Bord', dash_bookings: 'Vos Réservations', dash_export: 'Exporter CSV',
    dash_no_bookings: 'Aucune réservation. Expédiez votre premier colis!',
    dash_status: 'Statut', dash_date: 'Date', dash_route: 'Itinéraire',
    about_title: 'À Propos d\'EAGLE-EXPRESS', about_subtitle: 'Fondée en 2024 à Zurich, Suisse',
    about_story: 'Connecter le monde avec une logistique fiable et durable.',
    about_mission: 'Notre Mission', about_testimonials: 'Ce Que Disent Nos Clients', about_certs: 'Certifications',
    contact_title: 'Contactez-Nous', contact_subtitle: 'Notre équipe de support est disponible 24h/24.',
    contact_name: 'Nom', contact_email: 'E-mail', contact_subject: 'Sujet',
    contact_priority: 'Priorité', contact_message: 'Message', contact_send: 'Envoyer',
    contact_success: 'Message envoyé! Nous répondrons sous 24 heures.',
    footer_privacy: 'Politique de Confidentialité', footer_terms: 'Conditions d\'Utilisation', footer_impressum: 'Mentions Légales',
    footer_cookies: 'Politique de Cookies', footer_newsletter: 'Newsletter',
    footer_subscribe: 'S\'abonner', footer_rights: 'Tous droits réservés.',
    cookie_message: 'Nous utilisons des cookies pour améliorer votre expérience. En continuant, vous acceptez notre Politique de Cookies et respectons la DSG suisse / RGPD européen.',
    cookie_accept: 'Tout Accepter', cookie_decline: 'Refuser',
    common_loading: 'Chargement...', common_error: 'Une erreur est survenue', common_save: 'Enregistrer',
    common_cancel: 'Annuler', common_delete: 'Supprimer', common_edit: 'Modifier',
    common_search: 'Rechercher', common_close: 'Fermer',
  },

  de: {
    nav_home: 'Startseite', nav_ship: 'Versenden', nav_track: 'Verfolgen', nav_about: 'Über Uns', nav_contact: 'Kontakt',
    nav_login: 'Anmelden', nav_signup: 'Registrieren', nav_logout: 'Abmelden', nav_dashboard: 'Dashboard',
    hero_title_1: 'Die Welt Verbinden', hero_title_2: 'aus Zürich',
    hero_subtitle: 'Unternehmenslogistik mit Schweizer Präzision. Überall versenden, alles verfolgen, pünktlich liefern.',
    hero_track_placeholder: 'Sendung verfolgen (z.B. EE1234567890)',
    hero_track_btn: 'Verfolgen', hero_badge_tracking: 'Echtzeit-Tracking', hero_badge_countries: '200+ Länder', hero_badge_quality: 'Schweizer Qualität',
    services_title: 'Unsere Dienste',
    service_express: 'Express-Versand', service_express_desc: 'Lieferung am nächsten Tag in der Schweiz und Europa.',
    service_freight: 'Internationale Fracht', service_freight_desc: 'Globale Frachtlösungen für Unternehmen jeder Größe.',
    service_ecommerce: 'E-Commerce-Lösungen', service_ecommerce_desc: 'Fulfillment und Retourenmanagement für Online-Händler.',
    service_warehouse: 'Lagerung und Logistik', service_warehouse_desc: 'Moderne Lagereinrichtungen mit Echtzeit-Bestandsverfolgung.',
    stat_countries: 'Länder Bedient', stat_ontime: 'Pünktliche Lieferung', stat_shipments: 'Monatliche Sendungen', stat_support: 'Globaler Support',
    quote_title: 'Sofort-Angebot', quote_origin: 'Herkunft', quote_destination: 'Ziel', quote_weight: 'Gewicht (kg)',
    quote_client_type: 'Kundentyp', quote_private: 'Privat', quote_international: 'International',
    quote_calculate: 'Angebot Berechnen', quote_result: 'Geschätzter Preis', quote_delivery: 'Geschätzte Lieferung',
    ship_title: 'Sendungsdetails', ship_subtitle: 'Geben Sie Ihre Sendungsinformationen ein. Wir unterstützen jede globale Route.',
    ship_origin: 'Herkunft', ship_destination: 'Ziel', ship_weight: 'Gewicht (kg)', ship_package_type: 'Pakettyp',
    ship_description: 'Beschreibung (optional)', ship_client_type: 'Kundentyp', ship_next: 'Weiter', ship_back: 'Zurück',
    ship_review_title: 'Sendung Überprüfen', ship_confirm: 'Bestätigen und Buchen',
    ship_payment_title: 'Zahlung', ship_payment_desc: 'Kontaktieren Sie den Support zur Zahlungsabwicklung.',
    ship_contact_support: 'Support für Zahlung Kontaktieren',
    ship_success_title: 'Buchung Bestätigt!', ship_tracking_number: 'Sendungsnummer',
    ship_go_track: 'Sendung Verfolgen', ship_go_dashboard: 'Zum Dashboard',
    track_title: 'Sendung Verfolgen', track_subtitle: 'Geben Sie Ihre EAGLE-EXPRESS Sendungsnummer ein (EE + 10 Ziffern)',
    track_btn: 'Verfolgen', track_status_picked: 'Abgeholt', track_status_transit: 'Im Transit',
    track_status_customs: 'Zoll', track_status_delivery: 'In Zustellung', track_status_delivered: 'Zugestellt',
    track_not_found: 'Sendung nicht gefunden. Überprüfen Sie Ihre Sendungsnummer.',
    track_live_updates: 'Live-Updates',
    auth_login_title: 'Willkommen Zurück', auth_signup_title: 'Konto Erstellen',
    auth_email: 'E-Mail', auth_password: 'Passwort', auth_name: 'Vollständiger Name',
    auth_company: 'Unternehmen (optional)', auth_client_type: 'Kundentyp',
    auth_login_btn: 'Anmelden', auth_signup_btn: 'Registrieren',
    auth_no_account: 'Noch kein Konto?', auth_has_account: 'Bereits ein Konto?',
    auth_welcome: 'Willkommen bei EAGLE-EXPRESS!',
    auth_welcome_msg: 'Automatische Nachricht an {email} gesendet — Ihr Konto ist aktiv.',
    dash_title: 'Dashboard', dash_bookings: 'Ihre Buchungen', dash_export: 'CSV Exportieren',
    dash_no_bookings: 'Noch keine Buchungen. Versenden Sie Ihr erstes Paket!',
    dash_status: 'Status', dash_date: 'Datum', dash_route: 'Route',
    about_title: 'Über EAGLE-EXPRESS', about_subtitle: 'Gegründet 2024 in Zürich, Schweiz',
    about_story: 'Die Welt mit zuverlässiger, nachhaltiger Logistik verbinden.',
    about_mission: 'Unsere Mission', about_testimonials: 'Was Unsere Kunden Sagen', about_certs: 'Zertifizierungen',
    contact_title: 'Kontaktieren Sie Uns', contact_subtitle: 'Unser Support-Team ist 24/7 für Sie da.',
    contact_name: 'Name', contact_email: 'E-Mail', contact_subject: 'Betreff',
    contact_priority: 'Priorität', contact_message: 'Nachricht', contact_send: 'Nachricht Senden',
    contact_success: 'Nachricht gesendet! Wir antworten innerhalb von 24 Stunden.',
    footer_privacy: 'Datenschutzrichtlinie', footer_terms: 'Nutzungsbedingungen', footer_impressum: 'Impressum',
    footer_cookies: 'Cookie-Richtlinie', footer_newsletter: 'Newsletter',
    footer_subscribe: 'Abonnieren', footer_rights: 'Alle Rechte vorbehalten.',
    cookie_message: 'Wir verwenden Cookies zur Verbesserung Ihrer Erfahrung. Mit der Nutzung stimmen Sie unserer Cookie-Richtlinie zu und entsprechen dem Schweizer DSG / EU-DSGVO.',
    cookie_accept: 'Alle Akzeptieren', cookie_decline: 'Ablehnen',
    common_loading: 'Laden...', common_error: 'Ein Fehler ist aufgetreten', common_save: 'Speichern',
    common_cancel: 'Abbrechen', common_delete: 'Löschen', common_edit: 'Bearbeiten',
    common_search: 'Suchen', common_close: 'Schließen',
  },

  pt: {
    nav_home: 'Início', nav_ship: 'Enviar', nav_track: 'Rastrear', nav_about: 'Sobre', nav_contact: 'Contato',
    nav_login: 'Entrar', nav_signup: 'Cadastrar', nav_logout: 'Sair', nav_dashboard: 'Painel',
    hero_title_1: 'Conectando o Mundo', hero_title_2: 'de Zurique',
    hero_subtitle: 'Logística empresarial com precisão suíça. Envie para qualquer lugar, rastreie tudo, entregue no prazo.',
    hero_track_placeholder: 'Rastreie sua remessa (ex. EE1234567890)',
    hero_track_btn: 'Rastrear', hero_badge_tracking: 'Rastreamento em tempo real', hero_badge_countries: '200+ países', hero_badge_quality: 'Qualidade suíça',
    services_title: 'Nossos Serviços',
    service_express: 'Envio Expresso', service_express_desc: 'Entrega no dia seguinte na Suíça e Europa.',
    service_freight: 'Frete Internacional', service_freight_desc: 'Soluções de carga global para empresas de qualquer porte.',
    service_ecommerce: 'Soluções E-Commerce', service_ecommerce_desc: 'Fulfillment e gestão de devoluções para varejistas online.',
    service_warehouse: 'Armazenagem e Logística', service_warehouse_desc: 'Instalações de armazenamento com rastreamento de inventário em tempo real.',
    stat_countries: 'Países Atendidos', stat_ontime: 'Entrega no Prazo', stat_shipments: 'Envios Mensais', stat_support: 'Suporte Global',
    quote_title: 'Cotação Instantânea', quote_origin: 'Origem', quote_destination: 'Destino', quote_weight: 'Peso (kg)',
    quote_client_type: 'Tipo de Cliente', quote_private: 'Privado', quote_international: 'Internacional',
    quote_calculate: 'Calcular Cotação', quote_result: 'Preço Estimado', quote_delivery: 'Entrega Estimada',
    ship_title: 'Detalhes da Remessa', ship_subtitle: 'Insira as informações da sua remessa. Suportamos qualquer rota global.',
    ship_origin: 'Origem', ship_destination: 'Destino', ship_weight: 'Peso (kg)', ship_package_type: 'Tipo de Pacote',
    ship_description: 'Descrição (opcional)', ship_client_type: 'Tipo de Cliente', ship_next: 'Próximo', ship_back: 'Voltar',
    ship_review_title: 'Revise sua Remessa', ship_confirm: 'Confirmar e Reservar',
    ship_payment_title: 'Pagamento', ship_payment_desc: 'Contate o suporte para completar o pagamento.',
    ship_contact_support: 'Contatar Suporte para Pagamento',
    ship_success_title: 'Reserva Confirmada!', ship_tracking_number: 'Número de Rastreamento',
    ship_go_track: 'Rastrear Remessa', ship_go_dashboard: 'Ir ao Painel',
    track_title: 'Rastreie sua Remessa', track_subtitle: 'Insira seu número de rastreamento EAGLE-EXPRESS (EE + 10 dígitos)',
    track_btn: 'Rastrear', track_status_picked: 'Coletado', track_status_transit: 'Em Trânsito',
    track_status_customs: 'Alfândega', track_status_delivery: 'Em Entrega', track_status_delivered: 'Entregue',
    track_not_found: 'Remessa não encontrada. Verifique seu número de rastreamento.',
    track_live_updates: 'Atualizações ao Vivo',
    auth_login_title: 'Bem-Vindo de Volta', auth_signup_title: 'Criar Conta',
    auth_email: 'E-mail', auth_password: 'Senha', auth_name: 'Nome Completo',
    auth_company: 'Empresa (opcional)', auth_client_type: 'Tipo de Cliente',
    auth_login_btn: 'Entrar', auth_signup_btn: 'Cadastrar',
    auth_no_account: 'Não tem conta?', auth_has_account: 'Já tem conta?',
    auth_welcome: 'Bem-vindo ao EAGLE-EXPRESS!',
    auth_welcome_msg: 'Mensagem automática enviada para {email} — Sua conta está ativa.',
    dash_title: 'Painel', dash_bookings: 'Suas Reservas', dash_export: 'Exportar CSV',
    dash_no_bookings: 'Nenhuma reserva ainda. Envie seu primeiro pacote!',
    dash_status: 'Status', dash_date: 'Data', dash_route: 'Rota',
    about_title: 'Sobre EAGLE-EXPRESS', about_subtitle: 'Fundada em 2024 em Zurique, Suíça',
    about_story: 'Conectando o mundo com logística confiável e sustentável.',
    about_mission: 'Nossa Missão', about_testimonials: 'O Que Nossos Clientes Dizem', about_certs: 'Certificações',
    contact_title: 'Contate-Nos', contact_subtitle: 'Nossa equipe de suporte está disponível 24/7.',
    contact_name: 'Nome', contact_email: 'E-mail', contact_subject: 'Assunto',
    contact_priority: 'Prioridade', contact_message: 'Mensagem', contact_send: 'Enviar Mensagem',
    contact_success: 'Mensagem enviada! Responderemos em 24 horas.',
    footer_privacy: 'Política de Privacidade', footer_terms: 'Termos de Serviço', footer_impressum: 'Impressum',
    footer_cookies: 'Política de Cookies', footer_newsletter: 'Newsletter',
    footer_subscribe: 'Inscrever-se', footer_rights: 'Todos os direitos reservados.',
    cookie_message: 'Usamos cookies para melhorar sua experiência. Ao continuar, você concorda com nossa Política de Cookies e cumprimos com a DSG suíça / GDPR da UE.',
    cookie_accept: 'Aceitar Tudo', cookie_decline: 'Recusar',
    common_loading: 'Carregando...', common_error: 'Ocorreu um erro', common_save: 'Salvar',
    common_cancel: 'Cancelar', common_delete: 'Excluir', common_edit: 'Editar',
    common_search: 'Pesquisar', common_close: 'Fechar',
  },

  zh: {
    nav_home: '首页', nav_ship: '立即发货', nav_track: '追踪', nav_about: '关于', nav_contact: '联系',
    nav_login: '登录', nav_signup: '注册', nav_logout: '退出', nav_dashboard: '仪表板',
    hero_title_1: '连接世界', hero_title_2: '从苏黎世出发',
    hero_subtitle: '由瑞士精准驱动的企业物流。全球发货、全程追踪、准时送达。',
    hero_track_placeholder: '追踪您的货物（例如 EE1234567890）',
    hero_track_btn: '追踪', hero_badge_tracking: '实时追踪', hero_badge_countries: '200+国家', hero_badge_quality: '瑞士品质',
    services_title: '我们的服务',
    service_express: '快递服务', service_express_desc: '瑞士和欧洲当日及次日送达。',
    service_freight: '国际货运', service_freight_desc: '适合各种规模企业的全球货运解决方案。',
    service_ecommerce: '电商解决方案', service_ecommerce_desc: '为在线零售商提供履约和退货管理。',
    service_warehouse: '仓储物流', service_warehouse_desc: '配备实时库存追踪的先进仓储设施。',
    stat_countries: '服务国家', stat_ontime: '准时交付', stat_shipments: '月度发货量', stat_support: '全球支持',
    quote_title: '即时报价', quote_origin: '出发地', quote_destination: '目的地', quote_weight: '重量（公斤）',
    quote_client_type: '客户类型', quote_private: '个人', quote_international: '企业',
    quote_calculate: '计算报价', quote_result: '预估价格', quote_delivery: '预计送达',
    ship_title: '货物详情', ship_subtitle: '输入您的货物信息。我们支持全球任何路线。',
    ship_origin: '出发地', ship_destination: '目的地', ship_weight: '重量（公斤）', ship_package_type: '包裹类型',
    ship_description: '描述（可选）', ship_client_type: '客户类型', ship_next: '下一步', ship_back: '返回',
    ship_review_title: '审核您的货物', ship_confirm: '确认并预订',
    ship_payment_title: '付款', ship_payment_desc: '联系客服完成付款。',
    ship_contact_support: '联系客服付款',
    ship_success_title: '预订已确认！', ship_tracking_number: '追踪号',
    ship_go_track: '追踪货物', ship_go_dashboard: '前往仪表板',
    track_title: '追踪您的货物', track_subtitle: '输入您的 EAGLE-EXPRESS 追踪号（EE + 10位数字）',
    track_btn: '追踪', track_status_picked: '已取件', track_status_transit: '运输中',
    track_status_customs: '海关', track_status_delivery: '派送中', track_status_delivered: '已送达',
    track_not_found: '未找到货物。请检查您的追踪号。',
    track_live_updates: '实时更新',
    auth_login_title: '欢迎回来', auth_signup_title: '创建账户',
    auth_email: '邮箱', auth_password: '密码', auth_name: '姓名',
    auth_company: '公司（可选）', auth_client_type: '客户类型',
    auth_login_btn: '登录', auth_signup_btn: '注册',
    auth_no_account: '没有账户？', auth_has_account: '已有账户？',
    auth_welcome: '欢迎加入 EAGLE-EXPRESS！',
    auth_welcome_msg: '自动消息已发送至 {email} — 您的账户已激活。',
    dash_title: '仪表板', dash_bookings: '您的预订', dash_export: '导出CSV',
    dash_no_bookings: '暂无预订。发送您的第一个包裹！',
    dash_status: '状态', dash_date: '日期', dash_route: '路线',
    about_title: '关于 EAGLE-EXPRESS', about_subtitle: '2024年创立于瑞士苏黎世',
    about_story: '以可靠、可持续的物流连接世界。',
    about_mission: '我们的使命', about_testimonials: '客户评价', about_certs: '资质认证',
    contact_title: '联系我们', contact_subtitle: '我们的支持团队全天候为您服务。',
    contact_name: '姓名', contact_email: '邮箱', contact_subject: '主题',
    contact_priority: '优先级', contact_message: '消息', contact_send: '发送消息',
    contact_success: '消息已发送！我们将在24小时内回复。',
    footer_privacy: '隐私政策', footer_terms: '服务条款', footer_impressum: '法律声明',
    footer_cookies: 'Cookie政策', footer_newsletter: '新闻通讯',
    footer_subscribe: '订阅', footer_rights: '版权所有。',
    cookie_message: '我们使用Cookie来改善您的体验。继续使用即表示您同意我们的Cookie政策，并遵守瑞士DSG/欧盟GDPR规定。',
    cookie_accept: '全部接受', cookie_decline: '拒绝',
    common_loading: '加载中...', common_error: '发生错误', common_save: '保存',
    common_cancel: '取消', common_delete: '删除', common_edit: '编辑',
    common_search: '搜索', common_close: '关闭',
  },

  ar: {
    nav_home: 'الرئيسية', nav_ship: 'شحن الآن', nav_track: 'تتبع', nav_about: 'عن الشركة', nav_contact: 'اتصل بنا',
    nav_login: 'تسجيل الدخول', nav_signup: 'إنشاء حساب', nav_logout: 'تسجيل الخروج', nav_dashboard: 'لوحة التحكم',
    hero_title_1: 'ربط العالم', hero_title_2: 'من زيورخ',
    hero_subtitle: 'خدمات لوجستية مؤسسية مدعومة بالدقة السويسرية. اشحن لأي مكان، تتبع كل شيء، سلّم في الوقت المحدد.',
    hero_track_placeholder: 'تتبع شحنتك (مثال: EE1234567890)',
    hero_track_btn: 'تتبع', hero_badge_tracking: 'تتبع فوري', hero_badge_countries: '200+ دولة', hero_badge_quality: 'جودة سويسرية',
    services_title: 'خدماتنا',
    service_express: 'الشحن السريع', service_express_desc: 'توصيل في اليوم التالي عبر سويسرا وأوروبا.',
    service_freight: 'الشحن الدولي', service_freight_desc: 'حلول شحن عالمية للشركات بجميع الأحجام.',
    service_ecommerce: 'حلول التجارة الإلكترونية', service_ecommerce_desc: 'إدارة الطلبات والمرتجعات لتجار التجزئة عبر الإنترنت.',
    service_warehouse: 'التخزين والخدمات اللوجستية', service_warehouse_desc: 'مرافق تخزين حديثة مع تتبع المخزون في الوقت الفعلي.',
    stat_countries: 'دول مخدومة', stat_ontime: 'توصيل في الوقت', stat_shipments: 'شحنات شهرية', stat_support: 'دعم عالمي',
    quote_title: 'احصل على عرض سعر فوري', quote_origin: 'المنشأ', quote_destination: 'الوجهة', quote_weight: 'الوزن (كجم)',
    quote_client_type: 'نوع العميل', quote_private: 'خاص', quote_international: 'دولي',
    quote_calculate: 'احسب العرض', quote_result: 'السعر المقدر', quote_delivery: 'التسليم المقدر',
    ship_title: 'تفاصيل الشحنة', ship_subtitle: 'أدخل معلومات شحنتك. ندعم أي مسار عالمي.',
    ship_origin: 'المنشأ', ship_destination: 'الوجهة', ship_weight: 'الوزن (كجم)', ship_package_type: 'نوع الطرد',
    ship_description: 'الوصف (اختياري)', ship_client_type: 'نوع العميل', ship_next: 'التالي', ship_back: 'رجوع',
    ship_review_title: 'مراجعة شحنتك', ship_confirm: 'تأكيد وحجز',
    ship_payment_title: 'الدفع', ship_payment_desc: 'تواصل مع الدعم لإتمام الدفع.',
    ship_contact_support: 'تواصل مع الدعم للدفع',
    ship_success_title: 'تم تأكيد الحجز!', ship_tracking_number: 'رقم التتبع',
    ship_go_track: 'تتبع الشحنة', ship_go_dashboard: 'إلى لوحة التحكم',
    track_title: 'تتبع شحنتك', track_subtitle: 'أدخل رقم تتبع EAGLE-EXPRESS الخاص بك (EE + 10 أرقام)',
    track_btn: 'تتبع', track_status_picked: 'تم الاستلام', track_status_transit: 'في الطريق',
    track_status_customs: 'الجمارك', track_status_delivery: 'قيد التوصيل', track_status_delivered: 'تم التسليم',
    track_not_found: 'لم يتم العثور على الشحنة. يرجى التحقق من رقم التتبع.',
    track_live_updates: 'تحديثات مباشرة',
    auth_login_title: 'مرحباً بعودتك', auth_signup_title: 'إنشاء حساب',
    auth_email: 'البريد الإلكتروني', auth_password: 'كلمة المرور', auth_name: 'الاسم الكامل',
    auth_company: 'الشركة (اختياري)', auth_client_type: 'نوع العميل',
    auth_login_btn: 'تسجيل الدخول', auth_signup_btn: 'إنشاء حساب',
    auth_no_account: 'ليس لديك حساب؟', auth_has_account: 'لديك حساب بالفعل؟',
    auth_welcome: 'مرحباً بك في EAGLE-EXPRESS!',
    auth_welcome_msg: 'تم إرسال رسالة تلقائية إلى {email} — حسابك نشط.',
    dash_title: 'لوحة التحكم', dash_bookings: 'حجوزاتك', dash_export: 'تصدير CSV',
    dash_no_bookings: 'لا حجوزات بعد. أرسل أول طرد لك!',
    dash_status: 'الحالة', dash_date: 'التاريخ', dash_route: 'المسار',
    about_title: 'عن EAGLE-EXPRESS', about_subtitle: 'تأسست عام 2024 في زيورخ، سويسرا',
    about_story: 'ربط العالم بخدمات لوجستية موثوقة ومستدامة.',
    about_mission: 'مهمتنا', about_testimonials: 'ماذا يقول عملاؤنا', about_certs: 'الشهادات',
    contact_title: 'اتصل بنا', contact_subtitle: 'فريق الدعم متاح على مدار الساعة.',
    contact_name: 'الاسم', contact_email: 'البريد الإلكتروني', contact_subject: 'الموضوع',
    contact_priority: 'الأولوية', contact_message: 'الرسالة', contact_send: 'إرسال',
    contact_success: 'تم إرسال الرسالة! سنرد خلال 24 ساعة.',
    footer_privacy: 'سياسة الخصوصية', footer_terms: 'شروط الخدمة', footer_impressum: 'البيانات القانونية',
    footer_cookies: 'سياسة الكوكيز', footer_newsletter: 'النشرة الإخبارية',
    footer_subscribe: 'اشترك', footer_rights: 'جميع الحقوق محفوظة.',
    cookie_message: 'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بالاستمرار، فإنك توافق على سياسة الكوكيز وتتوافق مع DSG السويسرية / GDPR الأوروبي.',
    cookie_accept: 'قبول الكل', cookie_decline: 'رفض',
    common_loading: 'جارٍ التحميل...', common_error: 'حدث خطأ', common_save: 'حفظ',
    common_cancel: 'إلغاء', common_delete: 'حذف', common_edit: 'تعديل',
    common_search: 'بحث', common_close: 'إغلاق',
  },

  ja: {
    nav_home: 'ホーム', nav_ship: '発送', nav_track: '追跡', nav_about: '会社概要', nav_contact: 'お問い合わせ',
    nav_login: 'ログイン', nav_signup: '新規登録', nav_logout: 'ログアウト', nav_dashboard: 'ダッシュボード',
    hero_title_1: '世界をつなぐ', hero_title_2: 'チューリッヒから',
    hero_subtitle: 'スイスの精密さが支える企業物流。どこへでも発送、すべてを追跡、時間通りにお届け。',
    hero_track_placeholder: '貨物を追跡（例：EE1234567890）',
    hero_track_btn: '追跡', hero_badge_tracking: 'リアルタイム追跡', hero_badge_countries: '200+カ国', hero_badge_quality: 'スイス品質',
    services_title: 'サービス',
    service_express: 'エクスプレス配送', service_express_desc: 'スイスとヨーロッパでの翌日・即日配達。',
    service_freight: '国際貨物', service_freight_desc: 'あらゆる規模の企業向けグローバル貨物ソリューション。',
    service_ecommerce: 'Eコマースソリューション', service_ecommerce_desc: 'オンライン小売業者向けのフルフィルメントと返品管理。',
    service_warehouse: '倉庫・物流', service_warehouse_desc: 'リアルタイム在庫追跡を備えた最先端の保管施設。',
    stat_countries: '対応国数', stat_ontime: '定時配達率', stat_shipments: '月間出荷数', stat_support: '24時間サポート',
    quote_title: '即時見積もり', quote_origin: '出発地', quote_destination: '目的地', quote_weight: '重量（kg）',
    quote_client_type: '顧客タイプ', quote_private: '個人', quote_international: '法人',
    quote_calculate: '見積もり計算', quote_result: '予想価格', quote_delivery: '予想配達日',
    ship_title: '出荷詳細', ship_subtitle: '出荷情報を入力してください。あらゆるグローバルルートに対応。',
    ship_origin: '出発地', ship_destination: '目的地', ship_weight: '重量（kg）', ship_package_type: '荷物タイプ',
    ship_description: '説明（任意）', ship_client_type: '顧客タイプ', ship_next: '次へ', ship_back: '戻る',
    ship_review_title: '出荷内容の確認', ship_confirm: '確認して予約',
    ship_payment_title: 'お支払い', ship_payment_desc: 'お支払いについてはサポートにお問い合わせください。',
    ship_contact_support: '支払いサポートに連絡',
    ship_success_title: '予約完了！', ship_tracking_number: '追跡番号',
    ship_go_track: '貨物を追跡', ship_go_dashboard: 'ダッシュボードへ',
    track_title: '貨物を追跡', track_subtitle: 'EAGLE-EXPRESS追跡番号を入力（EE + 10桁）',
    track_btn: '追跡', track_status_picked: '集荷済み', track_status_transit: '輸送中',
    track_status_customs: '通関中', track_status_delivery: '配達中', track_status_delivered: '配達完了',
    track_not_found: '貨物が見つかりません。追跡番号をご確認ください。',
    track_live_updates: 'ライブ更新',
    auth_login_title: 'おかえりなさい', auth_signup_title: 'アカウント作成',
    auth_email: 'メール', auth_password: 'パスワード', auth_name: '氏名',
    auth_company: '会社名（任意）', auth_client_type: '顧客タイプ',
    auth_login_btn: 'ログイン', auth_signup_btn: '登録',
    auth_no_account: 'アカウントをお持ちでない方', auth_has_account: 'アカウントをお持ちの方',
    auth_welcome: 'EAGLE-EXPRESSへようこそ！',
    auth_welcome_msg: '{email}に自動メッセージを送信しました — アカウントが有効になりました。',
    dash_title: 'ダッシュボード', dash_bookings: 'ご予約', dash_export: 'CSVエクスポート',
    dash_no_bookings: 'まだ予約がありません。最初の荷物を送りましょう！',
    dash_status: 'ステータス', dash_date: '日付', dash_route: 'ルート',
    about_title: 'EAGLE-EXPRESSについて', about_subtitle: '2024年 スイス・チューリッヒ設立',
    about_story: '信頼性の高い持続可能な物流で世界をつなぐ。',
    about_mission: '私たちの使命', about_testimonials: 'お客様の声', about_certs: '認証',
    contact_title: 'お問い合わせ', contact_subtitle: 'サポートチームが24時間対応いたします。',
    contact_name: 'お名前', contact_email: 'メール', contact_subject: '件名',
    contact_priority: '優先度', contact_message: 'メッセージ', contact_send: '送信',
    contact_success: 'メッセージを送信しました！24時間以内にご返答いたします。',
    footer_privacy: 'プライバシーポリシー', footer_terms: '利用規約', footer_impressum: '法的情報',
    footer_cookies: 'Cookieポリシー', footer_newsletter: 'ニュースレター',
    footer_subscribe: '購読', footer_rights: '全著作権所有。',
    cookie_message: 'Cookieを使用して体験を向上させています。続行すると、Cookieポリシーに同意し、スイスDSG/EU GDPRに準拠します。',
    cookie_accept: 'すべて受け入れ', cookie_decline: '拒否',
    common_loading: '読み込み中...', common_error: 'エラーが発生しました', common_save: '保存',
    common_cancel: 'キャンセル', common_delete: '削除', common_edit: '編集',
    common_search: '検索', common_close: '閉じる',
  },

  ko: {
    nav_home: '홈', nav_ship: '배송', nav_track: '추적', nav_about: '소개', nav_contact: '문의',
    nav_login: '로그인', nav_signup: '회원가입', nav_logout: '로그아웃', nav_dashboard: '대시보드',
    hero_title_1: '세계를 연결하다', hero_title_2: '취리히에서',
    hero_subtitle: '스위스 정밀함으로 구동되는 기업 물류. 어디든 배송, 모든 것을 추적, 정시 배달.',
    hero_track_placeholder: '화물 추적 (예: EE1234567890)',
    hero_track_btn: '추적', hero_badge_tracking: '실시간 추적', hero_badge_countries: '200+개국', hero_badge_quality: '스위스 품질',
    services_title: '서비스',
    service_express: '특급 배송', service_express_desc: '스위스와 유럽 전역 익일 및 당일 배송.',
    service_freight: '국제 화물', service_freight_desc: '모든 규모의 기업을 위한 글로벌 화물 솔루션.',
    service_ecommerce: '이커머스 솔루션', service_ecommerce_desc: '온라인 소매업체를 위한 풀필먼트 및 반품 관리.',
    service_warehouse: '창고 및 물류', service_warehouse_desc: '실시간 재고 추적이 가능한 최첨단 보관 시설.',
    stat_countries: '서비스 국가', stat_ontime: '정시 배달', stat_shipments: '월간 배송', stat_support: '글로벌 지원',
    quote_title: '즉시 견적', quote_origin: '출발지', quote_destination: '목적지', quote_weight: '무게 (kg)',
    quote_client_type: '고객 유형', quote_private: '개인', quote_international: '기업',
    quote_calculate: '견적 계산', quote_result: '예상 가격', quote_delivery: '예상 배송일',
    ship_title: '배송 상세', ship_subtitle: '배송 정보를 입력하세요. 모든 글로벌 경로를 지원합니다.',
    ship_origin: '출발지', ship_destination: '목적지', ship_weight: '무게 (kg)', ship_package_type: '패키지 유형',
    ship_description: '설명 (선택)', ship_client_type: '고객 유형', ship_next: '다음', ship_back: '이전',
    ship_review_title: '배송 확인', ship_confirm: '확인 및 예약',
    ship_payment_title: '결제', ship_payment_desc: '결제를 완료하려면 지원팀에 문의하세요.',
    ship_contact_support: '결제 지원 문의',
    ship_success_title: '예약 완료!', ship_tracking_number: '추적 번호',
    ship_go_track: '화물 추적', ship_go_dashboard: '대시보드로',
    track_title: '화물 추적', track_subtitle: 'EAGLE-EXPRESS 추적 번호를 입력하세요 (EE + 10자리)',
    track_btn: '추적', track_status_picked: '수거 완료', track_status_transit: '운송 중',
    track_status_customs: '세관', track_status_delivery: '배달 중', track_status_delivered: '배달 완료',
    track_not_found: '화물을 찾을 수 없습니다. 추적 번호를 확인해 주세요.',
    track_live_updates: '실시간 업데이트',
    auth_login_title: '다시 오신 것을 환영합니다', auth_signup_title: '계정 만들기',
    auth_email: '이메일', auth_password: '비밀번호', auth_name: '이름',
    auth_company: '회사 (선택)', auth_client_type: '고객 유형',
    auth_login_btn: '로그인', auth_signup_btn: '회원가입',
    auth_no_account: '계정이 없으신가요?', auth_has_account: '이미 계정이 있으신가요?',
    auth_welcome: 'EAGLE-EXPRESS에 오신 것을 환영합니다!',
    auth_welcome_msg: '{email}로 자동 메시지가 전송되었습니다 — 계정이 활성화되었습니다.',
    dash_title: '대시보드', dash_bookings: '예약 내역', dash_export: 'CSV 내보내기',
    dash_no_bookings: '아직 예약이 없습니다. 첫 패키지를 보내세요!',
    dash_status: '상태', dash_date: '날짜', dash_route: '경로',
    about_title: 'EAGLE-EXPRESS 소개', about_subtitle: '2024년 스위스 취리히 설립',
    about_story: '신뢰할 수 있고 지속 가능한 물류로 세계를 연결합니다.',
    about_mission: '우리의 사명', about_testimonials: '고객 후기', about_certs: '인증',
    contact_title: '문의하기', contact_subtitle: '지원팀이 24시간 대기하고 있습니다.',
    contact_name: '이름', contact_email: '이메일', contact_subject: '제목',
    contact_priority: '우선순위', contact_message: '메시지', contact_send: '보내기',
    contact_success: '메시지가 전송되었습니다! 24시간 이내에 답변드리겠습니다.',
    footer_privacy: '개인정보 보호정책', footer_terms: '이용약관', footer_impressum: '법적 고지',
    footer_cookies: '쿠키 정책', footer_newsletter: '뉴스레터',
    footer_subscribe: '구독', footer_rights: '모든 권리 보유.',
    cookie_message: '쿠키를 사용하여 경험을 개선합니다. 계속하시면 쿠키 정책에 동의하며 스위스 DSG / EU GDPR을 준수합니다.',
    cookie_accept: '모두 수락', cookie_decline: '거부',
    common_loading: '로딩 중...', common_error: '오류가 발생했습니다', common_save: '저장',
    common_cancel: '취소', common_delete: '삭제', common_edit: '편집',
    common_search: '검색', common_close: '닫기',
  },

  it: {
    nav_home: 'Home', nav_ship: 'Spedisci', nav_track: 'Traccia', nav_about: 'Chi Siamo', nav_contact: 'Contatti',
    nav_login: 'Accedi', nav_signup: 'Registrati', nav_logout: 'Esci', nav_dashboard: 'Dashboard',
    hero_title_1: 'Connettere il Mondo', hero_title_2: 'da Zurigo',
    hero_subtitle: 'Logistica aziendale alimentata dalla precisione svizzera. Spedisci ovunque, traccia tutto, consegna in tempo.',
    hero_track_placeholder: 'Traccia la tua spedizione (es. EE1234567890)',
    hero_track_btn: 'Traccia', hero_badge_tracking: 'Tracciamento in tempo reale', hero_badge_countries: '200+ paesi', hero_badge_quality: 'Qualità svizzera',
    services_title: 'I Nostri Servizi',
    service_express: 'Spedizione Express', service_express_desc: 'Consegna il giorno successivo in Svizzera e in Europa.',
    service_freight: 'Trasporto Internazionale', service_freight_desc: 'Soluzioni di trasporto globali per aziende di qualsiasi dimensione.',
    service_ecommerce: 'Soluzioni E-Commerce', service_ecommerce_desc: 'Fulfillment e gestione resi per rivenditori online.',
    service_warehouse: 'Magazzino e Logistica', service_warehouse_desc: 'Strutture di stoccaggio con tracciamento inventario in tempo reale.',
    stat_countries: 'Paesi Serviti', stat_ontime: 'Consegna Puntuale', stat_shipments: 'Spedizioni Mensili', stat_support: 'Supporto Globale',
    quote_title: 'Preventivo Istantaneo', quote_origin: 'Origine', quote_destination: 'Destinazione', quote_weight: 'Peso (kg)',
    quote_client_type: 'Tipo Cliente', quote_private: 'Privato', quote_international: 'Internazionale',
    quote_calculate: 'Calcola Preventivo', quote_result: 'Prezzo Stimato', quote_delivery: 'Consegna Stimata',
    ship_title: 'Dettagli Spedizione', ship_subtitle: 'Inserisci le informazioni della spedizione. Supportiamo qualsiasi rotta globale.',
    ship_origin: 'Origine', ship_destination: 'Destinazione', ship_weight: 'Peso (kg)', ship_package_type: 'Tipo Pacco',
    ship_description: 'Descrizione (opzionale)', ship_client_type: 'Tipo Cliente', ship_next: 'Avanti', ship_back: 'Indietro',
    ship_review_title: 'Verifica la Spedizione', ship_confirm: 'Conferma e Prenota',
    ship_payment_title: 'Pagamento', ship_payment_desc: 'Contatta il supporto per completare il pagamento.',
    ship_contact_support: 'Contatta Supporto per Pagamento',
    ship_success_title: 'Prenotazione Confermata!', ship_tracking_number: 'Numero di Tracciamento',
    ship_go_track: 'Traccia Spedizione', ship_go_dashboard: 'Vai al Dashboard',
    track_title: 'Traccia la Tua Spedizione', track_subtitle: 'Inserisci il tuo numero di tracciamento EAGLE-EXPRESS (EE + 10 cifre)',
    track_btn: 'Traccia', track_status_picked: 'Ritirato', track_status_transit: 'In Transito',
    track_status_customs: 'Dogana', track_status_delivery: 'In Consegna', track_status_delivered: 'Consegnato',
    track_not_found: 'Spedizione non trovata. Verifica il numero di tracciamento.',
    track_live_updates: 'Aggiornamenti in Diretta',
    auth_login_title: 'Bentornato', auth_signup_title: 'Crea Account',
    auth_email: 'Email', auth_password: 'Password', auth_name: 'Nome Completo',
    auth_company: 'Azienda (opzionale)', auth_client_type: 'Tipo Cliente',
    auth_login_btn: 'Accedi', auth_signup_btn: 'Registrati',
    auth_no_account: 'Non hai un account?', auth_has_account: 'Hai già un account?',
    auth_welcome: 'Benvenuto in EAGLE-EXPRESS!',
    auth_welcome_msg: 'Messaggio automatico inviato a {email} — Il tuo account è attivo.',
    dash_title: 'Dashboard', dash_bookings: 'Le Tue Prenotazioni', dash_export: 'Esporta CSV',
    dash_no_bookings: 'Nessuna prenotazione. Spedisci il tuo primo pacco!',
    dash_status: 'Stato', dash_date: 'Data', dash_route: 'Percorso',
    about_title: 'Chi è EAGLE-EXPRESS', about_subtitle: 'Fondata nel 2024 a Zurigo, Svizzera',
    about_story: 'Connettere il mondo con una logistica affidabile e sostenibile.',
    about_mission: 'La Nostra Missione', about_testimonials: 'Cosa Dicono i Nostri Clienti', about_certs: 'Certificazioni',
    contact_title: 'Contattaci', contact_subtitle: 'Il nostro team di supporto è disponibile 24/7.',
    contact_name: 'Nome', contact_email: 'Email', contact_subject: 'Oggetto',
    contact_priority: 'Priorità', contact_message: 'Messaggio', contact_send: 'Invia Messaggio',
    contact_success: 'Messaggio inviato! Risponderemo entro 24 ore.',
    footer_privacy: 'Informativa sulla Privacy', footer_terms: 'Termini di Servizio', footer_impressum: 'Impressum',
    footer_cookies: 'Politica Cookie', footer_newsletter: 'Newsletter',
    footer_subscribe: 'Iscriviti', footer_rights: 'Tutti i diritti riservati.',
    cookie_message: 'Utilizziamo i cookie per migliorare la tua esperienza. Continuando, accetti la nostra Politica Cookie e rispettiamo il DSG svizzero / GDPR europeo.',
    cookie_accept: 'Accetta Tutto', cookie_decline: 'Rifiuta',
    common_loading: 'Caricamento...', common_error: 'Si è verificato un errore', common_save: 'Salva',
    common_cancel: 'Annulla', common_delete: 'Elimina', common_edit: 'Modifica',
    common_search: 'Cerca', common_close: 'Chiudi',
  },

  nl: {
    nav_home: 'Home', nav_ship: 'Verzenden', nav_track: 'Volgen', nav_about: 'Over Ons', nav_contact: 'Contact',
    nav_login: 'Inloggen', nav_signup: 'Registreren', nav_logout: 'Uitloggen', nav_dashboard: 'Dashboard',
    hero_title_1: 'De Wereld Verbinden', hero_title_2: 'vanuit Zürich',
    hero_subtitle: 'Bedrijfslogistiek aangedreven door Zwitserse precisie. Verzend overal, volg alles, lever op tijd.',
    hero_track_placeholder: 'Volg uw zending (bijv. EE1234567890)',
    hero_track_btn: 'Volgen', hero_badge_tracking: 'Realtime tracking', hero_badge_countries: '200+ landen', hero_badge_quality: 'Zwitserse kwaliteit',
    services_title: 'Onze Diensten',
    service_express: 'Express Verzending', service_express_desc: 'Levering de volgende dag in Zwitserland en Europa.',
    service_freight: 'Internationaal Vrachtvervoer', service_freight_desc: 'Wereldwijde vrachtoplossingen voor bedrijven van elke omvang.',
    service_ecommerce: 'E-Commerce Oplossingen', service_ecommerce_desc: 'Fulfillment en retourenmanagement voor online retailers.',
    service_warehouse: 'Opslag en Logistiek', service_warehouse_desc: 'Moderne opslagfaciliteiten met realtime voorraadbeheer.',
    stat_countries: 'Landen Bediend', stat_ontime: 'Op Tijd Levering', stat_shipments: 'Maandelijkse Zendingen', stat_support: 'Wereldwijde Ondersteuning',
    quote_title: 'Direct Offerte', quote_origin: 'Herkomst', quote_destination: 'Bestemming', quote_weight: 'Gewicht (kg)',
    quote_client_type: 'Klanttype', quote_private: 'Particulier', quote_international: 'Internationaal',
    quote_calculate: 'Offerte Berekenen', quote_result: 'Geschatte Prijs', quote_delivery: 'Geschatte Levering',
    ship_title: 'Zendingsdetails', ship_subtitle: 'Voer uw zendingsinformatie in. Wij ondersteunen elke wereldwijde route.',
    ship_origin: 'Herkomst', ship_destination: 'Bestemming', ship_weight: 'Gewicht (kg)', ship_package_type: 'Pakkettype',
    ship_description: 'Beschrijving (optioneel)', ship_client_type: 'Klanttype', ship_next: 'Volgende', ship_back: 'Terug',
    ship_review_title: 'Controleer Uw Zending', ship_confirm: 'Bevestigen en Boeken',
    ship_payment_title: 'Betaling', ship_payment_desc: 'Neem contact op met support om de betaling te voltooien.',
    ship_contact_support: 'Contact Support voor Betaling',
    ship_success_title: 'Boeking Bevestigd!', ship_tracking_number: 'Volgnummer',
    ship_go_track: 'Zending Volgen', ship_go_dashboard: 'Naar Dashboard',
    track_title: 'Volg Uw Zending', track_subtitle: 'Voer uw EAGLE-EXPRESS volgnummer in (EE + 10 cijfers)',
    track_btn: 'Volgen', track_status_picked: 'Opgehaald', track_status_transit: 'Onderweg',
    track_status_customs: 'Douane', track_status_delivery: 'In Bezorging', track_status_delivered: 'Bezorgd',
    track_not_found: 'Zending niet gevonden. Controleer uw volgnummer.',
    track_live_updates: 'Live Updates',
    auth_login_title: 'Welkom Terug', auth_signup_title: 'Account Aanmaken',
    auth_email: 'E-mail', auth_password: 'Wachtwoord', auth_name: 'Volledige Naam',
    auth_company: 'Bedrijf (optioneel)', auth_client_type: 'Klanttype',
    auth_login_btn: 'Inloggen', auth_signup_btn: 'Registreren',
    auth_no_account: 'Nog geen account?', auth_has_account: 'Heeft u al een account?',
    auth_welcome: 'Welkom bij EAGLE-EXPRESS!',
    auth_welcome_msg: 'Automatisch bericht verzonden naar {email} — Uw account is actief.',
    dash_title: 'Dashboard', dash_bookings: 'Uw Boekingen', dash_export: 'CSV Exporteren',
    dash_no_bookings: 'Nog geen boekingen. Verzend uw eerste pakket!',
    dash_status: 'Status', dash_date: 'Datum', dash_route: 'Route',
    about_title: 'Over EAGLE-EXPRESS', about_subtitle: 'Opgericht in 2024 in Zürich, Zwitserland',
    about_story: 'De wereld verbinden met betrouwbare, duurzame logistiek.',
    about_mission: 'Onze Missie', about_testimonials: 'Wat Onze Klanten Zeggen', about_certs: 'Certificeringen',
    contact_title: 'Neem Contact Op', contact_subtitle: 'Ons supportteam is 24/7 beschikbaar.',
    contact_name: 'Naam', contact_email: 'E-mail', contact_subject: 'Onderwerp',
    contact_priority: 'Prioriteit', contact_message: 'Bericht', contact_send: 'Bericht Verzenden',
    contact_success: 'Bericht verzonden! We reageren binnen 24 uur.',
    footer_privacy: 'Privacybeleid', footer_terms: 'Servicevoorwaarden', footer_impressum: 'Impressum',
    footer_cookies: 'Cookiebeleid', footer_newsletter: 'Nieuwsbrief',
    footer_subscribe: 'Abonneren', footer_rights: 'Alle rechten voorbehouden.',
    cookie_message: 'Wij gebruiken cookies om uw ervaring te verbeteren. Door verder te gaan stemt u in met ons Cookiebeleid en voldoen we aan Zwitserse DSG / EU AVG.',
    cookie_accept: 'Alles Accepteren', cookie_decline: 'Weigeren',
    common_loading: 'Laden...', common_error: 'Er is een fout opgetreden', common_save: 'Opslaan',
    common_cancel: 'Annuleren', common_delete: 'Verwijderen', common_edit: 'Bewerken',
    common_search: 'Zoeken', common_close: 'Sluiten',
  },

  tr: {
    nav_home: 'Ana Sayfa', nav_ship: 'Gönder', nav_track: 'Takip Et', nav_about: 'Hakkımızda', nav_contact: 'İletişim',
    nav_login: 'Giriş Yap', nav_signup: 'Kayıt Ol', nav_logout: 'Çıkış', nav_dashboard: 'Panel',
    hero_title_1: 'Dünyayı Birleştirmek', hero_title_2: "Zürih'ten",
    hero_subtitle: 'İsviçre hassasiyetiyle kurumsal lojistik. Her yere gönderin, her şeyi takip edin, zamanında teslim edin.',
    hero_track_placeholder: 'Gönderinizi takip edin (ör. EE1234567890)',
    hero_track_btn: 'Takip Et', hero_badge_tracking: 'Gerçek zamanlı takip', hero_badge_countries: '200+ ülke', hero_badge_quality: 'İsviçre kalitesi',
    services_title: 'Hizmetlerimiz',
    service_express: 'Ekspres Kargo', service_express_desc: 'İsviçre ve Avrupa genelinde ertesi gün teslimat.',
    service_freight: 'Uluslararası Yük', service_freight_desc: 'Her ölçekteki işletme için küresel kargo çözümleri.',
    service_ecommerce: 'E-Ticaret Çözümleri', service_ecommerce_desc: 'Online perakendeciler için sipariş karşılama ve iade yönetimi.',
    service_warehouse: 'Depolama ve Lojistik', service_warehouse_desc: 'Gerçek zamanlı envanter takibi ile modern depolama tesisleri.',
    stat_countries: 'Hizmet Verilen Ülke', stat_ontime: 'Zamanında Teslimat', stat_shipments: 'Aylık Gönderi', stat_support: 'Küresel Destek',
    quote_title: 'Anında Fiyat Teklifi', quote_origin: 'Çıkış', quote_destination: 'Varış', quote_weight: 'Ağırlık (kg)',
    quote_client_type: 'Müşteri Tipi', quote_private: 'Bireysel', quote_international: 'Kurumsal',
    quote_calculate: 'Fiyat Hesapla', quote_result: 'Tahmini Fiyat', quote_delivery: 'Tahmini Teslimat',
    ship_title: 'Gönderi Detayları', ship_subtitle: 'Gönderi bilgilerinizi girin. Her küresel rotayı destekliyoruz.',
    ship_origin: 'Çıkış', ship_destination: 'Varış', ship_weight: 'Ağırlık (kg)', ship_package_type: 'Paket Tipi',
    ship_description: 'Açıklama (isteğe bağlı)', ship_client_type: 'Müşteri Tipi', ship_next: 'İleri', ship_back: 'Geri',
    ship_review_title: 'Gönderiyi İnceleyin', ship_confirm: 'Onayla ve Rezerve Et',
    ship_payment_title: 'Ödeme', ship_payment_desc: 'Ödemeyi tamamlamak için destek ile iletişime geçin.',
    ship_contact_support: 'Ödeme İçin Destek',
    ship_success_title: 'Rezervasyon Onaylandı!', ship_tracking_number: 'Takip Numarası',
    ship_go_track: 'Gönderiyi Takip Et', ship_go_dashboard: 'Panele Git',
    track_title: 'Gönderinizi Takip Edin', track_subtitle: 'EAGLE-EXPRESS takip numaranızı girin (EE + 10 rakam)',
    track_btn: 'Takip Et', track_status_picked: 'Teslim Alındı', track_status_transit: 'Yolda',
    track_status_customs: 'Gümrük', track_status_delivery: 'Dağıtımda', track_status_delivered: 'Teslim Edildi',
    track_not_found: 'Gönderi bulunamadı. Takip numaranızı kontrol edin.',
    track_live_updates: 'Canlı Güncellemeler',
    auth_login_title: 'Tekrar Hoş Geldiniz', auth_signup_title: 'Hesap Oluştur',
    auth_email: 'E-posta', auth_password: 'Şifre', auth_name: 'Ad Soyad',
    auth_company: 'Şirket (isteğe bağlı)', auth_client_type: 'Müşteri Tipi',
    auth_login_btn: 'Giriş Yap', auth_signup_btn: 'Kayıt Ol',
    auth_no_account: 'Hesabınız yok mu?', auth_has_account: 'Zaten hesabınız var mı?',
    auth_welcome: "EAGLE-EXPRESS'e Hoş Geldiniz!",
    auth_welcome_msg: '{email} adresine otomatik mesaj gönderildi — Hesabınız aktif.',
    dash_title: 'Panel', dash_bookings: 'Rezervasyonlarınız', dash_export: 'CSV İndir',
    dash_no_bookings: 'Henüz rezervasyon yok. İlk paketinizi gönderin!',
    dash_status: 'Durum', dash_date: 'Tarih', dash_route: 'Rota',
    about_title: 'EAGLE-EXPRESS Hakkında', about_subtitle: '2024 yılında Zürih, İsviçre\'de kuruldu',
    about_story: 'Güvenilir, sürdürülebilir lojistik ile dünyayı birleştirmek.',
    about_mission: 'Misyonumuz', about_testimonials: 'Müşterilerimiz Ne Diyor', about_certs: 'Sertifikalar',
    contact_title: 'Bize Ulaşın', contact_subtitle: 'Destek ekibimiz 7/24 hizmetinizde.',
    contact_name: 'Ad', contact_email: 'E-posta', contact_subject: 'Konu',
    contact_priority: 'Öncelik', contact_message: 'Mesaj', contact_send: 'Mesaj Gönder',
    contact_success: 'Mesaj gönderildi! 24 saat içinde yanıt vereceğiz.',
    footer_privacy: 'Gizlilik Politikası', footer_terms: 'Hizmet Şartları', footer_impressum: 'Yasal Bilgi',
    footer_cookies: 'Çerez Politikası', footer_newsletter: 'Bülten',
    footer_subscribe: 'Abone Ol', footer_rights: 'Tüm hakları saklıdır.',
    cookie_message: 'Deneyiminizi geliştirmek için çerezler kullanıyoruz. Devam ederek Çerez Politikamızı kabul etmiş olursunuz ve İsviçre DSG / AB GDPR\'ye uygun hareket ederiz.',
    cookie_accept: 'Tümünü Kabul Et', cookie_decline: 'Reddet',
    common_loading: 'Yükleniyor...', common_error: 'Bir hata oluştu', common_save: 'Kaydet',
    common_cancel: 'İptal', common_delete: 'Sil', common_edit: 'Düzenle',
    common_search: 'Ara', common_close: 'Kapat',
  },
};
