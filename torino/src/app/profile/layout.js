import AuthProvider from "@/components/provider/AuthProvider";
import React from "react";

function ProfileLaypout({ children }) {
  return (
    <AuthProvider>
      <div>
        <p>ProfileLaypout</p>
      </div>
    </AuthProvider>
  );
}

export default ProfileLaypout;
