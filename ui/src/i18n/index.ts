import i18n, { type InitOptions, type TOptions } from "i18next";
import { initReactI18next, useTranslation as useReactI18nextTranslation } from "react-i18next";

import {
  DEFAULT_LOCALE,
  FALLBACK_LOCALE,
  i18nextResources,
  supportedLocales,
  type SupportedLocale,
} from "./locales";

export const LOCALE_STORAGE_KEY = "paperclip.locale";

export function resolveLocale(locale: string | null | undefined): SupportedLocale {
  return supportedLocales.includes(locale as SupportedLocale)
    ? (locale as SupportedLocale)
    : DEFAULT_LOCALE;
}

function readStoredLocale(): SupportedLocale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;
  try {
    return resolveLocale(window.localStorage.getItem(LOCALE_STORAGE_KEY));
  } catch {
    return DEFAULT_LOCALE;
  }
}

function applyDocumentLocale(locale: string) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = resolveLocale(locale);
}

function persistLocale(locale: string) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, resolveLocale(locale));
  } catch {
    // Storage may be unavailable in hardened or private browser contexts.
  }
}

const initialLocale = readStoredLocale();
const i18nextOptions: InitOptions = {
  resources: i18nextResources,
  lng: initialLocale,
  fallbackLng: FALLBACK_LOCALE,
  supportedLngs: [...supportedLocales],
  defaultNS: "translation",
  interpolation: { escapeValue: false },
  returnObjects: false,
  initAsync: false,
};

void i18n.use(initReactI18next).init(i18nextOptions).catch((error: unknown) => {
  console.error("Failed to initialize i18next", error);
});

applyDocumentLocale(initialLocale);
i18n.on("languageChanged", (locale) => {
  const resolvedLocale = resolveLocale(locale);
  persistLocale(resolvedLocale);
  applyDocumentLocale(resolvedLocale);
});

export async function changeLocale(locale: string) {
  const resolvedLocale = resolveLocale(locale);
  await i18n.changeLanguage(resolvedLocale);
  return resolvedLocale;
}

export function t(key: string, options: TOptions = {}) {
  return i18n.t(key, options);
}

export const useTranslation = useReactI18nextTranslation;
export { i18n };
