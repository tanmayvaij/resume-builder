import Summary from "./Components/Summary"
import Candidate from "./Components/Candidate"
import Contact from "./Components/Contact"
import Education from "./Components/Education"
import Skills from "./Components/Skills"

const App = () => {
    return (
        <div id="App">
            <Candidate/>
            <Summary/>
            <Contact/>
            <Education/>
            <Skills/>
        </div>
    )
}

export default App
