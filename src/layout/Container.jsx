import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

const Container = ({ children, flexDirection, flexWrap, justifyContent, alignItems, alignContent }) => {
    const containerStyles = css`
        display: flex;
        flex-direction: ${ flexDirection };
        flex-wrap: ${ flexWrap };
        justify-content: ${ justifyContent };
        align-items: ${ alignItems };
        align-content: ${ alignContent };
    `;

    return <div className="flex-container" css={ containerStyles }>{ children }</div>
}

Container.defaultProps = {
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch"
}

Container.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    flexDirection: PropTypes.oneOf([
        "row",
        "row-reverse",
        "column",
        "column-reverse"
    ]),
    flexWrap: PropTypes.oneOf([
        "nowrap",
        "wrap",
        "wrap-reverse"
    ]),
    justifyContent: PropTypes.oneOf([
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-arround",
        "space-evenly",
        "start",
        "end",
        "left",
        "right"
    ]),
    alignItems: PropTypes.oneOf([
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "baseline",
        "first baseline",
        "last baseline",
        "start",
        "end",
        "self-start",
        "self-end"
    ]),
    alignContent: PropTypes.oneOf([
        "stretch",
        "flex-start",
        "flex-end",
        "center",
        "space-between",
        "space-arround",
        "space-evenly",
        "start",
        "end",
        "baseline",
        "first baseline",
        "last baseline"
    ]),
}

export default Container;