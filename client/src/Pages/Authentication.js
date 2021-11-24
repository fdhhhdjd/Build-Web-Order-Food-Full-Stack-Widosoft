import React, { useState } from "react";
import { Login, Register, Contents } from "../Imports/Index";
import { AuthenticationStyle } from "../Styles/StylePages/AuthenticationStyle";
const Authentication = () => {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  return (
    <>
      <AuthenticationStyle>
        <div className={`container1 ${flag ? "sign-up-mode" : ""}`}>
          <div className="forms-container">
            <div className="signin-signup">
              <Login handleFlag={handleFlag} flag={flag} />
              <Register />
            </div>
            <Contents handleFlag={handleFlag} flag={flag} />
          </div>
        </div>
      </AuthenticationStyle>
    </>
  );
};

export default Authentication;
