import { useState } from "react"

const Summary = () => {

    const [ summary, setSummary ] = useState("")

    return (
        <div id="About">
            <textarea 
                name="summary" 
                cols="30" 
                rows="10"
                placeholder="Your Summary"
                value={summary}
                onChange={(e)=>setSummary(e.target.value)}
                className="border border-black"
            ></textarea>
        </div>
    )
}

export default Summary
