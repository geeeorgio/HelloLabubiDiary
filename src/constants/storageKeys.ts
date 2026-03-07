export const STORAGE_KEYS = ['is_onboarding_completed', 'liked_facts'] as const;

export type StorageKey = (typeof STORAGE_KEYS)[number];
