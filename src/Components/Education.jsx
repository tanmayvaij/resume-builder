import { useState } from "react"
import { GlobalStates } from "../Context"

const Education = () => {

    const { bio } = GlobalStates()

    const [ state, setState ] = useState({
        institute: "", 
        degree: "", 
        specialization: "",
        startYear: "",
        endYear: "" 
    })

    return(
        <div id="Education">
            
            <div>
                <input 
                    value={state.institute} 
                    type="text" 
                    name="institute"
                    placeholder="Institute Name"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={state.degree} 
                    type="text" 
                    name="degree"
                    placeholder="Degree"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={state.specialization} 
                    type="text" 
                    name="specialization"
                    placeholder="Your Specialization"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={state.startYear} 
                    type="number" 
                    name="startYear"
                    placeholder="start year"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={state.endYear} 
                    type="number" 
                    name="endYear"
                    placeholder="end year"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

        </div>
    )
}

export default Education
