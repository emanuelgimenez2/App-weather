import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.css";

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="container-profile">
        <img className="image-profile" src={user.picture} alt={user.name} />
        <h2 className="name">{user.name}</h2>
        <p className="email">Email: {user.email}</p>
      </div>
    )
  );
};
