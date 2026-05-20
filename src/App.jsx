import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import { Home, About, Projects, Contact } from "./pages"
import MobileAppDetail from "./components/MobileAppDetail"
import KribbApp from "./pages/KribbApp"
import RecurrlyApp from "./pages/RecurrlyApp"
import GrocifyApp from "./pages/GrocifyApp"

const App = () => {
    return (
        <main className="bg-slate-300/20 h-full">
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/projects/kribb" element={<KribbApp />} />
                    <Route path="/projects/recurrly" element={<RecurrlyApp />} />
                    <Route path="/projects/grocify" element={<GrocifyApp />} />
                </Routes>
            </Router>
        </main>
    )
}

export default App