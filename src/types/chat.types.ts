export interface MessageDto {
  id: string;
  conversationId: string;
  senderId: string;
  content: string;
  attachmentUrls?: string[];
  isEdited: boolean;
  isDeleted: boolean;
  readBy?: string[];
  replyToMessageId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ConversationDto {
  id: string;
  participantIds: string[];
  name?: string;
  description?: string;
  isGroup: boolean;
  lastMessageId?: string;
  lastMessagePreview?: string;
  lastMessageSenderId?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ConversationWithMessagesDto extends ConversationDto {
  messages: MessageDto[];
}

export interface TypingIndicatorEvent {
  userId: string;
  userName: string;
  conversationId: string;
}

export interface MessageReceivedEvent extends MessageDto {}

export interface MessageEditedEvent {
  id: string;
  conversationId: string;
  content: string;
  isEdited: boolean;
  updatedAt: Date;
}

export interface MessageDeletedEvent {
  messageId: string;
  conversationId: string;
}

export interface MessageReadEvent {
  messageId: string;
  readBy: string[];
}

export interface UserOnlineEvent {
  userId: string;
  userName: string;
  timestamp: Date;
}

export interface UserOfflineEvent {
  userId: string;
  timestamp: Date;
}

export interface OnlineUsersEvent {
  conversationId: string;
  onlineUsers: string[];
}
