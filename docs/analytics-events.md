# Analytics and Conversion Tracking

Tracking is environment-driven. No real analytics IDs are hardcoded.

Supported environment variables:

- `NEXT_PUBLIC_GA4_MEASUREMENT_ID=[GA4_MEASUREMENT_ID]`
- `NEXT_PUBLIC_GTM_CONTAINER_ID=[GTM_CONTAINER_ID]`
- `[GOOGLE_ADS_CONVERSION_ID]`
- `[GOOGLE_ADS_BOOKING_CONVERSION_LABEL]`
- `[META_PIXEL_ID_IF_USED]`
- `[COOKIE_CONSENT_REQUIREMENT]`
- `[PRIVACY_POLICY_ANALYTICS_LANGUAGE_APPROVAL]`

When GA4 or GTM IDs are absent, the site still builds and click tracking is
inert except for a local `window.dataLayer` push.

Implemented event names:

- `book_now_click`
- `service_booking_click`
- `phone_click`
- `directions_click`
- `contact_link_click`
- `external_fresha_click`
- `gift_card_click`
- `service_detail_view`

Implemented event parameters:

- `page_path`
- `service_name`
- `cta_location`
- `destination_url`

Verification steps after real IDs are supplied:

1. Start a local preview.
2. Add `NEXT_PUBLIC_GA4_MEASUREMENT_ID` or `NEXT_PUBLIC_GTM_CONTAINER_ID`.
3. Open GA4 DebugView or GTM Preview.
4. Click header booking, service booking, phone, and directions CTAs.
5. Confirm events include the expected `page_path`, `service_name`,
   `cta_location`, and `destination_url` values.
