const BASE = '/v1/matchchat';

export const MESSAGE_ENDPOINTS = {
  SEND: `${BASE}/messages`,
  BY_CONVERSATION: (conversationId: string) =>
    `${BASE}/messages/conversation/${conversationId}`,
} as const;

export const CONVERSATION_ENDPOINTS = {
  CREATE: `${BASE}/conversations`,
  BY_ID: (id: string) => `${BASE}/conversations/${id}`,
  WITH_MESSAGES: (id: string) => `${BASE}/conversations/${id}/messages`,
  BY_USER: (userId: number) => `${BASE}/conversations/user/${userId}`,
} as const;

export const PRESENCE_ENDPOINTS = {
  BY_USER: (userId: number) => `${BASE}/presence/${userId}`,
  BATCH: `${BASE}/presence/batch`,
} as const;

export const MATCH_ENDPOINTS = {
  CAMPUSES: `${BASE}/matches/campuses`,
  DISCOVER: `${BASE}/matches/discover`,
  HOBBIES: `${BASE}/matches/hobbies`,
  MAJORS: `${BASE}/matches/majors`,
  SWIPE: `${BASE}/matches/swipe`,
  BY_USER: (userId: number) => `${BASE}/matches/user/${userId}`,
  BY_ID: (id: string) => `${BASE}/matches/${id}`,
  UNMATCH: (id: string) => `${BASE}/matches/${id}`,
} as const;

export const MATCH_CHAT_ENDPOINTS = {
  MESSAGES: MESSAGE_ENDPOINTS,
  CONVERSATIONS: CONVERSATION_ENDPOINTS,
  PRESENCE: PRESENCE_ENDPOINTS,
  MATCHES: MATCH_ENDPOINTS,
} as const;
