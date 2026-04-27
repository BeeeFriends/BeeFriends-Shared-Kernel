import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
  Matches,
  Max,
  Min,
  MinLength,
} from 'class-validator';

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

  @ApiProperty({ example: 2024 })
  @IsInt()
  @Min(2000)
  @Max(2100)
  binusianYear: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  campusId: number;

  @ApiProperty({ example: 1 })
  @IsInt()
  majorId: number;

  @ApiProperty({
    example: 'https://storage.googleapis.com/beefriends/profile/adrian.jpg',
  })
  @IsUrl({ require_tld: false })
  profilePhotoUrl: string;

  @ApiProperty({ example: [1, 2, 3] })
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @IsInt({ each: true })
  hobbyIds: number[];

  @ApiPropertyOptional({
    example: [
      'https://storage.googleapis.com/beefriends/gallery/adrian-1.jpg',
      'https://storage.googleapis.com/beefriends/gallery/adrian-2.jpg',
    ],
  })
  @IsOptional()
  @IsArray()
  @ArrayMaxSize(9)
  @IsUrl({ require_tld: false }, { each: true })
  photoUrls?: string[];

  @ApiPropertyOptional({ example: 'Computer Science student who loves coffee.' })
  @IsString()
  @IsOptional()
  description?: string;
}

export class LoginDto {
  @ApiProperty({
    description: 'Firebase ID token obtained after signing in on the client',
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
  @ArrayMaxSize(9)
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
