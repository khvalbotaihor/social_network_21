import React from 'react';
import "./App.css"
import Header from "./components/Header";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <nav className="nav">
                <div>Profile</div>
                <div>Messages</div>
                <div>News</div>
                <div>Music</div>
                <div>Settings</div>
            </nav>
            <div className="content">
                <div>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT-_mIfmXfxZydIr5sSyiVu6p_LMiG6L8ZDw&usqp=CAU"/>
                </div>
                <div>
                    ava+desc
                </div>
                <div>
                    my posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div>post 1</div>
                        <div>post 2</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
