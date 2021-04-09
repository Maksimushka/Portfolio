import React from 'react';
import './App.css';
import Header from './components/base-components/header/Header';
import Main from './components/main-components/main/Main';
import Skills from './components/main-components/skills/Skills';
import Projects from './components/main-components/my-projects/Projects';
import Contacts from './components/main-components/Contact/Contacts';
import Footer from './components/base-components/footer/Footer';
import Progress from './components/main-components/progress/Progress';
import AboutMe from './components/main-components/aboutMe/AboutMe';

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe />
            <Skills/>
            <Progress/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
