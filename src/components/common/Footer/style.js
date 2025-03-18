import { css } from "@emotion/react";

export const layout = css`
    box-sizing: border-box;
    width: 100%;
    height: 4rem;
    border-top: 0.2rem solid #dbdbdb;
`;

export const footerContainer = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;

    & span {
        font-size: 1.4rem;
    }
`;