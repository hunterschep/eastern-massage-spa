Update Fresha booking links to the correct canonical booking URL.

- Replaced old Fresha profile URLs with the canonical book-now link from issue #5.

Validation:
- Confirmed src/utils/getServiceBookingUrl already falls back to site.bookingUrl when service placeholders are not absolute URLs.
