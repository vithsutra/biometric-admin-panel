export const storeToken = (token: string) => {
  localStorage.setItem("authToken", token);
};
