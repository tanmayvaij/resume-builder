import { useState } from "react"
import { GlobalStates } from "../Context"

const Skills = () => {

    const [ state, setState ] = useState("")

    const { bio } = GlobalStates()

    return (
        <div id="Skills">
            <div>
                <input 
                    value={state} 
                    type="text" 
                    name="skills"
                    placeholder="Your Skill"
                    onChange={(e)=>setState(e.target.value)}
                    className="border border-black"
                />
            </div>
        </div>
    )
}

export default Skills
