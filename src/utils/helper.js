export const isTokenAvailable = () => {
  return !!localStorage.getItem("token");
};
