import { useState } from "react"

const Skills = () => {

    const [ state, setState ] = useState("")

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
