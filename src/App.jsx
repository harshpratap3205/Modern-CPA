import { Route, Routes } from "react-router-dom"


import Navbar from'./Component/Navbar/Navbar'
import Home from "./Component/Home/Home"
import Login from "./Component/auth/Login"
import Signup from "./Component/auth/Signup"
function App() {


  return (
    <>
    
      
      <Routes>
    <Route path={'/'} element={<div className=''>   <Navbar/>
      <Home/>
    </div>}/>
    <Route path={'/login'} element={<Login/>}/>
    <Route path={'/signup'} element={<Signup/>}/>
    
    </Routes>
    
  
   
   
    </>
  )
}

export default App
