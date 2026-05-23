const PLACEHOLDER_ONLY = /^\[[A-Z0-9_ /-]+\]$/;
const PLACEHOLDER_TOKEN = /\s*[:-]?\s*\[[A-Z0-9_ /-]+\]/g;

export function hasPlaceholder(value?: string | null) {
  return Boolean(value && /\[[A-Z0-9_ /-]+\]/.test(value));
}

export function isPlaceholder(value?: string | null) {
  return Boolean(value && PLACEHOLDER_ONLY.test(value.trim()));
}

export function stripPlaceholders(value?: string | null) {
  if (!value) {
    return "";
  }

  return value
    .replace(PLACEHOLDER_TOKEN, "")
    .replace(/\s{2,}/g, " ")
    .replace(/\s+([.,;:!?])/g, "$1")
    .trim();
}

export function publicText(value: string | undefined | null, fallback: string) {
  const stripped = stripPlaceholders(value);
  return stripped || fallback;
}

export function publicUrl(value?: string | null) {
  return value && value.startsWith("http") ? value : undefined;
}

export function publicHoursText(value?: string | null) {
  return publicText(value, "By appointment.");
}

export function publicReviewSummary(value?: string | null) {
  return publicText(
    value,
    "Client feedback will be added after Michelle approves the final source links."
  );
}

export function publicPractitionerBio(value?: string | null) {
  return publicText(
    value,
    "Michelle is the primary practitioner at Eastern Massage Spa in Issaquah. Her full bio, credentials, and professional photo are being added soon."
  );
}

export function publicLocationDetail(value: string | undefined | null, fallback: string) {
  return publicText(value, fallback);
}

export function publicTestimonial(value: string | undefined | null) {
  return publicText(
    value,
    "Client review"
  );
}
