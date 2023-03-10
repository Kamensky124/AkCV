import './App.css'
import {AboutMe} from "./components/AboutMe/AboutMe";
import {ContactMe} from "./components/ContactMe/ContactMe";
import {Portfolio} from "./components/Portfolio/Portfolio";
import {Resume} from "./components/Resume/Resume";
import {Skills} from "./components/Skills/Skills";
import {Footer} from "./components/Footer/Footer";
import {Header} from "./components/Header/Header";
import JS from "./assets/img/imgSkills/JS.svg"
function App() {

    return (
        <div className="App">

            <Header/>
                    <AboutMe/>
                    <Skills/>
                    <Portfolio/>
                    <Resume/>
                    <ContactMe/>
                    <Footer/>
        </div>
    )
}

export default App
