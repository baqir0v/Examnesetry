import {Route, Routes} from "react-router-dom"
import "./reset.scss"
import HomePage from "./pages/Home"
import SignupForm from "./pages/AddPage"
import Wishlist from "./pages/Wishlist"
import Detail from "./pages/Detail"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add" element={<SignupForm/>}/>
        <Route path="/wishlist" element={<Wishlist/>}/>
        <Route path="/detail/:id" element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default App
