# @beefriends/shared-kernel

Shared TypeScript types and endpoint constants for BeeFriends — used by the frontend to stay in sync with the backend API.

## Installation

```bash
# Via GitHub Packages
npm install @beefriends/shared-kernel --registry=https://npm.pkg.github.com

# atau langsung dari GitHub
npm install github:BeeeFriends/BeeFriends-Shared-Kernel
```

## Usage

```typescript
import { AUTH_ENDPOINTS, USER_ENDPOINTS, UserDto, LoginDto } from '@beefriends/shared-kernel';

// Endpoints
fetch(AUTH_ENDPOINTS.LOGIN, { method: 'POST', body: JSON.stringify(payload) });
fetch(USER_ENDPOINTS.BY_ID(1));

// Types
const user: UserDto = response.data;
const payload: LoginDto = { email: 'john@example.com', password: '123456' };
```

## Releasing a new version

```bash
npm run release:patch   # 1.0.0 → 1.0.1
npm run release:minor   # 1.0.0 → 1.1.0
npm run release:major   # 1.0.0 → 2.0.0
```

Pushing a tag triggers GitHub Actions to build and publish automatically.

## Structure

```
src/
├── types/
│   └── user.types.ts       # UserDto, AuthResponseDto, DTOs
└── endpoints/
    └── user.endpoints.ts   # AUTH_ENDPOINTS, USER_ENDPOINTS, etc.
```
