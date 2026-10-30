This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact email configuration on Netlify

Set `RESEND_API_KEY`, `RESEND_CONTACT_TEMPLATE_ID`, and `CONTACT_TO_EMAIL` in the site's Netlify environment variables with the Functions scope for each deploy context that needs email delivery, then redeploy. Keep the API key server-side; do not use a `NEXT_PUBLIC_` prefix or commit it to the repository.

`RESEND_FROM_EMAIL` optionally sets the sender for acknowledgment emails. Verify the sending domain in Resend before using it. The inquiry notification currently uses `onboarding@resend.dev`, which is subject to Resend's test-sender restrictions.

The contact route initializes Resend only when handling a submission, so building the site does not require the API key. Without the key at runtime, JSON submissions receive a 503 error and native form submissions return to `/inquire?error=1`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
