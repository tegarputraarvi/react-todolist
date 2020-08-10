import React, { Component } from 'react';
import './home.css';

class Home extends Component {

    render = () => {
        return (
            <div className="container">
                <div className="frame">
                    <section className="header">
                        <button className="header-btn">Add</button>
                        <h1 className="header-title">Todo List</h1>
                        <button className="header-btn main-red-color">Clear</button>
                    </section>
                    
                    <section className="add">
                        <form className="add-form">
                            <input type="text" className="add-input" />
                            <button className="add-btn">Add</button>
                        </form>
                    </section>
                </div>
            </div>
        ); 
    }
}

export default Home;
