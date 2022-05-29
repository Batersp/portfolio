import React from 'react';
import './App.css';
import {Header} from "./header/Header";
import {Main} from "./main/Main";
import {Skills} from "./skills/Skills";
import {Projects} from "./projects/Projects";
import {DistantWork} from "./distant-work/Distant-work";
import {Contacts} from "./сontacts/Contacts";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <DistantWork/>
            <Contacts/>
        </div>
    );
}

export default App;
