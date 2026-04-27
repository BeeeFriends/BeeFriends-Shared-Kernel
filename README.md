# @beefriends/shared-kernel

Shared TypeScript types and endpoint constants for BeeFriends. The frontend should import API contracts from this package instead of copying backend DTO shapes by hand.

## Installation

```bash
npm install @beefriends/shared-kernel
```

## Usage

```typescript
import {
  AUTH_ENDPOINTS,
  CAMPUS_ENDPOINTS,
  HOBBY_ENDPOINTS,
  MAJOR_ENDPOINTS,
  USER_ENDPOINTS,
} from "@beefriends/shared-kernel";

import type {
  AuthResponseDto,
  LoginDto,
  RegisterDto,
  UpdateUserDto,
  UserProfileDto,
} from "@beefriends/shared-kernel";

// Backend Nest apps should import validation DTO classes from:
// import { RegisterDto } from "@beefriends/shared-kernel/dto";

const registerPayload: RegisterDto = {
  binusianEmail: "adrian001@binus.ac.id",
  password: "password123",
  phoneNumber: "+6281234567890",
  displayName: "Adrian",
  binusianYear: 2024,
  majorId: 1,
  campusId: 1,
  profilePhotoUrl: "https://storage.googleapis.com/beefriends/profile/adrian.jpg",
  photoUrls: ["https://storage.googleapis.com/beefriends/gallery/adrian-1.jpg"],
  hobbyIds: [1, 2, 3],
  description: "Computer Science student who loves coffee.",
};

await fetch(AUTH_ENDPOINTS.REGISTER, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(registerPayload),
});

const loginPayload: LoginDto = { idToken: "firebase-id-token" };
const loginResponse: AuthResponseDto = await fetch(AUTH_ENDPOINTS.LOGIN, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(loginPayload),
}).then((response) => response.json());

const me: UserProfileDto = loginResponse.user;
```

## Endpoints

| Constant | Endpoints |
| --- | --- |
| `AUTH_ENDPOINTS` | `REGISTER`, `LOGIN` |
| `USER_ENDPOINTS` | `ME`, `BY_ID(id)` |
| `CAMPUS_ENDPOINTS` | `LIST`, `BY_ID(id)`, `CREATE` |
| `MAJOR_ENDPOINTS` | `LIST`, `BY_ID(id)`, `CREATE` |
| `HOBBY_ENDPOINTS` | `LIST`, `BY_ID(id)`, `CREATE` |

## Types

| Type | Description |
| --- | --- |
| `RegisterDto` | Payload for `POST /api/v1/auth/register` |
| `LoginDto` | `{ idToken }` from Firebase client sign-in |
| `AuthResponseDto` | BeeFriends JWT and normalized user profile |
| `UserProfileDto` | Public user profile shape returned by auth/user endpoints |
| `UpdateUserDto` | Partial profile fields for `PATCH /api/v1/users/me` |
| `CampusDto` | Normalized campus shape inside profile responses |
| `MajorDto` | Normalized major shape inside profile responses |
| `HobbyDto` | Normalized hobby shape inside profile responses |
| `CreateCampusDto` | Payload for creating campus master data |
| `CreateMajorDto` | Payload for creating major master data |
| `CreateHobbyDto` | Payload for creating hobby master data |

`DEPARTMENT_ENDPOINTS`, `DepartmentDto`, and `CreateDepartmentDto` are kept as compatibility aliases for older frontend code. Prefer the `Major` names for new code.

## Nest DTO Classes

Backend services can import decorator-backed DTO classes from the `dto` subpath:

```typescript
import { LoginDto, RegisterDto } from "@beefriends/shared-kernel/dto";
```

The root package stays frontend-safe and only exports plain types plus endpoint constants.

## Versioning

```bash
npm run release:patch
npm run release:minor
npm run release:major
```

Pushing a tag triggers GitHub Actions to build and publish to npm automatically.
