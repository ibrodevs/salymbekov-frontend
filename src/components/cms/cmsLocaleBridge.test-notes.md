# CMS locale bridge

This frontend-only bridge keeps CMS/backend data unchanged. When the API falls back to Russian text for an empty EN/KG CMS body, the renderer reuses matching strings from the project's existing i18n locale bundles for display only.

- Russian remains the source/fallback.
- URLs, media and S3 objects are not rewritten.
- Unmatched CMS text remains unchanged instead of inventing translations.
- `ky` is normalized to the project's `kg` language code.
