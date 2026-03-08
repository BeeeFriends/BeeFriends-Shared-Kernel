export interface CampusDto {
  CampusID: number;
  CampusName: string;
  CampusAddress: string;
  Stsrc: string;
}

export interface DepartmentDto {
  DepartmentID: number;
  DepartmentName: string;
  Stsrc: string;
}

export interface HobbyDto {
  HobbyID: number;
  UserID: number;
  RoleName: string;
  Stsrc: string;
}

export interface UserDto {
  UserID: number;
  Username: string;
  Email: string | null;
  ImageUrl: string;
  Description: string;
  Avatar: string;
  CampusID: number | null;
  DepartmentID: number | null;
  CodeYear: number | null;
  Stsrc: string;
  campus: CampusDto | null;
  department: DepartmentDto | null;
  hobbies: HobbyDto[];
}

export interface AuthResponseDto {
  access_token: string;
  user: {
    id: number;
    username: string;
    email: string | null;
  };
}

export interface RegisterDto {
  username: string;
  email: string;
  password: string;
  campusId?: number;
  departmentId?: number;
  codeYear?: number;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface FirebaseAuthDto {
  idToken: string;
}

export interface UpdateUserDto {
  Username?: string;
  Description?: string;
  Avatar?: string;
  ImageUrl?: string;
  CampusID?: number;
  DepartmentID?: number;
  CodeYear?: number;
}

export interface CreateCampusDto {
  campusName: string;
  campusAddress: string;
}

export interface CreateDepartmentDto {
  departmentName: string;
}

export interface CreateHobbyDto {
  roleName: string;
}
