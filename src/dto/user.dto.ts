import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsIn,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  Max,
  Min,
  MinLength,
  ValidateIf,
} from 'class-validator';

function toNumber(value: unknown) {
  return typeof value === 'string' ? Number(value) : value;
}

function toNumberArray(value: unknown) {
  if (Array.isArray(value)) {
    return value.map((item) => Number(item));
  }

  if (typeof value !== 'string') {
    return value;
  }

  const trimmed = value.trim();
  if (!trimmed) {
    return [];
  }

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

export class RegisterDto {
  @ApiProperty({ example: 'Adrian' })
  @IsString()
  @IsNotEmpty()
  displayName: string;

  @ApiProperty({ example: 'adrian001@binus.ac.id' })
  @Matches(/^[^\s@]+@binus\.ac\.id$/i, {
    message: 'binusianEmail must use @binus.ac.id',
  })
  binusianEmail: string;

  @ApiProperty({ example: 'password123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;

  @ApiProperty({ example: '+6281234567890' })
  @IsString()
  @IsNotEmpty()
  @Matches(/^\+?[0-9\s-]{8,20}$/, {
    message: 'phoneNumber must be a valid phone number',
  })
  phoneNumber: string;

  @ApiProperty({ enum: ['Male', 'Female'], example: 'Male' })
  @IsString()
  @IsIn(['Male', 'Female'])
  gender: string;

  @ApiProperty({ example: 19, minimum: 17, maximum: 60 })
  @Transform(({ value }) => toNumber(value))
  @IsInt()
  @Min(17)
  @Max(60)
  age: number;

  @ApiProperty({ example: 2024 })
  @Transform(({ value }) => toNumber(value))
  @IsInt()
  @Min(2000)
  @Max(2100)
  binusianYear: number;

  @ApiProperty({ example: 1 })
  @Transform(({ value }) => toNumber(value))
  @IsInt()
  campusId: number;

  @ApiProperty({ example: 1 })
  @Transform(({ value }) => toNumber(value))
  @IsInt()
  majorId: number;

  @ApiProperty({ example: [1, 2, 3] })
  @Transform(({ value }) => toNumberArray(value))
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @IsInt({ each: true })
  hobbyIds: number[];

  @ApiPropertyOptional({
    example: 'Computer Science student who loves coffee.',
  })
  @IsString()
  @IsOptional()
  description?: string;
}

export class FirebaseRegisterDto extends RegisterDto {
  @ApiPropertyOptional({
    example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...',
    description:
      'Firebase ID token from the frontend Firebase SDK. When provided, password is not required by the backend.',
  })
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  firebaseIdToken?: string;

  @ApiPropertyOptional({
    example: 'password123',
    minLength: 6,
    description:
      'Required only for the legacy backend-created Firebase password account flow.',
  })
  @ValidateIf((dto: FirebaseRegisterDto) => !dto.firebaseIdToken)
  @IsString()
  @MinLength(6)
  password: string;
}

export class LoginDto {
  @ApiProperty({ example: 'adrian001@binus.ac.id' })
  @Matches(/^[^\s@]+@binus\.ac\.id$/i, {
    message: 'binusianEmail must use @binus.ac.id',
  })
  binusianEmail: string;

  @ApiProperty({ example: 'password123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password: string;
}

export class FirebaseTokenLoginDto {
  @ApiProperty({
    example: 'eyJhbGciOiJSUzI1NiIsImtpZCI6Ij...',
    description: 'Firebase ID token returned by the frontend Firebase SDK.',
  })
  @IsString()
  @IsNotEmpty()
  idToken: string;
}

export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'Adrian' })
  @IsString()
  @IsOptional()
  displayName?: string;

  @ApiPropertyOptional({ example: 'Hello, I am Adrian!' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ example: '+6281234567890' })
  @IsString()
  @IsOptional()
  @Matches(/^\+?[0-9\s-]{8,20}$/, {
    message: 'phoneNumber must be a valid phone number',
  })
  phoneNumber?: string;

  @ApiPropertyOptional({ enum: ['Male', 'Female'], example: 'Male' })
  @IsString()
  @IsIn(['Male', 'Female'])
  @IsOptional()
  gender?: string;

  @ApiPropertyOptional({ example: 19, minimum: 17, maximum: 60 })
  @Transform(({ value }) => toNumber(value))
  @IsInt()
  @IsOptional()
  @Min(17)
  @Max(60)
  age?: number;

  @ApiPropertyOptional({
    example: 'https://storage.googleapis.com/beefriends/profile/adrian.jpg',
  })
  @IsUrl({ require_tld: false })
  @IsOptional()
  profilePhotoUrl?: string;

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  campusId?: number;

  @ApiPropertyOptional({ example: 1 })
  @IsInt()
  @IsOptional()
  majorId?: number;

  @ApiPropertyOptional({ example: 2024 })
  @IsInt()
  @IsOptional()
  @Min(2000)
  @Max(2100)
  binusianYear?: number;

  @ApiPropertyOptional({
    example: [
      'https://storage.googleapis.com/beefriends/gallery/adrian-1.jpg',
      'https://storage.googleapis.com/beefriends/gallery/adrian-2.jpg',
    ],
  })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(3)
  @IsUrl({ require_tld: false }, { each: true })
  photoUrls?: string[];

  @ApiPropertyOptional({ example: [1, 2, 3] })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(10)
  @IsInt({ each: true })
  hobbyIds?: number[];
}

export class CreateCampusDto {
  @ApiProperty({ example: 'Bina Nusantara Alam Sutera' })
  @IsString()
  @IsNotEmpty()
  campusName: string;

  @ApiProperty({ example: 'Jl. Jalur Sutera Barat No.21, Alam Sutera' })
  @IsString()
  @IsNotEmpty()
  campusAddress: string;
}

export class CreateMajorDto {
  @ApiProperty({ example: 'Computer Science' })
  @IsString()
  @IsNotEmpty()
  majorName: string;
}

export class CreateHobbyDto {
  @ApiProperty({ example: 'Gaming' })
  @IsString()
  @IsNotEmpty()
  hobbyName: string;
}

export class CreateDepartmentDto extends CreateMajorDto {}
