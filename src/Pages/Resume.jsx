import { GlobalStates } from "../Context"

const Resume = () => {

    const { bio } = GlobalStates()

    return (
        <div id="Resume">
            <div className="p-4 flex flex-col items-center justify-center">
                <h1 className="font-medium text-3xl">{bio.candidateName}</h1>
                <h3>{bio.currentStatus}</h3>
            </div>
            <div className="flex items-center justify-around">
                <div>
                    <h4>{bio.email}</h4>
                    <h4>{bio.number}</h4>
                </div>
                <div>
                    <h4>{bio.address}</h4>
                    <h4>{bio.website}</h4>
                </div>
            </div>
        </div>
    )
}

export default Resume
