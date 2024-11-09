import { useState } from "react";
import "./password.css";
import validator from "validator";

function Password() {
  const [errorMsg, setErrorMsg] = useState("");

  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMsg("Password is Strong");
    } else {
      setErrorMsg("Password isn't strong!");
    }
  };

  return (
    <>
      <label htmlFor="">set a password</label>
      <input type="password" onChange={(e) => validate(e.target.value)} />
      {errorMsg && <span>{errorMsg}</span>}
    </>
  );
}

export default Password;
