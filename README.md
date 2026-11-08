# LA CARPA DE YO SOY JOSÉ — Great Tent Cathedral

**A modern digital platform for Great Tent Cathedral.**

🌐 **Live Website:** https://great-tent-cathedral.vercel.app  
💻 **GitHub Repository:** https://github.com/charlesishimwe/great-tent-cathedral

---

## 1. Project Overview

Great Tent Cathedral is a modern web platform designed to establish a welcoming, accessible, and engaging digital presence for the church community.

The platform brings together modern web technologies, responsive design, and secure user authentication to provide visitors and members with an accessible online experience.

The project emphasizes simplicity, accessibility, reliability, and a professional visual identity.

## 2. Key Features

- **Modern Homepage:** A welcoming landing page introducing Great Tent Cathedral.
- **Multilingual Welcome Experience:** A greeting experience incorporating multiple languages and cultures.
- **User Registration:** Account creation through Supabase authentication.
- **User Login:** Secure authentication for registered users.
- **Email Verification:** Email confirmation during account registration.
- **Member Dashboard:** Authenticated user dashboard.
- **Admin Area:** Dedicated administrative interface.
- **Responsive Design:** Designed to work across desktop and mobile devices.
- **Cloud Deployment:** Production hosting through Vercel.
- **Authentication Integration:** Supabase-powered authentication and backend services.

## 3. Technology Stack

| Component | Technology |
|---|---|
| Frontend | Next.js 16 |
| Programming Language | TypeScript |
| UI | React |
| Styling | CSS |
| Backend API | Python / FastAPI |
| Authentication | Supabase Auth |
| Database Services | Supabase |
| Package Management | npm |
| Version Control | Git / GitHub |
| Deployment | Vercel |

## 4. Project Structure

```text
great-tent-cathedral/
│
├── api/
│   └── Backend API
│
├── web/
│   ├── public/
│   │   └── images/
│   │
│   ├── src/
│   │   ├── app/
│   │   │   ├── admin/
│   │   │   ├── auth/
│   │   │   ├── dashboard/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── globals.css
│   │   │   ├── layout.tsx
│   │   │   └── page.tsx
│   │   │
│   │   └── lib/
│   │
│   ├── package.json
│   └── next.config.ts
│
├── .gitignore
└── README.md
```

## 5. Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- Git
- A Supabase account

### Clone the Repository

```bash
git clone https://github.com/charlesishimwe/great-tent-cathedral.git
```

Navigate into the project:

```bash
cd great-tent-cathedral
```

### Install Frontend Dependencies

```bash
cd web
npm install
```

### Configure Environment Variables

Create a `.env.local` file inside the `web` directory.

Add the following variables:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url

NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_publishable_key
```

Replace the example values with your actual Supabase project credentials.

**Security:** Never commit `.env.local`, private API keys, or service-role credentials to GitHub.

### Start the Development Server

```bash
npm run dev
```

Open your browser:

```text
http://localhost:3000
```

## 6. Production Build

To generate an optimized production build:

```bash
npm run build
```

To run the production version locally:

```bash
npm start
```

## 7. Deployment

The frontend is deployed through Vercel.

**Production URL:**

https://great-tent-cathedral.vercel.app

The project is connected to GitHub for source control and deployment updates.

To deploy manually using the Vercel CLI:

```bash
npx --yes vercel@latest --prod
```

Make sure the required environment variables are configured in the Vercel project settings.

## 8. Authentication

Authentication is powered by Supabase.

The platform supports:

- User registration.
- User login.
- Email verification.
- Authenticated dashboard access.
- Authentication callback handling.

Supabase project configuration is required for authentication to work correctly in production.

## 9. Development Workflow

The project uses Git and GitHub for version control.

To save and publish changes:

```bash
git add .
git commit -m "Update Great Tent Cathedral website"
git push origin main
```

## 10. Future Development

Potential areas for continued development include:

- Online church event management.
- Sermon and media library.
- Live streaming integration.
- Member profiles and community features.
- Church announcements and notifications.
- Online giving and donations.
- Multilingual content management.
- Expanded administrative tools.

## 11. Project Information

**Project Name:** Great Tent Cathedral — LA CARPA DE YO SOY JOSÉ

**Project Type:** Church Website and Digital Community Platform

**Frontend Framework:** Next.js

**Backend Technology:** FastAPI

**Authentication Provider:** Supabase

**Hosting Provider:** Vercel

**Repository Owner:** Charles Ishimwe

**Repository:** https://github.com/charlesishimwe/great-tent-cathedral

---

## 12. License

This project is maintained for Great Tent Cathedral.

All rights reserved unless otherwise specified.

---

**LA CARPA DE YO SOY JOSÉ**

*A digital home for faith, community, and connection.*
