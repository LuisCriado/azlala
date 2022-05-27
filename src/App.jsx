import {Route,Routes} from "react-router-dom"
import Login from "./routes/Login";
import Home from "./routes/Home";
import Registrer from "./routes/Registrer";
import Navbar from "./componentes/Navbar";
import RequiereAut from "./componentes/RequiereAut";
import { UserContext } from "./context/UserProvider";
import { useContext } from "react";




const App = () => {

   const {user} = useContext(UserContext)
   if (user === false) {
     return <p>Loading . . .</p>
     
   }

  return (
    <>
    <Navbar/>
  <h1>APP</h1>
  
    <Routes>
      <Route path="/" element={<RequiereAut><Home/></RequiereAut>}/> 
      <Route path="/login" element={<Login/>}/> 
      <Route path="/register" element={<Registrer/>}/> 
    </Routes>
  </>
  );
};

export default App;
