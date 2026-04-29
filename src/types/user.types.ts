export interface CampusDto {
  id: number;
  name: string;
  address: string;
}

export interface MajorDto {
  id: number;
  name: string;
}

export interface HobbyDto {
  id: number;
  name: string;
}

export interface UserPhotoDto {
  id: number;
  url: string;
  sortOrder: number;
  isProfile: boolean;
}

export interface UserProfileDto {
  id: number;
  displayName: string;
  binusianEmail: string;
  phoneNumber: string;
  binusianYear: number;
  description: string;
  profilePhotoUrl: string;
  campus: CampusDto;
  major: MajorDto;
  hobbies: HobbyDto[];
  photos: UserPhotoDto[];
}

export interface AuthResponseDto {
  access_token: string;
  user: UserProfileDto;
}

export interface RegisterDto {
  binusianEmail: string;
  password: string;
  phoneNumber: string;
  displayName: string;
  binusianYear: number;
  majorId: number;
  campusId: number;
  hobbyIds: number[];
  description?: string;
}

export interface LoginDto {
  idToken: string;
}

export interface UpdateUserDto {
  displayName?: string;
  description?: string;
  phoneNumber?: string;
  profilePhotoUrl?: string;
  campusId?: number;
  majorId?: number;
  binusianYear?: number;
  photoUrls?: string[];
  hobbyIds?: number[];
}

export interface CreateCampusDto {
  campusName: string;
  campusAddress: string;
}

export interface CreateMajorDto {
  majorName: string;
}

export interface CreateHobbyDto {
  hobbyName: string;
}

export interface CampusRecordDto {
  CampusID: number;
  CampusName: string;
  CampusAddress: string;
  Stsrc: string;
}

export interface MajorRecordDto {
  DepartmentID: number;
  DepartmentName: string;
  Stsrc: string;
}

export interface HobbyRecordDto {
  HobbyID: number;
  HobbyName: string;
  Stsrc: string;
}

export type UserDto = UserProfileDto;
export type DepartmentDto = MajorDto;
export type CreateDepartmentDto = CreateMajorDto;
