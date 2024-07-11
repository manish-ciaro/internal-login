import { styled } from "@mui/material";
import { Box } from "@mui/system";
import { fontSize, fontWeight, color } from "../../Style/GlobalStyle";

export const TemplateStyle = styled(Box)({
  "& .main-img": {
    height: "100vh",
    width: "100%",
    "@media(max-width: 599px)": {
      display: "none",
    },
  },
  "& .main-container": {
    backgroundColor: color.neutralGrey,
    height: "400px",
    width: "400px",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    flexDirection: "column",
  },
  "& .welcome-text": {
    fontSize: fontSize.h3,
    fontWeight: fontWeight.semibold,
    color: color.darkCyan,
  },
  "& .input-container": {
    padding: "5%",
    width: "80%",
    margin: "auto",
  },
  "& .input-style": {
    marginTop: "5%",
    width: "100%",
    height: "30px",
    borderRadius: "6px",
    border: "0.5px solid grey",
    // margin:'auto',
    display: "flex",
  },
  "& .login-heading": {
    fontSize: fontSize.h5,
    fontWeight: fontWeight.semibold,
  },
  "& .label-text": {
    fontSize: fontSize.h4,
    fontWeight: fontWeight.semibold,
  },
  "& .continue-btn": {
    backgroundColor: color.darkGreen,
    color: color.secondary,
    textTransform: "none",
    width: "100%",
    marginTop: "5%",
    display: "flex",
  },
  "& .continue-btn:hover ": {
    backgroundColor: color.darkCyan,
  },
});
