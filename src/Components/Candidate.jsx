import { GlobalStates } from "../Context"

const Candidate = () => {

    const { bio, getInput } = GlobalStates()

    return (
        <div id="Candidate">

            <div>
                <input 
                    value={bio.candidateName} 
                    type="text" 
                    name="candidateName"
                    placeholder="Your Full Name"
                    onChange={(e)=>getInput(e)}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={bio.currentStatus} 
                    type="text" 
                    name="currentStatus" 
                    placeholder="Current Status"
                    onChange={(e)=>getInput(e)}
                    className="border border-black"
                />
            </div>

        </div>
    )
}

export default Candidate
