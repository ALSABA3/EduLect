// useAuth.js
import { useState } from "react";
import Cookies from "js-cookie";

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Cookies.get("isLoggedIn") === "true"
  );
  const [accessToken, setAccessToken] = useState(
    Cookies.get("accessToken") || ""
  );

  const login = (token) => {
    Cookies.set("isLoggedIn", "true", { expires: 7 }); // Set isLoggedIn cookie
    Cookies.set("accessToken", token, { expires: 7 }); // Set accessToken cookie
    setIsLoggedIn(true);
    setAccessToken(token);
  };

  const logout = () => {
    Cookies.remove("isLoggedIn"); // Remove isLoggedIn cookie
    Cookies.remove("accessToken"); // Remove accessToken cookie
    setIsLoggedIn(false);
    setAccessToken("");
  };

  return { isLoggedIn, accessToken, login, logout };
};

export default useAuth;
