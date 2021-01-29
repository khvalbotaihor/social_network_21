import React from 'react';
import "./App.css"
import Header from "./components/Header";

const App = () => {
    return (
        <div className="app-wrapper">
           <Header />
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>other</div>
            </nav>
            <div className="content">Main content</div>
        </div>
    );
}

export default App;
