import { GlobalStates } from "../Context"

const Resume = () => {

    const { bio } = GlobalStates()

    return (
        <div id="Resume" className="">

            <div>
                <h1>Tanmay Vaij</h1>
                <p>Pune/Pimpri-Chinchwad Area</p>
            </div>

            <div>

                <div>
                    <span>tanmayvaij22@gmail.com</span>
                    <span>8408882079</span>
                </div>

                <div>
                    <span>linkedin.com/in/tanmayvaij</span>
                    <span>https://tanmayvaij.github.io</span>
                </div>

            </div>

            <div>
                <h2>Summary</h2>
                <p>
                    Strong in design and integration with intuitive problem-solving skills. 
                    Proficient in JAVA, PYTHON, JAVASCRIPT, and MONGODB. Passionate about 
                    implementing and launching new projects. Ability to translate business 
                    requirements into technical solutions. Looking to start the career as Full 
                    Stack Intern with a reputed firm driven by technology.
                </p>
            </div>

            <div>
                <h2>Education</h2>
                <div>
                    <h3>DY Patil International University</h3>
                    <p>Bachelor of Computer Application, Mobile Application and Web Technology</p>
                    <p>Oct 2021 - 2024</p>
                </div>
            </div>

            <div>
                <h2>Skills</h2>
                <ul>
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
    )
}

export default Resume
