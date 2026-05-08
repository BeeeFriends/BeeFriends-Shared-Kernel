const BASE = '/v1/notifications';

export const NOTIFICATION_ENDPOINTS = {
  LIST: BASE,
  CREATE: BASE,
  BY_ID: (id: string) => `${BASE}/${id}`,
  MARK_READ: (id: string) => `${BASE}/${id}/read`,
  MARK_ALL_READ: `${BASE}/read-all`,
  SETTINGS: (userId: number) => `${BASE}/settings/${userId}`,
  DEVICE_TOKENS: `${BASE}/device-tokens`,
} as const;
