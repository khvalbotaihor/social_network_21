import React from 'react';
import "./App.css"

const App = () => {
    return (
        <div className="app-wrapper">
            <header className="header">
                <img src="https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Brisbane_Roar_FC_logo.svg/1200px-Brisbane_Roar_FC_logo.svg.png" />
            </header>
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
