import { css } from '@emotion/core';

export const todo = ({ theme }) => 
css`
    position: relative;
    text-align: center;

    min-height: 34px;
    margin: 16px 0 0;
    font-family: 'Homemade Apple', sans-serif;
    font-size: 24px;

    border-bottom: 1px solid ${ theme.color.primary.black };
`;

export const todoText = () => 
css`
    width: 100%;
    height: 50%;
    position: absolute;
    left: 50%;
    transform: translate(-50%);
`;