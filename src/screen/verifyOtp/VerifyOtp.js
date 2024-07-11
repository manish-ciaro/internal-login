import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Box, Button } from "@mui/material";
import { OtpScreenStyle } from "./verifyOtpStyle";
import logo from "../../assest/logo.png";
import { useNavigate } from "react-router-dom";

export default function VerifyOtp() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  return (
    <>
      <OtpScreenStyle>
        <Box className="parent-container">
          <Box className="main-container">
            <Box>
              <img src={logo} alt="logo" loading="lazy" />
            </Box>
            <Box style={{ width: "100%" }}>
              <Box className="input-container">
                <label htmlFor="email" className="label-text">
                  Enter Your OTP
                </label>
                <OtpInput
                  inputStyle={OtpInputStyle}
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  renderSeparator={<span>-</span>}
                  renderInput={(props) => <input {...props} />}
                />
                <Button
                  className="continue-btn"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                >
                  Continue
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </OtpScreenStyle>
    </>
  );
}

const OtpInputStyle = {
  width: "100%",
  height: "30px",
  borderRadius: "6px",
  border: "0.5px solid grey",
  marginTop: "2%",
};
