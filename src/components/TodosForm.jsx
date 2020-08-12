import React, { useState } from 'react';
import PropStypes from 'prop-types';

const TodosForm = ({ addTodo, showAdd })  => {
    const [ value, setValue ] = useState("");

    const handleFromSubmit = e => {
        e.preventDefault();
        
        if (!value) {
            alert("No blank Todo!");
            return;
        }

        if (value.length >= 40) {
            alert("Please create a shorter todo text!");
            setValue("");
            return;
        } 

        addTodo(value);
        setValue("");
    }

    if (showAdd) {
        return (
            <section className="add">
                <form className="add-form" onSubmit={handleFromSubmit}>
                    <input type="text" className="add-input" value={value} onChange={e => setValue(e.target.value)}/>
                    <button className="add-btn main-black-color">Add</button>
                </form>
            </section>
        );
    } else {
        return null;
    }
    
};

TodosForm.propStypes = {
    addTodo: PropStypes.func.isRequired,
    showAdd: PropStypes.bool.isRequired
}

export default TodosForm;