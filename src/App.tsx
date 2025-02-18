import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./pages/landingpage"
import Home from "./pages/home"
import SignUp from "./pages/signup"
import SignIn from "./pages/signin"
import UserInfo from "./pages/userinfo"

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
