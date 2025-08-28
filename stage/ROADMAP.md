# 🗺️ 🚀 TrioVie Social Media — Roadmap tổng thể

## 🎯 Mục tiêu dự án

- Xây dựng một nền tảng social media (TrioVie) tập trung kết nối thật sự, cá nhân hoá trải nghiệm, ưu tiên tốc độ và khả năng mở rộng.
- Áp dụng các công nghệ hiện đại, đồng bộ TypeScript end-to-end, tối ưu SEO và real-time interaction.

## 🏗️ Tech Stack chính thức

### Frontend (Next.js)

- Next.js (React 18)
- SSR + ISR (SEO, tốc độ)
- TypeScript
- Tailwind CSS
- Auth: JWT (cookie HTTP-only)

### Backend (NestJS)

- REST API
- WebSocket Gateway (real-time)
- TypeScript
- Prisma ORM
- Redis (cache, pub/sub)
- Storage: S3

### Database

- PostgreSQL

## 🚩 **Giai đoạn 0**: **_Foundation & Setup (Week 1–2)_**

### 🎯 **Mục tiêu**:

- Thiết lập chuẩn kỹ thuật, kiến trúc
- Tạo repo, pipeline CI/CD
- Khởi tạo các module core

### **Tasks**:

- Chọn tech stack chính thức (✅ đã chọn: Next.js, NestJS, PostgreSQL, Redis, S3)
- Thiết kế sơ đồ kiến trúc high-level - ✅
- Cấu trúc thư mục FE/BE/shared - ✅
- Thiết lập monorepo hoặc repo riêng + shared types - ✅
- Thiết lập CI/CD (GitHub Actions) - ✅
- Setup Docker base (local & prod) - ✅
- ESLint, Prettier, Husky (lint-staged) - ✅

## 🚩 **_Giai đoạn 1: Core User & Auth (Week 3–4)_**

### 🎯 **Mục tiêu**: Cho phép đăng ký, đăng nhập, quản lý hồ sơ.

### **Tasks**:

- Module User (BE)
- Auth (JWT + refresh token, cookie HTTP-only)
- Profile page (SSR)
- Basic frontend layout (Next.js, Tailwind)
- Shared DTOs User
- Setup role/permission basic (optional)

## 🚩 **_Giai đoạn 2: Post & Feed (Week 5–7)_**

### 🎯 **Mục tiêu**: Cho phép user đăng bài, xem feed, comment

### **Tasks**:

- Module Post (BE): CRUD bài viết
- Module Comment
- Upload media (S3)
- SSR/ISR feed page (Next.js)
- API pagination + infinite scroll (SWR/React Query)
- Basic reaction (like)
- Shared DTOs Post, Comment

## 🚩 **_Giai đoạn 3: Social Graph & Follow (Week 8–9)_**

### 🎯 **Mục tiêu**: Kết nối giữa người dùng.

### **Tasks**:

- Module Follow
- API list followers, following
- Update feed (chỉ user follow)
- Notification cơ bản (DB + polling)

## 🚩 **_Giai đoạn 4: Notification & Real-time (Week 10–12)_**

### 🎯 **Mục tiêu**: Tăng tương tác real-time

### **Tasks**:

- Setup NestJS WebSocket Gateway
- Realtime notification khi có like, comment, follow
- Redis pub/sub
- Notification UI (badge, dropdown)

## 🚩 **_Giai đoạn 5: Chat/Inbox (Week 13–15)_**

### 🎯 **Mục tiêu**: Tích hợp nhắn tin one-to-one

### **Tasks**:

- Module Chat (BE): message, conversation
- Realtime (socket)
- UI chat (Next.js)
- Seen, typing indicator
- Shared DTOs Message

## 🚩 **_Giai đoạn 6: Admin & Moderation (Week 16–17)_**

### 🎯 **Mục tiêu**: Đảm bảo quản trị và xử lý vi phạm

### **Tasks**:

- Module Report
- Block user/content
- Dashboard quản lý (Next.js admin UI)
- Export logs

## 🚩 **_Giai đoạn 7: Optimization & Scale (Week 18–20)_**

### 🎯 **Mục tiêu**: Tối ưu performance, chuẩn bị production

### **Tasks**:

- Implement CDN
- Optimize image/video
- Rate-limit & security hardening
- Monitoring & logging (Sentry, Prometheus)
- Review performance (load test)

### 🚩 **_Giai đoạn 8: Go-live & Marketing (Week 21)_**

### 🎯 **Mục tiêu**: Launch MVP public

### **Tasks**:

- Deploy production
- Setup domain, SSL
- Social login
- Marketing landing page
- Collect feedback
