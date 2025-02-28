import { cookies } from "next/headers";

export async function getLanguageServerCookie() {
  const cookieStore = await cookies();
  const locale = cookieStore.get("locale");

  return locale?.value || "en";
}
