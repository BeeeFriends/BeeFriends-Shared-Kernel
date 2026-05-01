import { IsUUID, IsString, IsOptional, IsArray, IsBoolean } from 'class-validator';

export class CreateMessageDto {
  @IsUUID()
  conversationId: string;

  @IsString()
  content: string;

  @IsArray()
  @IsOptional()
  attachmentUrls?: string[];

  @IsUUID()
  @IsOptional()
  replyToMessageId?: string;
}

export class UpdateMessageDto {
  @IsString()
  @IsOptional()
  content?: string;

  @IsArray()
  @IsOptional()
  attachmentUrls?: string[];
}

export class CreateConversationDto {
  @IsArray()
  @IsUUID('4', { each: true })
  participantIds: string[];

  @IsBoolean()
  isGroup: boolean;

  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}

export class UpdateConversationDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsString()
  @IsOptional()
  description?: string;
}
