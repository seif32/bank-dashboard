export function setCookie(name: string, value: string, days: number): void {
  const todayDate = new Date();
  todayDate.setDate(todayDate.getDate() + days);
  document.cookie = `${name}=${value};expires=${todayDate.toUTCString()};path=/`;
}

export function getCookie(name: string): string | null {
  if (document.cookie.trim() === "") return null;

  const foundCookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith(name + "="));

  if (!foundCookie) return null;

  return foundCookie.trim().split("=")[1];
}
