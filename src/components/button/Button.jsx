import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from 'emotion-theming';

// import cx from 'classnames';

// import styles from './button.module.css';

import * as styles from './button.styles';

const Button = ({ text, onClick, color, align }) => {
    // const classNames = [
    //     "header-btn",
    //     color === "black" && "main-black-color", 
    //     color === "red" && "main-red-color",
    //     align === "right" && "align-right",
    //     align === "left" && "align-left" 
    // ].join(" ");

    // const classNames = cx(styles.headerBtn, {
    //     [styles.mainBlackColor]: color === 'black',
    //     [styles.mainRedColor]: color === 'red',
    //     [styles.alignRight]: align === 'right',
    //     [styles.alignLeft]: align === 'left'
    // })

    const theme = useTheme();

    return (
        // <button className={ classNames } onClick={ onClick }>
        //     { text }
        // </button>
        <button css={ styles.button({ align, color, theme }) } onClick={ onClick }>
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
