# 🛍️ PintarDagang - Super App Ekonomi Kreatif

<div align="center">

![PintarDagang Logo](https://via.placeholder.com/200x80/4F46E5/FFFFFF?text=PintarDagang)

**Platform terintegrasi untuk Jual Beli, Edukasi, dan Filantropi**

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-ORM-2D3748?style=for-the-badge&logo=prisma)](https://www.prisma.io/)

[Demo](https://pintardagang.vercel.app) • [Documentation](#documentation) • [Report Bug](https://github.com/ilhamriadi/pintardagang/issues) • [Request Feature](https://github.com/ilhamriadi/pintardagang/issues)

</div>

---

## 📖 Tentang

**PintarDagang** adalah super app ekosistem ekonomi kreatif yang mengintegrasikan tiga pilar utama dalam satu platform:

### 🎯 Tiga Pilar Utama

1. **🛍️ Marketplace** - Platform jual beli produk UMKM
2. **🎓 Edukasi** - Kursus online dengan instruktur profesional  
3. **❤️ Filantropi** - Kampanye donasi dan sosial

### 🌟 Fitur Unggulan

- **Single Sign-On** - Satu akun untuk semua modul
- **Digital Wallet** - Sistem pembayaran terintegrasi
- **Real-time Chat** - Komunikasi antar pengguna
- **Notifications** - Notifikasi terpadu untuk semua aktivitas
- **Responsive Design** - Optimal di desktop dan mobile
- **TypeScript** - Type safety dan maintainability
- **Modern UI** - Menggunakan shadcn/ui components

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm atau yarn
- Git

### Installation

1. **Clone repository**
```bash
git clone https://github.com/ilhamriadi/pintardagang.git
cd pintardagang
```

2. **Install dependencies**
```bash
npm install
```

3. **Setup environment variables**
```bash
cp .env.example .env.local
```

Edit `.env.local`:
```env
DATABASE_URL="file:./db/dev.db"
JWT_SECRET="your-jwt-secret"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"
```

4. **Setup database**
```bash
npx prisma generate
npx prisma db push
```

5. **Run development server**
```bash
npm run dev
```

6. **Buka [http://localhost:3000](http://localhost:3000)**

---

## 🏗️ Teknologi Stack

### Frontend
- **Next.js 15** - React framework dengan App Router
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first CSS
- **shadcn/ui** - Modern UI components
- **Framer Motion** - Animasi
- **Lucide React** - Icon library

### Backend
- **Next.js API Routes** - Serverless API
- **Prisma ORM** - Database ORM
- **SQLite** - Database (development)
- **bcryptjs** - Password hashing
- **JWT** - Authentication
- **Socket.io** - Real-time communication

### Tools & DevOps
- **ESLint** - Code linting
- **PM2** - Process manager (production)
- **Nginx** - Reverse proxy
- **Let's Encrypt** - SSL certificates

---

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── marketplace/   # Marketplace APIs
│   │   ├── edukasi/       # Education APIs
│   │   └── filantropi/    # Donation APIs
│   ├── marketplace/       # Marketplace pages
│   ├── edukasi/           # Education pages
│   ├── filantropi/        # Donation pages
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Homepage
├── components/            # React components
│   ├── layout/           # Layout components
│   │   ├── header.tsx    # Navigation header
│   │   └── footer.tsx    # Footer
│   └── ui/               # shadcn/ui components
├── lib/                  # Utility libraries
│   ├── db.ts            # Database client
│   └── utils.ts         # Helper functions
└── hooks/               # Custom React hooks
```

---

## 🗄️ Database Schema

Database menggunakan Prisma dengan 25+ tabel yang mencakup:

### Core System
- `users` - User management dengan role-based access
- `wallets` - Digital wallet system
- `notifications` - Notification system

### E-commerce Module
- `stores` - Store management
- `products` - Product catalog
- `orders` - Order processing
- `payments` - Payment tracking
- `reviews` - Rating & review system

### Education Module  
- `courses` - Course management
- `lessons` - Course content
- `enrollments` - Student enrollment
- `course_reviews` - Course ratings

### Filantropi Module
- `campaigns` - Donation campaigns
- `donations` - Donation tracking
- `campaign_updates` - Progress updates

### Communication
- `messages` - Internal messaging
- `notifications` - Push notifications

[Lihat full schema](./prisma/schema.prisma)

---

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Database
npm run db:push      # Push schema to database
npm run db:generate  # Generate Prisma client
npm run db:migrate   # Run migrations
npm run db:reset     # Reset database

# Production
npm run build        # Build application
npm run start        # Start production server
```

### Environment Variables

Copy `.env.example` ke `.env.local` dan konfigurasi:

```env
# Database
DATABASE_URL="file:./db/dev.db"

# Authentication
JWT_SECRET="your-super-secret-jwt-key"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-nextauth-secret"

# Payment Gateway (optional)
MIDTRANS_SERVER_KEY="your-midtrans-key"
MIDTRANS_CLIENT_KEY="your-midtrans-key"

# Email Service (optional)
RESEND_API_KEY="your-resend-key"

# File Upload (optional)
CLOUDINARY_CLOUD_NAME="your-cloudinary"
CLOUDINARY_API_KEY="your-api-key"
CLOUDINARY_API_SECRET="your-api-secret"
```

---

## 🚀 Deployment

### VPS Deployment (Recommended)

1. **Clone repository di VPS**
```bash
git clone https://github.com/ilhamriadi/pintardagang.git
cd pintardagang
```

2. **Install dependencies**
```bash
npm install
npm install -g pm2
```

3. **Setup production environment**
```bash
cp .env.example .env.production
# Edit .env.production dengan production values
```

4. **Build dan start**
```bash
npm run build
pm2 start ecosystem.config.js
```

5. **Setup Nginx reverse proxy**
```nginx
server {
    listen 80;
    server_name yourdomain.com;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Platform Deployment

- **Vercel** (Recommended untuk Next.js)
- **Railway**
- **DigitalOcean App Platform**
- **AWS EC2**

---

## 📊 API Documentation

### Authentication Endpoints

#### Register User
```http
POST /api/auth/register
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123",
  "name": "User Name",
  "role": "USER" | "SELLER" | "INSTRUCTOR"
}
```

#### Login
```http
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}
```

### Marketplace Endpoints

#### Get Products
```http
GET /api/marketplace/products?page=1&limit=12&category=fashion&search=baju
```

#### Create Product
```http
POST /api/marketplace/products
Authorization: Bearer <token>
Content-Type: application/json

{
  "name": "Product Name",
  "price": 100000,
  "categoryId": "category-id",
  "storeId": "store-id"
}
```

[Full API Documentation](./docs/api.md)

---

## 🎨 UI Components

Aplikasi menggunakan **shadcn/ui** components yang fully customizable:

- **Navigation** - Multi-level navigation menu
- **Cards** - Product, course, dan campaign cards
- **Forms** - Registration, login, dan checkout forms
- **Modals** - Product preview dan donation modals
- **Tables** - Order history dan admin dashboards
- **Charts** - Analytics dan reporting

---

## 🔒 Security Features

- **JWT Authentication** - Secure token-based auth
- **Password Hashing** - bcryptjs encryption
- **CORS Protection** - Cross-origin resource sharing
- **Input Validation** - Zod schema validation
- **SQL Injection Prevention** - Prisma ORM protection
- **XSS Protection** - Content Security Policy
- **Rate Limiting** - API rate limiting (planned)

---

## 🌍 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

### How to Contribute

1. **Fork the Project**
2. **Create your Feature Branch** (`git checkout -b feature/AmazingFeature`)
3. **Commit your Changes** (`git commit -m 'Add some AmazingFeature'`)
4. **Push to the Branch** (`git push origin feature/AmazingFeature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow TypeScript best practices
- Use ESLint configuration
- Write meaningful commit messages
- Update documentation for changes
- Test your changes thoroughly

---

## 📝 License

Distributed under the MIT License. See [LICENSE](LICENSE) for more information.

---

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - The React framework
- [Prisma](https://www.prisma.io/) - Next-generation ORM
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - Beautiful UI components
- [Lucide](https://lucide.dev/) - Beautiful icons

---

## 📞 Contact

**Ilham Riadi** - [@ilhamriadi](https://github.com/ilhamriadi)

Project Link: [https://github.com/ilhamriadi/pintardagang](https://github.com/ilhamriadi/pintardagang)

---

<div align="center">

**⭐ Jika bermanfaat, jangan lupa kasih bintang!**

Made with ❤️ by [Ilham Riadi](https://github.com/ilhamriadi)

</div>