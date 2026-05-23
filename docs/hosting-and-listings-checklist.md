# Hosting and Listing Remediation Checklist

No DNS, hosting, SSL, Google Business Profile, Fresha, Birdeye, Apple Maps,
Bing Places, Yelp, or other third-party listing changes have been made from
this repository.

## Required Hosting Fixes

- [HOSTING_REDIRECT_REQUIRED: Configure platform-level HTTP-to-HTTPS 301 redirect preserving path/query.]
- [WWW_SSL_REQUIRED: Add valid SSL certificate for www.easternmassagespa.me and configure www-to-non-www 301 redirect.]

Acceptance checks after hosting changes:

- `http://easternmassagespa.me/*` returns one 301 to `https://easternmassagespa.me/*`.
- `http://www.easternmassagespa.me/*` returns one 301 to `https://easternmassagespa.me/*`.
- `https://www.easternmassagespa.me/*` has a valid certificate and returns one 301 to `https://easternmassagespa.me/*`.
- Path and query strings are preserved.

## Listing Consistency Checklist

Confirm and align the following fields in each listing:

- Business name: [OFFICIAL_BUSINESS_NAME]
- Address: [OFFICIAL_STREET_ADDRESS], [OFFICIAL_SUITE_OR_UNIT], [OFFICIAL_CITY_STATE_ZIP]
- Phone: [OFFICIAL_PHONE]
- Website URL: `https://easternmassagespa.me`
- Booking URL: [GENERIC_FRESHA_BOOKING_URL]
- Hours: [OFFICIAL_LISTING_HOURS]
- Services and pricing: [SERVICE_PRICING_CONFIRMATION]
- Description: [OFFICIAL_LISTING_DESCRIPTION]
- Photos: [REAL_EXTERIOR_PHOTO], [REAL_INTERIOR_PHOTO], [REAL_TREATMENT_ROOM_PHOTO], [REAL_MICHELLE_PHOTO]
- Review link: [GOOGLE_REVIEW_URL]

Update targets requiring account access:

- Google Business Profile: [GBP_LOGIN_OR_MANAGER_ACCESS]
- Fresha: [FRESHA_LOGIN_ACCESS]
- Birdeye: [BIRDEYE_LOGIN_ACCESS]
- Apple Maps: [APPLE_MAPS_ACCESS]
- Bing Places: [BING_PLACES_ACCESS]
- Yelp: [YELP_ACCESS]
- MapQuest and other aggregators: [OTHER_OFFICIAL_PROFILE_URLS]
