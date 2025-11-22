# Eastern Massage Spa Website

This is a modern, responsive website for Eastern Massage Spa in Issaquah, WA, built with Next.js and Tailwind CSS.

## Features

- **Responsive Design**: Looks great on mobile, tablet, and desktop.
- **Fast Performance**: Built with Next.js App Router.
- **Clean UI**: Modern, spa-like aesthetic using Tailwind CSS.
- **Information Architecture**: Clear sections for Services, Pricing, Location, and Hours.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx`: The main landing page assembling all sections.
- `src/components/`: Reusable UI components.
  - `Navbar.tsx`: Sticky navigation bar.
  - `Hero.tsx`: Welcome banner with Call to Actions.
  - `Services.tsx`: Pricing list and services menu.
  - `Location.tsx`: Address, hours, and contact info.
  - `Footer.tsx`: Site footer.
- `src/app/layout.tsx`: Global layout and metadata.
- `src/app/globals.css`: Global styles and Tailwind configuration.

## content Updates

To update prices or hours, edit the respective component in `src/components/`.
- **Prices**: `src/components/Services.tsx`
- **Hours/Address**: `src/components/Location.tsx`

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
