# 🚩 TrioVie - Stage 1: Core User & Auth (Week 3–4)

## 🎯 Mục tiêu chính

- Cho phép người dùng **đăng ký**, **đăng nhập**, quản lý hồ sơ cá nhân.
- Xây dựng **module User** đầy đủ (backend & frontend).
- Hoàn thiện cấu trúc frontend cơ bản với layout, profile page (SSR).
- Chuẩn bị sẵn nền tảng để phát triển các feature community khác.

---

## ✅ Tech stack

- **Frontend**: Next.js (TypeScript), TailwindCSS, Zustand (state)
- **Backend**: NestJS (TypeScript), Prisma ORM
- **Database**: PostgreSQL
- **Cache**: Redis (chuẩn bị dùng cho session hoặc refresh token, optional)
- **Storage**: AWS S3 (chuẩn bị cho avatar, media sau này)

---

## 🗂️ Tasks chi tiết

### 1️⃣ Backend (NestJS)

#### 🧑‍💻 Module User

- [✅] Define Prisma model `User`:

  ```
  prisma
  model User {
    id           String   @id @default(uuid())
    email        String   @unique
    name         String
    avatar       String?
    bio          String?
    passwordHash String
    role         Role     @default(USER)
    createdAt    DateTime @default(now())
    updatedAt    DateTime @updatedAt
  }

  enum Role {
    USER
    ADMIN
  }
  ```

- [✅] User Service:
  - CRUD profile (lấy thông tin, update thông tin cá nhân).

- [✅] User Controller:
  - GET `/users/me` (lấy thông tin profile hiện tại).
  - PUT `/users/me` (update profile).

#### 🔐 Module Auth

- [✅] Register (`/auth/register`):
  - Validate email, hash password (bcrypt), lưu User.
- [✅] Login (`/auth/user`):
  - Verify email & password, generate **access token**, **refresh token**.
  - Gửi refresh token qua cookie HTTP-only.
- [✅] Refresh (`/auth/refresh`):
  - Nhận refresh token, trả về access token mới.
- [✅] Logout (`/auth/logout`):
  - Xóa refresh token khỏi DB (nếu lưu), hoặc xóa cookie.

#### ⚙️ JWT & Security

- [✅] Config JWT module (access token short life, refresh token long life).
- [✅] Middleware guard: kiểm tra access token, attach user.
- [✅] Optional: Lưu refresh token vào DB (nếu muốn quản lý revoke).

#### ⚖️ Role & Permission (Optional)

- [✅] Enum Role (USER, ADMIN).
- [⚠️] Guard kiểm tra role: decorator @Roles(), middleware check quyền. || *chưa implement* (chưa cần gấp).

### 2️⃣ Frontend (Next.js)

#### 💻 Auth Flow

- [✅] Tạo form đăng ký (zod hoặc yup validate, Tailwind UI).
- [✅] Tạo form đăng nhập.
- [✅] Call API NestJS, set cookie (HTTP-only), redirect user profile.
- [✅] Global state (zustand): lưu user info, trạng thái auth.

#### 🧑‍💻 Profile Page

- [✅] SSR page /profile, fetch dữ liệu user qua cookie.
- [✅] Cho phép update thông tin profile (name, bio, avatar).

#### 🖼️ Layout

- [✅] Header: avatar mini, menu dropdown (profile, logout).
- [✅] Footer: basic.
- [..] Optional: Sidebar nếu cần.

### 3️⃣ Shared (libs/shared)

- [✅] DTOs:
  - [✅] UserDto: id, email, name, avatar, bio, role, timestamps.
  - [✅] AuthDto: login, register, refresh.

### 💬 Design Decisions

- [✅] Auth: JWT (access token + refresh token), lưu refresh token bằng cookie HTTP-only (tránh XSS).
- [✅] State: Zustand hoặc React Context, không lưu token trong localStorage.
- [✅] DB: PostgreSQL, Prisma migration & seed.
- [✅] Role: Bắt đầu cơ bản với USER & ADMIN.

### 🗓️ Timeline dự kiến

| Tuần   | Task                                 |
| ------ | ------------------------------------ |
| Week 3 | Backend User + Auth API              |
| Week 3 | Frontend auth form + call API        |
| Week 4 | Profile page + SSR                   |
| Week 4 | Layout & global state                |
| Week 4 | Optional: role, social login, avatar |
