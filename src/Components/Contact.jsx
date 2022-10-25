import { GlobalStates } from "../Context"

const Contact = () => {

    const { bio, getInput } = GlobalStates()

    return (
        <div id="Contact">

            <div>
                <input 
                    value={bio.email} 
                    type="email" 
                    name="email"
                    placeholder="Your Email Address"
                    onChange={(e)=>getInput(e)}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={bio.number} 
                    type="tel" 
                    name="number" 
                    placeholder="Mobile Number"
                    onChange={(e)=>getInput(e)}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={bio.address} 
                    type="text" 
                    name="address"
                    placeholder="Your Address"
                    onChange={(e)=>getInput(e)}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={bio.website} 
                    type="text" 
                    name="website" 
                    placeholder="Personal Website/ Blog"
                    onChange={(e)=>getInput(e)}
                    className="border border-black"
                />
            </div>

        </div>
    )
}

export default Contact
