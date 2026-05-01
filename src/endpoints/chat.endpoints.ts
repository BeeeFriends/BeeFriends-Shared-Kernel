export const CHAT_ENDPOINTS = {
  CONVERSATIONS: '/api/v1/chat/conversations',
  CONVERSATION_BY_ID: (id: string) => `/api/v1/chat/conversations/${id}`,
  CONVERSATION_WITH_MESSAGES: (id: string) => `/api/v1/chat/conversations/${id}/with-messages`,
  CREATE_DIRECT_MESSAGE: (userId: string) => `/api/v1/chat/conversations/direct/${userId}`,
  ADD_PARTICIPANT: (conversationId: string, userId: string) =>
    `/api/v1/chat/conversations/${conversationId}/participants/${userId}`,
  REMOVE_PARTICIPANT: (conversationId: string, userId: string) =>
    `/api/v1/chat/conversations/${conversationId}/participants/${userId}`,

  MESSAGES: '/api/v1/chat/messages',
  MESSAGE_BY_ID: (id: string) => `/api/v1/chat/messages/${id}`,
  MESSAGES_BY_CONVERSATION: (conversationId: string) =>
    `/api/v1/chat/messages/conversation/${conversationId}`,
  MARK_MESSAGE_READ: (id: string) => `/api/v1/chat/messages/${id}/mark-read`,
  UNREAD_COUNT: (conversationId: string) =>
    `/api/v1/chat/messages/${conversationId}/unread-count`,
  SEARCH_MESSAGES: (conversationId: string) =>
    `/api/v1/chat/messages/${conversationId}/search`,
};

export const CHAT_EVENTS = {
  JOIN_CONVERSATION: 'joinConversation',
  LEAVE_CONVERSATION: 'leaveConversation',
  SEND_MESSAGE: 'sendMessage',
  EDIT_MESSAGE: 'editMessage',
  DELETE_MESSAGE: 'deleteMessage',
  MARK_AS_READ: 'markAsRead',
  TYPING: 'typing',
  GET_ONLINE_USERS: 'getOnlineUsers',

  CONNECTED: 'connected',
  MESSAGE_RECEIVED: 'messageReceived',
  MESSAGE_EDITED: 'messageEdited',
  MESSAGE_DELETED: 'messageDeleted',
  MESSAGE_READ: 'messageRead',
  USER_TYPING: 'userTyping',
  USER_STOPPED_TYPING: 'userStoppedTyping',
  USER_ONLINE: 'userOnline',
  USER_OFFLINE: 'userOffline',
  ONLINE_USERS: 'onlineUsers',
  ERROR: 'error',
  JOINED_CONVERSATION: 'joinedConversation',
};
