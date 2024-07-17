import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './screen/login/Login';
import Dashboard from './screen/dashboard/Dashboard';
import Password from './screen/password/Password';
import VerifyOtp from './screen/verifyOtp/VerifyOtp';
import ForgotPassword from './screen/forgotPassword/ForgotPassword';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' Component={Login}/>
    <Route path='/password' Component={Password}/>  
    <Route path='/verify_otp' Component={VerifyOtp}/>  
    <Route path='/dashboard' Component={Dashboard} />
    <Route path='/forgot_password' Component={ForgotPassword} />
   </Routes>
   </BrowserRouter>
  );
}
export default App;
