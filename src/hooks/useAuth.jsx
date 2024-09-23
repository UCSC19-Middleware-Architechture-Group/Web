import { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const isRun = useRef(false);
  const [keycloak, setKeycloak] = useState(null);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    if (isRun.current) return;

    isRun.current = true;
    const kc = new Keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
    });

    kc.init({ onLoad: "check-sso", checkLoginIframe: false })
      .then((auth) => {
        setKeycloak(kc);
        setAuthenticated(auth);
      })
      .catch(() => {
        console.error("Keycloak initialization failed");
        isRun.current = false;
      });
  }, []);

  const login = () => {
    keycloak && keycloak.login();
    isRun.current = true;
  };
  const logout = () => {
    keycloak && keycloak.logout();
    isRun.current = false;
  };
  const viewProfile = () => keycloak && keycloak.accountManagement();
  const editProfile = () => keycloak && keycloak.accountManagement();

  return {
    keycloak,
    authenticated,
    login,
    logout,
    viewProfile,
    editProfile,
  };
};

export default useAuth;
