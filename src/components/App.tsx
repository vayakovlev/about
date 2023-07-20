import React from 'react';
import './App.scss';
import {Header} from "./header/Header";

import "../styles/common.scss"
import {Main} from "./main/Main";
import {Experience} from "./experience/Experience";

function App() {
    return (
        <div className="application">
            <Header/>
            <div id="content">
                <Main/>
                <Experience/>
            </div>
        </div>
    );
}

export default App;