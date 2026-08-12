import { Languages } from "lucide-react";

import { changeLocale, useTranslation } from "@/i18n";
import { cn } from "@/lib/utils";

interface LocaleToggleProps {
  className?: string;
  onAfterToggle?: () => void;
}

export function LocaleToggle({ className, onAfterToggle }: LocaleToggleProps) {
  const { i18n, t } = useTranslation();
  const currentLocale = i18n.resolvedLanguage === "en" ? "en" : "ko";
  const nextLocale = currentLocale === "ko" ? "en" : "ko";
  const currentLanguage = t(
    currentLocale === "ko" ? "account.languageKorean" : "account.languageEnglish",
  );
  const actionLabel = t(
    nextLocale === "ko" ? "account.switchToKorean" : "account.switchToEnglish",
  );

  async function handleClick() {
    await changeLocale(nextLocale);
    onAfterToggle?.();
  }

  return (
    <button
      type="button"
      className={cn(
        "flex w-full items-start gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-accent/60",
        className,
      )}
      onClick={() => void handleClick()}
      aria-label={actionLabel}
    >
      <span className="mt-0.5 rounded-lg border border-border bg-background/70 p-2 text-muted-foreground">
        <Languages className="size-4" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-medium text-foreground">{t("account.language")}</span>
        <span className="block text-xs text-muted-foreground">
          {t("account.currentLanguage", { language: currentLanguage })}
        </span>
      </span>
      <span className="self-center text-xs font-medium text-muted-foreground">{actionLabel}</span>
    </button>
  );
}
