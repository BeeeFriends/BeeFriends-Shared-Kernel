# @beefriends/shared-kernel

Shared TypeScript types and endpoint constants for BeeFriends keeps the frontend in sync with the backend API.

## Installation

```bash
npm install @beefriends/shared-kernel
```

## Usage

### Endpoints

```typescript
import {
  AUTH_ENDPOINTS,
  USER_ENDPOINTS,
  CAMPUS_ENDPOINTS,
  DEPARTMENT_ENDPOINTS,
  HOBBY_ENDPOINTS,
} from "@beefriends/shared-kernel";

// Auth
fetch(AUTH_ENDPOINTS.REGISTER, {
  method: "POST",
  body: JSON.stringify(payload),
});
fetch(AUTH_ENDPOINTS.LOGIN, { method: "POST", body: JSON.stringify(payload) });
fetch(AUTH_ENDPOINTS.FIREBASE, {
  method: "POST",
  body: JSON.stringify({ idToken }),
});

// User
fetch(USER_ENDPOINTS.ME); // GET /api/v1/users/me
fetch(USER_ENDPOINTS.BY_ID(1)); // GET /api/v1/users/1

// Campus
fetch(CAMPUS_ENDPOINTS.LIST); // GET /api/v1/campus
fetch(CAMPUS_ENDPOINTS.BY_ID(2)); // GET /api/v1/campus/2

// Department
fetch(DEPARTMENT_ENDPOINTS.LIST); // GET /api/v1/departments

// Hobby
fetch(HOBBY_ENDPOINTS.MY_HOBBIES); // GET /api/v1/hobbies/me
fetch(HOBBY_ENDPOINTS.DELETE(3), { method: "DELETE" });
```

### Types

```typescript
import type {
  // Auth
  LoginDto,
  RegisterDto,
  FirebaseAuthDto,
  AuthResponseDto,

  // User
  UserDto,
  UpdateUserDto,

  // Campus & Department
  CampusDto,
  CreateCampusDto,
  DepartmentDto,
  CreateDepartmentDto,

  // Hobby
  HobbyDto,
  CreateHobbyDto,
} from "@beefriends/shared-kernel";

const payload: LoginDto = { email: "john@example.com", password: "123456" };
const user: UserDto = response.data;
```

## Available Exports

### Endpoints

| Constant               | Endpoints                            |
| ---------------------- | ------------------------------------ |
| `AUTH_ENDPOINTS`       | `REGISTER`, `LOGIN`, `FIREBASE`      |
| `USER_ENDPOINTS`       | `ME`, `BY_ID(id)`                    |
| `CAMPUS_ENDPOINTS`     | `LIST`, `BY_ID(id)`, `CREATE`        |
| `DEPARTMENT_ENDPOINTS` | `LIST`, `BY_ID(id)`, `CREATE`        |
| `HOBBY_ENDPOINTS`      | `MY_HOBBIES`, `CREATE`, `DELETE(id)` |

### Types

| Type                  | Description                                                          |
| --------------------- | -------------------------------------------------------------------- |
| `UserDto`             | Full user object with campus, department, hobbies                    |
| `AuthResponseDto`     | Response after login/register — contains `access_token`              |
| `LoginDto`            | `{ email, password }`                                                |
| `RegisterDto`         | `{ username, email, password, campusId?, departmentId?, codeYear? }` |
| `FirebaseAuthDto`     | `{ idToken }` — Firebase OAuth token from frontend                   |
| `UpdateUserDto`       | Partial user fields for PATCH /users/me                              |
| `CampusDto`           | Campus object                                                        |
| `DepartmentDto`       | Department object                                                    |
| `HobbyDto`            | Hobby object                                                         |
| `CreateCampusDto`     | `{ campusName, campusAddress }`                                      |
| `CreateDepartmentDto` | `{ departmentName }`                                                 |
| `CreateHobbyDto`      | `{ roleName }`                                                       |

## Versioning

```bash
npm run release:patch   # bug fix   → 1.0.0 → 1.0.1
npm run release:minor   # new types → 1.0.0 → 1.1.0
npm run release:major   # breaking  → 1.0.0 → 2.0.0
```

Pushing a tag triggers GitHub Actions to build and publish to npm automatically.
