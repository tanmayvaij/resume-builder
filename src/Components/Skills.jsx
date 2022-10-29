import { useState } from "react"
import { GlobalStates } from "../Context"

const Skills = () => {

    const [ state, setState ] = useState("")

    const { bio: { skills }, bio, setBio } = GlobalStates()

    const addSkill = () => {
        setBio({ ...bio, skills: [...skills, state] })
        setState("")
    }

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
            <button onClick={addSkill}>Add</button>
        </div>
    )
}

export default Skills
