import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    render = () => {
        return (
            <div className="container">
                <div className="frame">
                    <div className="header">
                        <button className="header-btn">Add</button>
                        <h1 className="header-title">Todo List</h1>
                        <button className="header-btn main-red-color">Clear</button>
                    </div>
                </div>
            </div>
        ); 
    }
}

export default Home;
