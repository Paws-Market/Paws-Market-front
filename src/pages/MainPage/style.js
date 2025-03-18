import { css } from "@emotion/react";

export const wrapper = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    width: 120rem;
`;

export const mainImg = css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 59.5rem;
    overflow: hidden;

    & > img {
        width: 120rem;
        height: 50rem;
    }
`;

export const arrowLeft = css`
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 48px;
    color: black;
    cursor: pointer;
`;

export const arrowRight = css`
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    font-size: 48px;
    color: black;
    cursor: pointer;
`;