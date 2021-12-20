import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Login, Register, Contents } from "../Imports/Index";
import { AuthenticationStyle } from "../Styles/StylePages/AuthenticationStyle";
const Authentication = () => {
  const [flag, setFlag] = useState(false);
  const handleFlag = () => {
    setFlag(!flag);
  };
  const { AdminRegister } = useSelector((state) => state.authAdmin);
  console.log(AdminRegister, "AdminRegister");
  useEffect(() => {
    if (AdminRegister.status === 200) {
      setFlag(true);
      toast.success(AdminRegister.message);
    } else if (AdminRegister.status === 401) {
      toast.error(AdminRegister.message);
    }
  }, [AdminRegister]);
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
