const BASE = '/api/v1';

export const AUTH_ENDPOINTS = {
  REGISTER:       `${BASE}/auth/register`,
  LOGIN:          `${BASE}/auth/login`,
  FIREBASE:       `${BASE}/auth/firebase`,
} as const;

export const USER_ENDPOINTS = {
  ME:             `${BASE}/users/me`,
  BY_ID:          (id: number) => `${BASE}/users/${id}`,
} as const;

export const CAMPUS_ENDPOINTS = {
  LIST:           `${BASE}/campus`,
  BY_ID:          (id: number) => `${BASE}/campus/${id}`,
  CREATE:         `${BASE}/campus`,
} as const;

export const DEPARTMENT_ENDPOINTS = {
  LIST:           `${BASE}/departments`,
  BY_ID:          (id: number) => `${BASE}/departments/${id}`,
  CREATE:         `${BASE}/departments`,
} as const;

export const HOBBY_ENDPOINTS = {
  MY_HOBBIES:     `${BASE}/hobbies/me`,
  CREATE:         `${BASE}/hobbies`,
  DELETE:         (id: number) => `${BASE}/hobbies/${id}`,
} as const;
