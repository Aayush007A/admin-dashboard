# Generated Next.js Full-Stack Application

This project was built with Vibe. It is configured to run with a Next.js 15 App Router and a Prisma/PostgreSQL database.

## Prerequisites

Before running the application, make sure you have:
1. **Node.js** (v18 or higher)
2. **PostgreSQL** database (such as Neon, Supabase, or local Postgres)

## Getting Started

1. **Unzip the project** and open it in your terminal.
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment Variables**:
   Create a `.env` file in the root directory and add your database connection string:
   ```env
   DATABASE_URL="postgresql://username:password@host:port/dbname?schema=public"
   ```
4. **Push the database schema**:
   Prisma will automatically create the required tables in your database:
   ```bash
   npx prisma db push
   ```
5. **Run the development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.
