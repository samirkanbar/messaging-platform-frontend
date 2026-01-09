import { Routes, Route, Outlet } from "react-router-dom"
import Home from "./pages/Home"
import Hiw from "./pages/hiw"
import About from "./pages/About"
import FAQ from "./pages/FAQ"
import Account from "./pages/account/Account"
import LogIn from "./pages/account/LogIn"
import Navbar from "./components/Navbar/Navbar"
import Footer from "./components/Footer/Footer"
import Dashboard from "./pages/Dashboard"

const PublicLayout = () => (
  <div className="flex flex-col min-h-svh">
    <Navbar />
    <div className="flex-grow">
      <Outlet />
    </div>
    <Footer />
  </div>
)

function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hiw" element={<Hiw />} />
        <Route path="/About" element={<About />} />
        <Route path="/FAQ" element={<FAQ />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/LogIn" element={<LogIn />} />
        <Route path="*" element={<h1>404: PATH NOT FOUND</h1>} />
      </Route>

      <Route path="/Dashboard" element={<Dashboard />} />
    </Routes>
  )
}

export default App;