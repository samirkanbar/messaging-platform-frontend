import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Hiw from "./pages/hiw"
import About from "./pages/About"
import FAQ from "./pages/FAQ"
import Account from "./pages/account/Account"
// import SignUp from "./pages/`account/SignUp"
import LogIn from "./pages/account/LogIn"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      
      <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hiw" element={<Hiw />} />
            <Route path="/About" element={<About />} />
            <Route path="/FAQ" element={<FAQ />} />
            <Route path="/account" element={<Account />} />
            <Route path="/account/LogIn" element={<LogIn />} />
            <Route path="*" element={<h1>404: PATH NOT FOUND</h1>} />
          </Routes>
        </div>
      <Footer />

    </div>
  )
}

export default App;