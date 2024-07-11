import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './screen/login/Login';
import Dashboard from './screen/dashboard/Dashboard';
import Password from './screen/password/Password';
import VerifyOtp from './screen/verifyOtp/VerifyOtp';


function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' Component={Login}/>  
    <Route path='/password' Component={Password}/>  
    <Route path='/verify_otp' Component={VerifyOtp}/>  
    <Route path='/dashboard' Component={Dashboard} />  
   </Routes>
   </BrowserRouter>
  );
}

export default App;
