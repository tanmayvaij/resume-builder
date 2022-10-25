import { useContext, createContext, useState } from "react"

const Context = createContext()

const MainContext = ({ children }) => {

    const [ bio, setBio ] = useState({
        candidateName: "", 
        currentStatus: "",
        summary: "",
        number: "", 
        address: "", 
        email: "", 
        website: "",
        education: [],
        skills: []
    })

    const getInput = (e) => {
        setBio({ ...bio, [e.target.name]: e.target.value })
    }

    return (
        <Context.Provider value={{ bio, setBio, getInput }}>
            { children }
        </Context.Provider>
    )
}

const GlobalStates = () => {
    return useContext(Context)
}

export default MainContext
export { GlobalStates }
