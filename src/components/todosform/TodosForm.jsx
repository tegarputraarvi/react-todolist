import React, { useState } from 'react';
import PropStypes from 'prop-types';
import { useTheme } from 'emotion-theming';

// import styles from './todosform.module.css';
import * as styles from './todosform.styles';

const TodosForm = ({ addTodo, showAdd })  => {
    const theme = useTheme();

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
            <section css={ styles.add }>
                <form css={ styles.addForm } onSubmit={handleFromSubmit}>
                    <input type="text" css={ styles.addInput({ theme }) } value={value} onChange={e => setValue(e.target.value)}/>
                    <button css={ styles.addBtn({ theme }) }>Add</button>
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