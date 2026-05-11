# @beefriends/shared-kernel

Shared API contracts, DTO classes, endpoint constants, realtime event names, and domain types for BeeFriends services.

---

## Purpose

Use this package whenever the mobile app and backend services need the same API shape. This keeps routes, DTOs, and event payloads from drifting between repositories.

```txt
Shared Kernel
  -> BeeFriends Mobile
  -> User Service
  -> Match Chat Service
  -> Notification Service
```

---

## Package Exports

| Export | Purpose |
| ------ | ------- |
| `@beefriends/shared-kernel` | Root endpoint constants and frontend-safe types |
| `@beefriends/shared-kernel/types` | User/domain TypeScript types |
| `@beefriends/shared-kernel/dto` | Nest-friendly DTO classes |
| `@beefriends/shared-kernel/dto/user` | User DTO classes |
| `@beefriends/shared-kernel/dto/chat` | Chat, match, presence DTOs and realtime events |
| `@beefriends/shared-kernel/dto/notification` | Notification DTOs and pub/sub event payloads |
| `@beefriends/shared-kernel/endpoints` | All endpoint groups |
| `@beefriends/shared-kernel/endpoints/user` | User service endpoints |
| `@beefriends/shared-kernel/endpoints/chat` | Match Chat service endpoints |
| `@beefriends/shared-kernel/endpoints/notification` | Notification service endpoints |

---

## Endpoint Groups

| Constant | Service |
| -------- | ------- |
| `AUTH_ENDPOINTS` | User auth endpoints |
| `USER_ENDPOINTS` | User profile and upload endpoints |
| `CAMPUS_ENDPOINTS` | Campus master data |
| `MAJOR_ENDPOINTS` | Major master data |
| `HOBBY_ENDPOINTS` | Hobby master data |
| `MESSAGE_ENDPOINTS` | Chat message endpoints |
| `CONVERSATION_ENDPOINTS` | Conversation endpoints |
| `MATCH_ENDPOINTS` | Discover, swipe, match, and unmatch endpoints |
| `PRESENCE_ENDPOINTS` | Online/offline presence endpoints |
| `NOTIFICATION_ENDPOINTS` | Notification, settings, and device token endpoints |

`DEPARTMENT_ENDPOINTS` is kept as a compatibility alias for older code. Prefer `MAJOR_ENDPOINTS` for new code.

---

## Usage

Install:

```bash
npm install @beefriends/shared-kernel
```

Frontend endpoint usage:

```typescript
import { USER_ENDPOINTS } from '@beefriends/shared-kernel';
import type { UserProfileDto } from '@beefriends/shared-kernel/types';

const me = await fetch(USER_ENDPOINTS.ME).then(
  (response) => response.json() as Promise<UserProfileDto>,
);
```

Backend DTO usage:

```typescript
import { CreateMessageDto } from '@beefriends/shared-kernel/dto/chat';
import { CreateNotificationDto } from '@beefriends/shared-kernel/dto/notification';
```

Realtime event usage:

```typescript
import { CHAT_EVENTS } from '@beefriends/shared-kernel/dto/chat';

socket.emit(CHAT_EVENTS.JOIN_CONVERSATION, { conversationId, userId });
```

---

## Development

```bash
npm install
npm run build
```

Watch mode:

```bash
npm run build:watch
```

---

## Scripts

| Command | Description |
| ------- | ----------- |
| `npm run build` | Compile TypeScript to `dist` |
| `npm run build:watch` | Compile in watch mode |
| `npm run prepublishOnly` | Build before publish |
| `npm run release:patch` | Bump patch version, push commits and tag |
| `npm run release:minor` | Bump minor version, push commits and tag |
| `npm run release:major` | Bump major version, push commits and tag |

---

## Versioning Notes

When a route, DTO, realtime event, or pub/sub payload changes:

1. Update the shared-kernel source.
2. Bump the package version.
3. Publish the package.
4. Update each consuming repository to the new version.

Pushing a version tag triggers the publish workflow for npm.
