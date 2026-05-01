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
