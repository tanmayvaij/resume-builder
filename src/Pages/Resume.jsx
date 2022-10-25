import { GlobalStates } from "../Context"

const Resume = () => {

    const { bio } = GlobalStates()

    return (
        <div id="Resume" className="m-14">
            <div className="">
                <h1 className="font-medium text-3xl">{bio.candidateName}</h1>
                <h3>{bio.currentStatus}</h3>
            </div>
            <div className="">
                <div>
                    <h4>{bio.email}</h4>
                    <h4>{bio.number}</h4>
                </div>
                <div>
                    <h4>{bio.address}</h4>
                    <h4>{bio.website}</h4>
                </div>
            </div>
            <div className="">
                <h2 className="text-xl font-medium">Summary</h2>
                <p className="">{bio.summary}</p> 
            </div>
        </div>
    )
}

export default Resume
