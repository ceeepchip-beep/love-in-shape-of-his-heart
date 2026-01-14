# A Space for You

Personal blog.

## What’s included
- Next.js 16 app (React 19)
- Client-side Supabase usage via `getSupabase()` (lib/supabase.ts)
- Pages:
  - `/` — select birthdate with calendar
  - `/posts` — reads `?birthdate=YYYY-MM-DD` and shows posts for that date
  - `/create` — create a new post (form with React Quill)
- Tailwind + shadcn UI components

## Local development
1. Install dependencies:
   ```
   pnpm install
   # or
   npm install
   # or
   yarn
   ```

2. Create `.env.local` and add your Supabase variables:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```

3. Run dev:
   ```
   pnpm dev
   # or
   npm run dev
   # or
   yarn dev
   ```

4. Create the posts table (example provided in `scripts/001_create_posts_table.sql`) in your Postgres (Supabase) DB.

## Deploy
- Recommended: Vercel or Netlify; add the same environment variables in the project settings dashboard.

## Security notes
- Keep `.env.local` and any secret keys out of the repository. `.gitignore` already contains `.env*`.
- The site queries posts using birthdate equality; ensure your database and authentication policies are set according to your needs.

## License
Add a LICENSE file if you want to open-source this. Otherwise keep the repo private.