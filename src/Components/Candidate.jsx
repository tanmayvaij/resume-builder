import { useState } from "react"

const Candidate = () => {

    const [ state, setState ] = useState({
        candidateName: "", currentStatus: ""
    })

    return (
        <div id="Candidate">

            <div>
                <input 
                    value={state.candidateName} 
                    type="text" 
                    name="candidateName"
                    placeholder="Your Full Name"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={state.currentStatus} 
                    type="text" 
                    name="currentStatus" 
                    placeholder="Current Status"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

        </div>
    )
}

export default Candidate
