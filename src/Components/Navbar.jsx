import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div id="Navbar">
            <NavLink to="/">Builder</NavLink>
            <NavLink to="/resume">Resume</NavLink>
        </div>
    )
}

export default Navbar
