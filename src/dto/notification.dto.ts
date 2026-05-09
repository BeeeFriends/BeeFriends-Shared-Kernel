import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsIn,
  IsInt,
  IsObject,
  IsOptional,
  IsString,
} from 'class-validator';

export const NOTIFICATION_TYPES = {
  MATCH: 'MATCH',
  CHAT: 'CHAT',
} as const;

export type NotificationType =
  (typeof NOTIFICATION_TYPES)[keyof typeof NOTIFICATION_TYPES];

export const DEVICE_PLATFORMS = {
  ANDROID: 'android',
  IOS: 'ios',
  WEB: 'web',
} as const;

export type DevicePlatform =
  (typeof DEVICE_PLATFORMS)[keyof typeof DEVICE_PLATFORMS];

export class NotificationDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  userId: number;

  @ApiProperty({ enum: Object.values(NOTIFICATION_TYPES) })
  type: NotificationType;

  @ApiProperty()
  title: string;

  @ApiProperty()
  body: string;

  @ApiPropertyOptional({ nullable: true })
  data: Record<string, string> | null;

  @ApiProperty()
  isRead: boolean;

  @ApiProperty()
  createdAt: Date;
}

export type NotificationItemDto = Omit<NotificationDto, 'createdAt'> & {
  createdAt: string | Date;
};

export class CreateNotificationDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  userId: number;

  @ApiProperty({ enum: Object.values(NOTIFICATION_TYPES) })
  @IsString()
  @IsIn(Object.values(NOTIFICATION_TYPES))
  type: NotificationType;

  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  body: string;

  @ApiPropertyOptional()
  @IsOptional()
  @IsObject()
  data?: Record<string, string>;
}

export class NotificationSettingsDto {
  @ApiProperty()
  userId: number;

  @ApiProperty()
  matchEnabled: boolean;

  @ApiProperty()
  chatEnabled: boolean;

  @ApiProperty()
  pushEnabled: boolean;

  @ApiProperty()
  inAppEnabled: boolean;
}

export type NotificationRecordDto = NotificationDto;

export type DeviceTokenRecordDto = RegisterDeviceTokenDto & {
  updatedAt: Date;
};

export type UpdateNotificationSettingsPayload = Partial<
  Omit<NotificationSettingsDto, 'userId'>
>;

export type ChatMessageNotificationEvent = {
  type?: 'message.created' | string;
  conversationId?: string;
  message?: {
    senderId: number;
    content: string;
  };
  participantIds?: number[];
};

export type MatchCreatedNotificationEvent = {
  type?: 'match.created' | string;
  match?: {
    id: string;
    firstUserId: number;
    secondUserId: number;
    conversationId?: string | null;
  };
};

export class UpdateNotificationSettingsDto {
  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  matchEnabled?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  chatEnabled?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  pushEnabled?: boolean;

  @ApiPropertyOptional()
  @IsOptional()
  @IsBoolean()
  inAppEnabled?: boolean;
}

export class RegisterDeviceTokenDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  userId: number;

  @ApiProperty()
  @IsString()
  token: string;

  @ApiProperty({ enum: Object.values(DEVICE_PLATFORMS) })
  @IsString()
  @IsIn(Object.values(DEVICE_PLATFORMS))
  platform: DevicePlatform;

  @ApiPropertyOptional()
  @IsOptional()
  @IsString()
  deviceId?: string;
}

export class UpdateDeviceTokenStateDto {
  @ApiProperty()
  @Type(() => Number)
  @IsInt()
  userId: number;

  @ApiProperty()
  @IsString()
  token: string;

  @ApiProperty({
    description:
      'Whether this device should receive remote push notifications right now.',
  })
  @IsBoolean()
  isActive: boolean;
}
