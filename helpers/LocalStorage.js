export function getToken() {
  return localStorage.getItem("token") ? localStorage.getItem("token") : undefined;
}

export function setToken(token) {
  return localStorage.setItem("token", token);
}

export function getUser() {
  return localStorage.getItem("user") ? localStorage.getItem("user") : undefined;
}

export function setUser(user) {
  return localStorage.setItem("user", user);
}

export function getJabatan() {
  return localStorage.getItem("jabatan") ? localStorage.getItem("jabatan") : undefined;
}

export function setJabatan(jabatan) {
  return localStorage.setItem("jabatan", jabatan);
}

export function getAcl() {
  return localStorage.getItem("acl") ? JSON.parse(localStorage.getItem("acl")) : undefined;
}

export function setAcl(acl) {
  return localStorage.setItem("acl", JSON.stringify(acl));
}

export function clearStorage() {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  localStorage.removeItem("jabatan");
  localStorage.removeItem("acl");
}
