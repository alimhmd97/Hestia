import { getLanguageServerCookie } from "@/lib/cookies/languagesCookiesServer";
import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  const locale = await getLanguageServerCookie();

  return {
    locale,
    messages: (await import(`../lib/locales/${locale}/translations.json`))
      .default,
  };
});
