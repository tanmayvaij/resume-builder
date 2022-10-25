import Candidate from "../Components/Candidate"
import Summary from "../Components/Summary"
import Contact from "../Components/Contact"
import Education from "../Components/Education"
import Skills from "../Components/Skills"

const Builder = () => {
    return (
        <div id="Builder">
            <Candidate/>
            <Summary/>
            <Contact/>
            <Education/>
            <Skills/>
        </div>
    )
}

export default Builder
