import React from "react";
import logo from "../../assest/logo.png";
import { Box, Button, Typography } from "@mui/material";
import { TemplateStyle } from "./tamplateStyle";
import { useNavigate } from "react-router-dom";

export default function Template(props) {
    const {label, path} = props
    const navigate = useNavigate()
  return (
    <TemplateStyle>
      <Box style={{ width: "100%", height: "100vh", backgroundColor: '#EDFFFF', display: 'flex' }}>
        <Box className="main-container">
          <Box>
            <img src={logo} alt="logo" loading="lazy" />
          </Box>
          <Box>
            <Typography className="login-heading">Login</Typography>
          </Box>
          <Box style={{ width: "100%" }}>
            <Box className="input-container">
              <label htmlFor="email" className="label-text">{label}
              </label>
              <input
                name="email"
                // placeholder="enter your email.."
                className="input-style"
              />
              <Button
                className="continue-btn"
                  onClick={() => {navigate(path)}}
              >
                Continue
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </TemplateStyle>
  );
}
