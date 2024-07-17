import React, { useEffect, useState } from "react";
import Template from "../../component/tamplate/Template";
import regExp from "../../utils/RegExp"

export default function Login() {
  const [email, setEmail] = useState("");
  const [validMail, setvalidMail] =  useState(false);
  useEffect(() => {
    mailValidation();
  }, [email]);

  const mailValidation = () => {
    if (email.match(regExp.mailRegEx)) {
      setvalidMail(true)
    }
    else if(email === ""){
      setvalidMail(null)
    } else {
      setvalidMail(false)
    }
  };

  const emailChange = (event) => {
    setEmail(event.target.value);
    mailValidation()
  };
  return (
    <Template
      label={"Enter your email address"}
      path={"/password"}
      value={email}
      changeHandler={emailChange}
      flag= {validMail}
    />
  );
}
