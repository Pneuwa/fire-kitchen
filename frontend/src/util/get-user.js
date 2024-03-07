export function GetUser() {
  const session = sessionStorage.getItem("session");
  if (!session) {
    return null;
  }
  return JSON.parse(session).user;
}
