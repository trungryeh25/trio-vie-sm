# 🚀 TrioVie SM — Roadmap Stage 2: Post & Feed (Week 5–7)

## 🎯 Mục tiêu

- Cho phép user đăng bài (Post), xem feed bài viết
- Tương tác bằng comment và like
- Hỗ trợ upload media (ảnh, video)
- Tối ưu hiển thị feed: SSR/ISR, infinite scroll

---

## 🚀 Tasks chi tiết - finished = ✅

### 1️⃣ Module Post (Backend)

- ✅ CRUD bài viết (Create, Read, Update, Delete)
- ✅ API endpoints:
  - `POST /posts`
  - `GET /posts`
  - `GET /posts/:id`
  - `PATCH /posts/:id`
  - `DELETE /posts/:id`
- ✅ Model Post:

```
  id: string
  authorId: string
  content: string
  mediaUrls?: string[]
  createdAt: Date
  updatedAt: Date
  likeCount: number
  commentCount: number
  isDeleted: boolean
```

---

### 2️⃣ Module Comment (Backend)

✅

- API endpoints:
- `POST /posts/:postId/comments`
- `GET /posts/:postId/comments`
- `DELETE /comments/:id`
- Model Comment:

```
  id: string
  postId: string
  authorId: string
  content: string
  createdAt: Date
  updatedAt: Date
  isDeleted: boolean
```

✅

---

### 3️⃣ Upload media (S3) ⏳🔄🕑

- Hỗ trợ upload ảnh/video
- Tích hợp AWS S3 (backend service riêng)
- Hướng: frontend gửi file lên backend, backend upload lên S3, trả URL

---

### 4️⃣ Feed page (Frontend)

- Next.js page: `/feed`
- SSR (Server-side rendering) để hỗ trợ SEO & share link
- ISR (Incremental Static Regeneration) tuỳ chọn để refresh định kỳ

---

### 5️⃣ Pagination & Infinite scroll

- API hỗ trợ `?page` và `?limit`
- Frontend sử dụng React Query (hoặc SWR) + `useInfiniteQuery`
- UX: tự động load thêm khi scroll cuối

---

### 6️⃣ Basic reaction (Like)

- API endpoint: `POST /posts/:postId/like`
- Hỗ trợ toggle like
- Lưu tổng số likes (và danh sách user đã like nếu cần)

---

### 7️⃣ Shared DTOs (Post, Comment)

- Tách DTO chung vào package `@shared/dtos`
- Chuẩn hoá dữ liệu giữa frontend và backend

---

## 🗓 Timeline đề xuất

| Tuần   | Nội dung chính                                                               |
| ------ | ---------------------------------------------------------------------------- |
| Week 5 | Backend: CRUD Post, migration Prisma, validate upload media                  |
| Week 6 | Backend: Module Comment, tích hợp S3 upload; Frontend: basic form & feed SSR |
| Week 7 | Frontend: Comment, Like, Infinite scroll, hoàn thiện UI/UX feed              |

---

## 🧑‍💻 Technical Note

### **Backend**:

- NestJS modules: PostModule, CommentModule, ReactionModule (optional)
- Prisma schema migration
- Middleware AuthGuard để kiểm tra user khi post/comment
- AWS SDK (NestJS service) cho media

### **Frontend**:

- Next.js + React Query/SWR
- Components: PostCard, PostForm, CommentList, ReactionButton
- Zustand hoặc Recoil để share state (nếu cần)
- UI: TailwindCSS, shadcn/ui

### **DevOps**:

- Migrate db, seed data test
- Update CI/CD (nếu cần test image upload, S3)

---

## 🎉 Kết quả mong đợi

- User có thể đăng, xem, tương tác bài viết
- Feed mượt mà, tối ưu SEO & tốc độ tải
- Đặt nền tảng vững cho các feature tương tác social khác (reaction nâng cao, share, hashtag...)

---
