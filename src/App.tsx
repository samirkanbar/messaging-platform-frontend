import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Hiw from "./pages/hiw"
import About from "./pages/about/About"
import FAQ from "./pages/FAQ"
import Account from "./pages/account/Account"
import SignUp from "./pages/account/SignUp"
import LogIn from "./pages/account/LogIn"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="flex flex-col min-h-svh">
      
      <Navbar />
      <main className="flex flex-grow items-center justify-center"> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hiw" element={<Hiw />} />
          <Route path="/about" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/LogIn" element={<LogIn />} />
          <Route path="/account/SignUp" element={<SignUp />} />
        </Routes>
      </main>
      
    </div>
  )
}

export default App;