import type { Resource } from "i18next";

import en from "./locales/en.json";
import ko from "./locales/ko.json";
import { assertValidLocaleMessages } from "./locale-validation";

export const DEFAULT_LOCALE = "ko" as const;
export const FALLBACK_LOCALE = "en" as const;
export const supportedLocales = ["ko", "en"] as const;

export type SupportedLocale = (typeof supportedLocales)[number];

export const localeMessages: Record<SupportedLocale, unknown> = {
  ko,
  en,
};

for (const [locale, messages] of Object.entries(localeMessages)) {
  try {
    assertValidLocaleMessages(messages);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`Invalid ${locale} locale messages: ${message}`);
  }
}

export const i18nextResources: Resource = Object.fromEntries(
  Object.entries(localeMessages).map(([locale, messages]) => [locale, { translation: messages }]),
) as Resource;
