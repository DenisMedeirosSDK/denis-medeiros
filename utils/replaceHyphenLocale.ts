import { Locale } from "@/i18n.config";

export function replaceHyphenLocale(locale: Locale): string {
  return locale.replace("-", "_");
}