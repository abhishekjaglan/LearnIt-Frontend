export const WELEARN_CONFIG = {
  APP_NAME: 'WeLearn',
  VERSION: '1.0.0',
  API_BASE_URL: 'http://localhost:3000/api',
  
  // Layout constants
  SIDEBAR_WIDTH: {
    EXPANDED: 320,
    COLLAPSED: 80
  },
  
  // Breakpoints (mobile-first)
  BREAKPOINTS: {
    MOBILE: 768,
    TABLET: 1024,
    DESKTOP: 1200
  },
  
  // Animation durations
  ANIMATIONS: {
    FAST: 200,
    NORMAL: 300,
    SLOW: 500
  }
} as const;

export const WELEARN_ROUTES = {
  HOME: '/home',
  LANDING: '/',
  SIGN_IN: '/signin',
  SIGN_UP: '/signup',
  USER_INFO: '/userinfo',
  DASHBOARD: '/dashboard',
  DOCUMENTS: '/documents',
  PROFILE: '/profile',
  SETTINGS: '/settings'
} as const;

export const NAVIGATION_ITEMS = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    route: WELEARN_ROUTES.DASHBOARD,
    requiresAuth: true
  },
  {
    id: 'documents',
    label: 'Documents',
    route: WELEARN_ROUTES.DOCUMENTS,
    requiresAuth: true
  },
  {
    id: 'profile',
    label: 'Profile',
    route: WELEARN_ROUTES.USER_INFO,
    requiresAuth: true
  },
  {
    id: 'settings',
    label: 'Settings',
    route: WELEARN_ROUTES.SETTINGS,
    requiresAuth: true
  }
] as const;
