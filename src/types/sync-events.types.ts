export type SyncEventBase<TType extends string> = {
  type: TType;
  timestamp?: string;
};

export type CampusSyncPayload = {
  id: number;
  name: string;
  address?: string | null;
};

export type DepartmentSyncPayload = {
  id: number;
  name: string;
};

export type HobbySyncPayload = {
  id: number;
  name: string;
};

export type UserSyncPayload = {
  id: number;
  displayName?: string | null;
  binusianEmail?: string | null;
  phoneNumber?: string | null;
  gender?: string | null;
  age?: number | null;
  binusianYear?: number | null;
  description?: string | null;
  profilePhotoUrl?: string | null;
  campusId?: number | null;
  campusName?: string | null;
  campusAddress?: string | null;
  majorId?: number | null;
  majorName?: string | null;
  hobbies?: { id?: number | null; name?: string | null }[];
  photos?: {
    id?: number | null;
    url?: string | null;
    sortOrder?: number | null;
    isProfile?: boolean | null;
  }[];
  campus?: {
    id?: number | null;
    name?: string | null;
    address?: string | null;
  } | null;
  major?: { id?: number | null; name?: string | null } | null;
};

export type UserSyncSource = {
  UserID: number;
  Username?: string | null;
  Email?: string | null;
  PhoneNumber?: string | null;
  Gender?: string | null;
  Age?: number | null;
  CodeYear?: number | null;
  Description?: string | null;
  ProfilePhotoUrl?: string | null;
  CampusID?: number | null;
  DepartmentID?: number | null;
  campus?: {
    CampusID?: number | null;
    CampusName?: string | null;
    CampusAddress?: string | null;
  } | null;
  department?: {
    DepartmentID?: number | null;
    DepartmentName?: string | null;
  } | null;
  hobbies?: {
    HobbyID?: number | null;
    hobby?: {
      HobbyID?: number | null;
      HobbyName?: string | null;
    } | null;
  }[];
  photos?: {
    UserPhotoID?: number | null;
    PhotoUrl?: string | null;
    SortOrder?: number | null;
    IsProfile?: boolean | null;
  }[];
};

export type CampusSyncSource = {
  CampusID: number;
  CampusName: string;
  CampusAddress?: string | null;
};

export type DepartmentSyncSource = {
  DepartmentID: number;
  DepartmentName: string;
};

export type HobbySyncSource = {
  HobbyID: number;
  HobbyName: string;
};

export type CampusSyncedEvent = SyncEventBase<
  'campus.synced' | 'campus.created' | 'campus.updated'
> & {
  campus: CampusSyncPayload;
};

export type CampusDeletedEvent = SyncEventBase<'campus.deleted'> & {
  campusId: number;
};

export type DepartmentSyncedEvent = SyncEventBase<
  'department.synced' | 'department.created' | 'department.updated'
> & {
  department: DepartmentSyncPayload;
};

export type DepartmentDeletedEvent = SyncEventBase<'department.deleted'> & {
  departmentId: number;
};

export type HobbySyncedEvent = SyncEventBase<
  'hobby.synced' | 'hobby.created' | 'hobby.updated'
> & {
  hobby: HobbySyncPayload;
};

export type HobbyDeletedEvent = SyncEventBase<'hobby.deleted'> & {
  hobbyId: number;
};

export type UserSyncedEvent = SyncEventBase<
  'user.synced' | 'user.created' | 'user.updated'
> & {
  user: UserSyncPayload;
};

export type UserDeletedEvent = SyncEventBase<'user.deleted'> & {
  userId: number;
};

export type CampusEventPayload = CampusSyncedEvent | CampusDeletedEvent;
export type DepartmentEventPayload =
  | DepartmentSyncedEvent
  | DepartmentDeletedEvent;
export type HobbyEventPayload = HobbySyncedEvent | HobbyDeletedEvent;
export type UserEventPayload = UserSyncedEvent | UserDeletedEvent;
