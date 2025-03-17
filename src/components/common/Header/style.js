import { css } from "@emotion/react";

export const layout = css`
    position: fixed;
    top: 0;
    z-index: 999;
    box-sizing: border-box;
    width: 120rem;
    height: 5rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    background-color: #1A2867;

    & * {
        color: #fafafa;
    }
`;

export const headerContainer = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const logoContainer = css`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & > h1 {
        margin: 0;
        font-size: 1.8rem;
        cursor: pointer;
    }
    & > img {
        width: 100%;
    }
`;

export const navContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 1;
    
    margin-left: 4rem;

    & span {
        font-size: 1.5rem;
    }
`;

export const menuContainer = css`
    display: flex;
    align-items: center;
    gap: 2rem;

    & > div:nth-of-type(1) {
        & * {
            border: none;
            box-shadow: none;
            background-color: #1A2867;
            cursor: pointer;
        }
    }

    & > * {
        cursor: pointer;
        &:hover * {
            color: #FCB904;
        }
    }
`;

export const accountContainer = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 1rem;
    width: 23rem;

    & span {
        box-sizing: border-box;
        border: 0.1rem solid #fafafa;
        border-radius: 1rem;
        padding: 0.3rem 1rem;
        font-size: 1.5rem;
    }

    & > div {
        cursor: pointer;
        &:hover * {
            color: #FCB904;
        }
    }
`;

export const cartIcon = css`
    
    & svg {
        font-size: 2.5rem;
        padding-top: 0.5rem;
    }
`;