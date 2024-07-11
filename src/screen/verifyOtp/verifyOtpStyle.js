import { styled } from "@mui/material"
import { Box } from "@mui/system"
import {fontSize, fontWeight, color} from "../../Style/GlobalStyle"

export const OtpScreenStyle = styled(Box)({
'& .parent-container': {
    width: "100%",
    height: "100vh",
    backgroundColor: "#EDFFFF",
    display: "flex",
  },
  '& .main-container':{
    backgroundColor: color.neutralGrey,
    height: "400px",
    width: "400px",
    border: "1px solid black",
    display: "flex",
    alignItems: "center",
    margin: "auto",
    flexDirection: "column",
  },
  "& .label-text": {
    fontSize: fontSize.h4,
    fontWeight: fontWeight.semibold,
    marginBottom: '2%'
  },
'& .input-container':{
    width:'80%',
    padding: "5%",
    margin:'auto'
},
'& .input-style':{
    marginTop:'5%',
    width:'100%',
    height:'30px',
    borderRadius: '6px',
    border:'0.5px solid grey',
    display:'flex'
},
'& .login-heading':{
    fontSize:fontSize.h5,
    fontWeight: fontWeight.semibold,
},

'& .continue-btn':{
    backgroundColor: color.darkGreen,
    color:color.secondary,
    textTransform: 'none',
    width:'100%',
    marginTop: '5%'
},
'& .continue-btn:hover ':{
    backgroundColor:color.darkCyan,
}
  })