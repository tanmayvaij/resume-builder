import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Builder from "./Pages/Builder"
import Resume from "./Pages/Resume"

const App = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route exact path="/" element={<Builder/>} />
                <Route exact path="/resume" element={<Resume/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
