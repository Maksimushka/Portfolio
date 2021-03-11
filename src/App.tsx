import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Skills from './components/skills/Skills';
import Projects from './components/my-projects/Projects';
import Variable from './components/varible/Varible';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <Variable />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
