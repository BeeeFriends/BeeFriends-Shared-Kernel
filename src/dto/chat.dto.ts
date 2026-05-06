import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class CreateMessageDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  conversationId: string;

  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ required: false, type: [String] })
  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  attachmentUrls?: string[];

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  replyToMessageId?: string;
}

export class CreateConversationDto {
  @ApiProperty({ type: [Number] })
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => Number)
  @IsInt({ each: true })
  participantIds: number[];

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiProperty({ required: false, nullable: true })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiProperty({ required: false, default: false })
  @IsOptional()
  @IsBoolean()
  isGroup?: boolean;
}

export class MessageDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  conversationId: string;

  @ApiProperty()
  senderId: number;

  @ApiProperty()
  content: string;

  @ApiProperty()
  timestamp: Date;

  @ApiProperty({ enum: ['text', 'image', 'file'] })
  messageType: 'text' | 'image' | 'file';

  @ApiProperty({ type: [String] })
  attachmentUrls: string[];

  @ApiProperty()
  isEdited: boolean;

  @ApiProperty()
  isDeleted: boolean;

  @ApiProperty({ type: [Number] })
  readBy: number[];

  @ApiProperty({ required: false, nullable: true })
  replyToMessageId: string | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class ConversationDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ type: [Number] })
  participants: number[];

  @ApiProperty({ type: [Number] })
  participantIds: number[];

  @ApiProperty({ required: false, nullable: true })
  name: string | null;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  isGroup: boolean;

  @ApiProperty({ required: false, nullable: true })
  lastMessageId: string | null;

  @ApiProperty({ required: false, nullable: true })
  lastMessagePreview: string | null;

  @ApiProperty({ required: false, nullable: true })
  lastMessageSenderId: number | null;

  @ApiProperty({ required: false, nullable: true, type: MessageDto })
  lastMessage: MessageDto | null;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}

export class ConversationWithMessagesDto extends ConversationDto {
  @ApiProperty({ type: [MessageDto] })
  messages: MessageDto[];
}

export class PresenceDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  isOnline: boolean;
}

export class PresenceQueryDto {
  @ApiProperty({ type: [Number] })
  @IsArray()
  @Type(() => Number)
  @IsInt({ each: true })
  userIds: number[];
}

export const CHAT_EVENTS = {
  JOIN_CONVERSATION: 'join_conversation',
  LEAVE_CONVERSATION: 'leave_conversation',
  SEND_MESSAGE: 'send_message',
  MESSAGE_RECEIVED: 'message_received',
  TYPING_START: 'typing_start',
  TYPING_STOP: 'typing_stop',
  MESSAGE_READ: 'message_read',
  PRESENCE_CHANGED: 'presence_changed',
  PRESENCE_GET: 'presence_get',
} as const;

export interface TypingIndicatorEvent {
  conversationId: string;
  userId: number;
}

export interface MessageReadEvent {
  conversationId: string;
  messageId: string;
  userId: number;
}
