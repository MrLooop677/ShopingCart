export const useAuth = () => {
  return {
    isLogged: localStorage.getItem("userToken") ? true : false,
  };
};
