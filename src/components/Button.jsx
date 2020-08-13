import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ text, onClick, color, align }) => {
    const classNames = [ 
    "header-btn",
    color === 'black' && 'main-black-color',
    color === 'red' && 'main-red-color',
    align === 'right' && 'align-right',
    align === 'left' && 'align-left'
    ].join(" ");

    return (
        <button className={ classNames } onClick={ onClick }>
            { text }
        </button>
    )

}

Button.defaultProps = {
    text: 'Button',
    color: 'black',
    align: 'left'
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    color: PropTypes.oneOf(["black", "red"]),
    align: PropTypes.oneOf(["right", "left"])
}

export default Button;
