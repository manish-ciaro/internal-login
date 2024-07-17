import React from "react";
import Template from "../../component/tamplate/Template";

export default function ForgotPassword() {
  return (
    <>
      <Template label={"Email"} path={"/new_password"} heading='Forgot Password' />
    </>
  );
}
