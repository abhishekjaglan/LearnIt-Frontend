import { BrowserRouter, Route, Routes } from "react-router-dom"

import LandingPage from "./pages/LandingPage"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Home from "./pages/Home"
import UserInfo from "./pages/UserInfo"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/userinfo" element={<UserInfo/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
