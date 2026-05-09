import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform, Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsBoolean,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';

function toNumberArray(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => Number(item));
  }

  if (typeof value !== 'string') {
    return value;
  }

  const trimmed = value.trim();
  if (!trimmed) return [];

  try {
    const parsed = JSON.parse(trimmed);
    if (Array.isArray(parsed)) {
      return parsed.map((item) => Number(item));
    }
  } catch {
    // Fall back to comma-separated parsing.
  }

  return trimmed.split(',').map((item) => Number(item.trim()));
}

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
  unreadCount: number;

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

export const MATCH_DECISIONS = {
  LIKE: 'LIKE',
  PASS: 'PASS',
} as const;

export type MatchDecision = (typeof MATCH_DECISIONS)[keyof typeof MATCH_DECISIONS];

export class MatchProfileHobbyDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class MatchProfilePhotoDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  url: string;

  @ApiProperty()
  sortOrder: number;

  @ApiProperty()
  isProfile: boolean;
}

export class MatchProfileCampusDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiPropertyOptional({ nullable: true })
  address: string | null;
}

export class MatchProfileMajorDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;
}

export class MatchProfileDto {
  @ApiProperty()
  id: number;

  @ApiPropertyOptional({ nullable: true })
  displayName: string | null;

  @ApiPropertyOptional({ nullable: true })
  binusianEmail: string | null;

  @ApiPropertyOptional({ nullable: true })
  phoneNumber: string | null;

  @ApiPropertyOptional({ nullable: true })
  gender: string | null;

  @ApiPropertyOptional({ nullable: true })
  age: number | null;

  @ApiPropertyOptional({ nullable: true })
  binusianYear: number | null;

  @ApiPropertyOptional({ nullable: true })
  description: string | null;

  @ApiPropertyOptional({ nullable: true })
  profilePhotoUrl: string | null;

  @ApiPropertyOptional({ nullable: true, type: MatchProfileCampusDto })
  campus: MatchProfileCampusDto | null;

  @ApiPropertyOptional({ nullable: true, type: MatchProfileMajorDto })
  major: MatchProfileMajorDto | null;

  @ApiProperty({ type: [MatchProfileHobbyDto] })
  hobbies: MatchProfileHobbyDto[];

  @ApiProperty({ type: [MatchProfilePhotoDto] })
  photos: MatchProfilePhotoDto[];
}

export class DiscoverMatchesQueryDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  userId: number;

  @ApiPropertyOptional({ default: 20, minimum: 1, maximum: 50 })
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(50)
  limit?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  campusId?: number;

  @ApiPropertyOptional()
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  majorId?: number;

  @ApiPropertyOptional({ type: [Number] })
  @IsOptional()
  @Transform(({ value }) => toNumberArray(value))
  @IsArray()
  @IsInt({ each: true })
  hobbyIds?: number[];
}

export class SwipeUserDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  swiperId: number;

  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  targetUserId: number;

  @ApiProperty({ enum: Object.values(MATCH_DECISIONS) })
  @IsString()
  @IsIn(Object.values(MATCH_DECISIONS))
  decision: MatchDecision;
}

export class MatchDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: number;

  @ApiProperty({ type: MatchProfileDto })
  matchedUser: MatchProfileDto;

  @ApiPropertyOptional({ nullable: true })
  conversationId: string | null;

  @ApiProperty()
  status: 'ACTIVE' | 'UNMATCHED';

  @ApiProperty()
  isNew: boolean;

  @ApiPropertyOptional({ nullable: true })
  lastMessagePreview: string | null;

  @ApiPropertyOptional({ nullable: true })
  lastMessageSenderId: number | null;

  @ApiProperty()
  matchedAt: Date;
}

export class SwipeResultDto {
  @ApiProperty()
  swiperId: number;

  @ApiProperty()
  targetUserId: number;

  @ApiProperty({ enum: Object.values(MATCH_DECISIONS) })
  decision: MatchDecision;

  @ApiProperty()
  isMatch: boolean;

  @ApiPropertyOptional({ nullable: true, type: MatchDto })
  match: MatchDto | null;
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
