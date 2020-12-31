import token from "./token";

const checkAuth = (authenticateUser) => {
  if (authenticateUser) {
    return token;
  }
  return null;
};

export default checkAuth;
