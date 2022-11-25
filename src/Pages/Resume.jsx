import { GlobalStates } from "../Context"

const Resume = () => {

    const { bio } = GlobalStates()

    return (
        <div id="resumePage" className="flex m-5 items-center justify-center">

            <div>

                <div className="text-center">
                    <h1 className="text-medium text-3xl">Tanmay Vaij</h1>
                    <p className="text-sm mt-1">Pune/Pimpri-Chinchwad Area</p>
                </div>

                <div className="text-center text-sm font-medium my-4">

                    <div className="flex space-y-1 flex-col justify-between">
                        <span></span>
                        <span>tanmayvaij22@gmail.com</span>
                        <span>8408882079</span>
                    </div>

                    <div className="flex space-y-1 flex-col justify-between">
                        <span></span>
                        <span>linkedin.com/in/tanmayvaij</span>
                        <span>https://tanmayvaij.github.io</span>
                    </div>

                </div>

                <hr />

                <div className="my-4">
                    <h2 className="text-center my-3 font-bold text-xl">Summary</h2>
                    <p className="text-sm">
                        Strong in design and integration with intuitive problem-solving skills. 
                        Proficient in JAVA, PYTHON, JAVASCRIPT, and MONGODB. Passionate about 
                        implementing and launching new projects. Ability to translate business 
                        requirements into technical solutions. Looking to start the career as Full 
                        Stack Intern with a reputed firm driven by technology.
                    </p>
                </div>

                <hr />

                <div className="my-4">
                    <h2 className="text-center my-3 font-bold text-xl">Education</h2>
                    <div>
                        <h3 className="font-medium">DY Patil International University</h3>
                        <p className="font-light">Bachelor of Computer Application, Mobile Application and Web Technology</p>
                        <p>Oct 2021 - 2024</p>
                    </div>
                </div>

                <hr />

                <div className="my-4 text-center">
                    <h2 className="font-bold text-xl my-3">Skills</h2>
                    <ul className="text-sm ">
                        <li>Cascading Style Sheets (CSS)</li>
                        <li>MERN Stack</li>
                        <li>Python (Programming Language)</li>
                        <li>RDBMS</li>
                        <li>Java</li>
                        <li>Dart</li>
                        <li>Digital Marketing</li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Resume
