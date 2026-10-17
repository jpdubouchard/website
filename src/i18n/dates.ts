import type { Lang } from './ui';

const locales: Record<Lang, string> = { en: 'en-CA', fr: 'fr-CA' };

/** "2022-07" -> "July 2022" / "juillet 2022" */
export function monthYear(value: string, lang: Lang): string {
  const [year, month] = value.split('-').map(Number);
  return new Intl.DateTimeFormat(locales[lang], { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
    new Date(Date.UTC(year, month - 1, 1)),
  );
}

/** A start and optional end, as months ("2022-07") or years ("2015"), joined with an en dash */
export function dateRange(start: string, end: string | undefined, lang: Lang, present: string): string {
  const fmt = (v: string) => (v.includes('-') ? monthYear(v, lang) : v);
  return `${fmt(start)} – ${end ? fmt(end) : present}`;
}
