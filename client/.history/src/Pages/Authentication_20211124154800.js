import React from "react";
import { Login, Register } from "../Imports/Index";
const Authentication = () => {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  return (
    <>
      <div className={`container1 ${flag ? "sign-up-mode" : ""}`}>
        <div className="forms-container">
          <div className="signin-signup">
            <Login handleFlag={handleFlag} flag={flag} />
            <Register />
          </div>
          <Contents handleFlag={handleFlag} flag={flag} />
        </div>
      </div>
    </>
  );
};

export default Authentication;
