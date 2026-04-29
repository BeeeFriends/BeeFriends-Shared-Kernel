const BASE = '/api/v1';

export const AUTH_ENDPOINTS = {
  REGISTER: `${BASE}/auth/register`,
  LOGIN: `${BASE}/auth/login`,
} as const;

export const USER_ENDPOINTS = {
  ME: `${BASE}/users/me`,
  BY_ID: (id: number) => `${BASE}/users/${id}`,
} as const;

export const CAMPUS_ENDPOINTS = {
  LIST: `${BASE}/user/campus`,
  BY_ID: (id: number) => `${BASE}/user/campus/${id}`,
  CREATE: `${BASE}/user/campus`,
} as const;

export const MAJOR_ENDPOINTS = {
  LIST: `${BASE}/user/majors`,
  BY_ID: (id: number) => `${BASE}/user/majors/${id}`,
  CREATE: `${BASE}/user/majors`,
} as const;

export const HOBBY_ENDPOINTS = {
  LIST: `${BASE}/user/hobbies`,
  BY_ID: (id: number) => `${BASE}/user/hobbies/${id}`,
  CREATE: `${BASE}/user/hobbies`,
} as const;

export const DEPARTMENT_ENDPOINTS = MAJOR_ENDPOINTS;
