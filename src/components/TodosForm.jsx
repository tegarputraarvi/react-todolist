import React from 'react';

const TodosForm = ()  => {
    return (
        <section className="add">
            <form className="add-form">
                <input type="text" className="add-input" />
                <button className="add-btn main-black-color">Add</button>
            </form>
        </section>
    );
};

export default TodosForm;