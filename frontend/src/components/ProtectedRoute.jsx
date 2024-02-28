import React from "react";

import { RiErrorWarningFill } from "react-icons/ri";
export const LoginProtectedRoute = ({ isAuthenticate, children }) => {
  if (!isAuthenticate) {
    return <div>you have to login must</div>;
  }

  return <div>{children}</div>;
};

export const AdminProtectedRoute = ({ user, isAuthenticate, children }) => {
    
  const isAdmin = isAuthenticate && user.user.role === "admin";
 
  if (!isAdmin) {
    return <div className="min-h-[100vh] flex justify-center items-center">
      <div className="main-content-container h-[600px]  w-[600px]">
        <h1 className="heading text-center m-6 text-3xl ">Dashboard Can Access Only Admin</h1>
        <div className="div flex justify-center">
        <RiErrorWarningFill className="text-8xl text-red" />
        </div>
        
      </div>
    </div>;
  }
  return <div className="admin-route">{children}</div>;
};
