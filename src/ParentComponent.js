import React from "react";
import { GoogleLogin } from "@react-oauth/google";

const ParentComponent = () => {
  return (
    <div>
      <GoogleLogin
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      ;
    </div>
  );
};

export default ParentComponent;
