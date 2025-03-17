import { css } from "@emotion/react";

export const global = css`

    @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100..900&display=swap');
    
    html, body, #root {
        margin: 0;
        padding: 0;
        font-family: "Noto Sans KR", serif;
        font-size: 62.5%;
        background-color: #fafafa;
    }

    #root {
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        /* padding-top: 5rem; */
    }

    a {
        text-decoration: none;
    }
`;