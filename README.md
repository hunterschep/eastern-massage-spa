# Eastern Massage Spa Website

This is a modern, responsive website for Eastern Massage Spa in Issaquah, WA, built with Next.js and Tailwind CSS. The production domain is https://easternmassagespa.me. The site supports online booking via Fresha and highlights a visible call-to-book option.

## Features

- **Responsive Design**: Looks great on mobile, tablet, and desktop.
- **Fast Performance**: Built with Next.js App Router.
- **Clean UI**: Modern, spa-like aesthetic using Tailwind CSS.
- **Information Architecture**: Clear sections for Services, Pricing, Location, and Hours.
- **Booking Ready**: Primary CTA links directly to the Fresha scheduling page.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `src/app/page.tsx`: The main landing page assembling all sections.
- `src/components/`: Reusable UI components.
  - `Navbar.tsx`: Sticky navigation bar with quick call and booking buttons.
  - `Hero.tsx`: Welcome banner with primary Fresha booking CTA.
  - `Services.tsx`: Pricing list and services menu.
  - `Location.tsx`: Address, hours, and contact info.
  - `Footer.tsx`: Site footer.
- `src/data/site.ts`: Central place for business info (name, domain, phone, address, services, booking URL).
- `src/app/layout.tsx`: Global layout and metadata.
- `src/app/globals.css`: Global styles and Tailwind configuration.

## Content Updates

To update business details, services, booking link, or hours, edit `src/data/site.ts`. Components read from that file so changes propagate across the site.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
