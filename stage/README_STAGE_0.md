# 📄 Stage 0: Foundation & Setup (Week 1–2)

## 🎯 Mục tiêu

- Thiết lập chuẩn kỹ thuật và kiến trúc.
- Hoàn thiện môi trường phát triển (dev/prod).
- Đảm bảo codebase sạch, dễ mở rộng và dễ bảo trì.

---

## ✅ Checklist hoàn thành

### ✅ Tech stack

- Next.js (Frontend)
- NestJS (Backend)
- PostgreSQL (Database)
- Redis (Cache)
- S3 (Storage)

---

### ✅ Kiến trúc

- Hoàn thành sơ đồ kiến trúc high-level (file `architecture.md` và diagram).
- Phân tách rõ các layer: frontend, backend, shared.

---

### ✅ Cấu trúc thư mục

trio-vie/

├── apps/

│ ├── frontend/

│ └── backend/

├── packages/

│ └── shared/

├── .github/

│ └── workflows/

├── docker-compose.yml

├── README.md

└── ...

- `apps/frontend`: Next.js App.
- `apps/backend`: NestJS App.
- `packages/shared`: Shared types, utils, constants.

---

### ✅ Monorepo & Shared types

- Thiết lập workspace với npm workspaces.
- Cấu hình chuẩn cho chia sẻ types giữa frontend & backend.

---

### ✅ CI/CD (GitHub Actions)

- Tích hợp build, lint, test, deploy cơ bản.
- File workflow: `.github/workflows/main.yml`.

---

### ✅ Docker base

- `Dockerfile` và `docker-compose.yml` cho local & production.
- `.dockerignore` cấu hình đầy đủ.

---

### ✅ ESLint, Prettier, Husky (lint-staged)

- Đã setup ESLint & Prettier toàn dự án.
- Husky v9 (manual hook), không còn deprecated.
- Hook pre-commit chạy lint-staged (lint & format trước khi commit).

---

## 🟢 Trạng thái

✅ **Stage 0 hoàn thành 100%**

---

## 🚀 Kế hoạch tiếp theo (Stage 1)

- Triển khai module **Authentication** (JWT, refresh token, role-based guard).
- Thiết kế và implement **User module** (CRUD user, profile).
- Thiết lập base API routes và UI skeleton.
- Bắt đầu chuẩn hoá spec API (OpenAPI/Swagger).

---

## 🤝 Contributors

- **Lead**: [Your Name]
- **Frontend**: ...
- **Backend**: ...
- **Infra & DevOps**: ...

---

> **Ghi chú:** Nếu cần chi tiết hơn (ví dụ thêm hình diagram, link file kiến trúc, command khởi chạy, etc.), hãy bổ sung trực tiếp vào README này.
