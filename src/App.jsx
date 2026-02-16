import React from "react";
import Home from "./pages/Home"
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import SearchBar from "./components/common/SearchBar";
import EquipmentDetails from "./components/equipment/EquipmentDetails";
import EquipmentCard from "./components/equipment/EquipmentCard";
import EquipmentList from "./components/equipment/EquipmentList";
import RequestForm from "./components/request/RequestForm";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import AddEquipment from "./pages/AddEquipment";
import { Routes, Route, Navigate} from "react-router-dom";

function App() {
  return (
    <>
    {/* <Navbar/> */}
    {/* <SearchBar/> */}
     <Home/>
     {/* <About/> */}
     {/* <NotFound/> */}
     {/* <LoginPage/> */}
     {/* <RegisterPage/> */}
     {/* <Footer/> */}
     {/* <EquipmentDetails/> */}
     {/* <EquipmentCard/> */}
     {/* <EquipmentList/> */}
     {/* <RequestForm/> */}
     {/* <Dashboard/> */}
     {/* <AdminDashboard/> */}
     {/* <AddEquipment/> */}







    <Routes>
        <Route path="Login" element={<LoginPage />}/>
        <Route path="Home" element={<Home />} />
        <Route path="RequestForm" element={<RequestForm />} />
        <Route path="EquipmentDetails" element={<EquipmentDetails />} />
        <Route path="Register" element={<RegisterPage />}/>
        <Route path="About" element={<About />}/>
        <Route path="equipmentlist" element={<EquipmentList />}/>
        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        
        
        
        <Route path="*" element={<NotFound />} />
    </Routes>


    </>

  );
}

export default App;
