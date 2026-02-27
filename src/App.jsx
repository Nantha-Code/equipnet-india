import { Route, Routes } from "react-router-dom";
import Faq from "./components/common/footer/Faq";
import Grievances from "./components/common/footer/Grievances";
import PrivacyPolicy from "./components/common/footer/PrivacyPolicy";
import TermsOfUse from "./components/common/footer/TermsOfUse";
import SearchBar from "./components/common/SearchBar";
import EquipmentCard from "./components/equipment/EquipmentCard";
import EquipmentDetails from "./components/equipment/EquipmentDetails";
import EquipmentList from "./components/equipment/EquipmentList";
import About from "./pages/About";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
import NotFound from "./pages/NotFound";
import RegisterPage from "./pages/RegisterPage";
import UserDashboard from "./pages/UserDashboard";


function App() {
  return (
    <>
     {/* <Navbar/> */}
     {/* <SearchBar/> */}
     {/* <Home /> */}
     {/* <About/> */}
     {/* <NotFound/> */}
     {/* <LoginPage/> */}
     {/* <RegisterPage/> */}
     {/* <EquipmentDetails/> */}
     {/* <EquipmentCard/> */}
     {/* <EquipmentList/> */}
     {/* <Dashboard/> */}
     {/* <AdminRequests /> */}
     {/* <UserDashboard /> */}
     {/* <RequestStatus /> */}
     {/* <RequestPage/> */}
    <AdminDashboard />
      

  

    <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="login" element={<LoginPage />}/>
        <Route path="register" element={<RegisterPage />}/>
        <Route path="about" element={<About />}/>
        <Route path="equipmentlist" element={<EquipmentList />}/>
        <Route path="equipment/:id" element={<EquipmentDetails />} />
        <Route path="equipmentcard" element={<EquipmentCard />}/>
        <Route path="grievances" element={<Grievances />} />
        <Route path="privacy-policy" element={<PrivacyPolicy />} />
        <Route path="terms-of-use" element={<TermsOfUse />} />
        <Route path="faq" element={<Faq />} />
        <Route path="search" element={<SearchBar />} />
        <Route path="user-dashboard" element={<UserDashboard />}/>
        

        {/* <Route path="" element={}/> */}
        {/* <Route path="" element={}/> */}
        
        
        
        <Route path="*" element={<NotFound />} />
    </Routes>
  


     {/* <Footer/> */}
    </>

  );
}

export default App;
