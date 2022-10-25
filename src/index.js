import ReactDOM from "react-dom/client"
import App from "./App"
import MainContext from "./Context"
import "./index.css"

ReactDOM
    .createRoot(document.getElementById("root"))
    .render(
        <MainContext>
            <App/>
        </MainContext>
    )
