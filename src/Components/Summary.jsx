import { GlobalStates } from "../Context"

const Summary = () => {

    const { bio, getInput } = GlobalStates()

    return (
        <div id="About">
            <textarea 
                name="summary" 
                cols="30" 
                rows="10"
                placeholder="Your Summary"
                value={bio.summary}
                onChange={(e)=>getInput(e)}
                className="border border-black"
            ></textarea>
        </div>
    )
}

export default Summary
