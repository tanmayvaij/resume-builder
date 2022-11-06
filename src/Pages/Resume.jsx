import { GlobalStates } from "../Context"

const Resume = () => {

    const { bio } = GlobalStates()

    return (
        <div id="Resume" className="flex items-center justify-center">
            <div className="border w-[50rem] p-14">
                <div className="">
                    <h1 className="text-3xl">{bio.candidateName}</h1>
                    <h3>{bio.currentStatus}</h3>
                </div>
                <div className="w-[40rem] mt-4">
                    <div className="flex justify-between">
                        <h4>{bio.email}</h4>
                        <h4>{bio.number}</h4>
                    </div>
                    <div className="flex justify-between">
                        <h4>{bio.address}</h4>
                        <h4>{bio.website}</h4>
                    </div>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-medium">Summary</h2>
                    <p className="">{bio.summary}</p>
                </div>
                <div className="mt-4">
                    <h2 className="text-xl font-medium">Education</h2>
                    <div>
                        {
                            bio.education.map((val)=> {
                                return (
                                    <div>
                                        <h4>{val.institute}</h4>
                                        <p>{val.degree}</p>
                                        <p>
                                            <span>{val.startYear}</span>
                                            - 
                                            <span>{val.endYear}</span> 
                                        </p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Resume
