import { parseCookies, setCookie } from 'nookies';

export function getClientLanguageCookie() {
  const cookies = parseCookies();
  return cookies.locale || 'en'; // default to 'en' if not found
}
export const setLanguageCookie = (locale: string) => {
  setCookie(null, 'locale', locale, {
    maxAge: 30 * 24 * 60 * 60,
    path: '/',
  });
};
