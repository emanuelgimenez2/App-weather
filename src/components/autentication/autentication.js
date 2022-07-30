import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Profile } from "../profile/Profile";
import { LogoutButton } from "../logout/Logout";
import { LoginButton } from "../login/Login";

export default function Autentication() {
  const { isAuthenticated } = useAuth0();
  return (
    <div>
      {isAuthenticated ? (
        <>
          <Profile />
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
}
