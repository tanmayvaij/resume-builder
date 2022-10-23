import { useState } from "react"

const Contact = () => {

    const [ state, setState ] = useState({
        number: "", address: "", email: "", website: ""
    })

    return (
        <div id="Contact">

            <div>
                <input 
                    value={state.email} 
                    type="email" 
                    name="email"
                    placeholder="Your Email Address"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={state.number} 
                    type="tel" 
                    name="number" 
                    placeholder="Mobile Number"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={state.address} 
                    type="text" 
                    name="address"
                    placeholder="Your Address"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

            <div>
                <input 
                    value={state.website} 
                    type="text" 
                    name="website" 
                    placeholder="Personal Website/ Blog"
                    onChange={(e)=>setState({ ...state, [e.target.name]: e.target.value })}
                    className="border border-black"
                />
            </div>

        </div>
    )
}

export default Contact
