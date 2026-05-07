export type SyncEventBase<TType extends string> = {
  type: TType;
  timestamp?: string;
};

export type CampusSnapshotPayload = {
  id: number;
  name: string;
  address?: string | null;
};

export type DepartmentSnapshotPayload = {
  id: number;
  name: string;
};

export type HobbySnapshotPayload = {
  id: number;
  name: string;
};

export type UserSnapshotPayload = {
  id: number;
  displayName?: string | null;
  binusianEmail?: string | null;
  phoneNumber?: string | null;
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

export type CampusSyncedEvent = SyncEventBase<
  'campus.synced' | 'campus.created' | 'campus.updated'
> & {
  campus: CampusSnapshotPayload;
};

export type CampusDeletedEvent = SyncEventBase<'campus.deleted'> & {
  campusId: number;
};

export type DepartmentSyncedEvent = SyncEventBase<
  'department.synced' | 'department.created' | 'department.updated'
> & {
  department: DepartmentSnapshotPayload;
};

export type DepartmentDeletedEvent = SyncEventBase<'department.deleted'> & {
  departmentId: number;
};

export type HobbySyncedEvent = SyncEventBase<
  'hobby.synced' | 'hobby.created' | 'hobby.updated'
> & {
  hobby: HobbySnapshotPayload;
};

export type HobbyDeletedEvent = SyncEventBase<'hobby.deleted'> & {
  hobbyId: number;
};

export type UserSyncedEvent = SyncEventBase<
  'user.synced' | 'user.created' | 'user.updated'
> & {
  user: UserSnapshotPayload;
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
