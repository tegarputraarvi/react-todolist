import React, { useState } from 'react';
import PropStypes from 'prop-types';

const TodosForm = ({ addTodo })  => {
    const [ value, setValue ] = useState("");

    const handleFromSubmit = e => {
        e.preventDefault();
        
        if (!value) {
            alert("No blank Todo!");
            return;
        }

        addTodo(value);
        setValue("");
    }

    return (
        <section className="add">
            <form className="add-form" onSubmit={handleFromSubmit}>
                <input type="text" className="add-input" value={value} onChange={e => setValue(e.target.value)}/>
                <button className="add-btn main-black-color">Add</button>
            </form>
        </section>
    );
};

TodosForm.propStypes = {
    addTodo: PropStypes.func.isRequired
}

export default TodosForm;