import React from "react";
import Template from "../../component/tamplate/Template";
import { Box, Typography } from "@mui/material";

export default function Password() {
  return (
    <>
    <Box>
      <Template label={"Enter your password "} path={"/verify_otp"} name={'password'} />
    </Box>

    </>
  );
}
