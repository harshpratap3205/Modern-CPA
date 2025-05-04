import { Route, Routes } from "react-router-dom"


import Navbar from'./Component/Navbar/Navbar'
import Home from "./Component/Home/Home"
import Login from "./Component/auth/Login"
import Signup from "./Component/auth/Signup"
import AboutUs from "./Component/AboutUs/AboutUs"
import KnowUs from "./Component/knowus/KnowUs"
function App() {


  return (
    <>
    
      
      <Routes>
    <Route path={'/'} element={<div className=''>   <Navbar/>
      <Home/>
    </div>}/>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/signup'} element={<Signup/>}/>
    <Route path={'/aboutus'} element={<AboutUs/>}/>
    <Route path={'/knowus'} element={<KnowUs/>}/>
    
    </Routes>
    
  
   
   
    </>
  )
}

export default App
