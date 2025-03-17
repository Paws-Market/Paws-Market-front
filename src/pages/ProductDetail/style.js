import { css } from '@emotion/react';

export const productContainer = css`
    box-sizing: border-box;
    display: flex;
    /* border: 0.1rem solid #000000; */
    padding: 5rem 3rem;
    width: 120rem;
`;

export const productImg = css`

    & > img {
        width: 70rem;
        height: 70rem;
    }
`;

export const infoContainer = css`
    margin-left: 2rem;
`;

export const productInfo = css`
    min-height: 50rem;

    & > p {
        font-size: 1.7rem;
    }
`;

export const quantityInput = css`
  width: 60px;
  padding: 5px;
  margin-left: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
`;

export const buttonContainer = css`
    display: flex;
    flex-direction: column;

    & span {
        display: inline-block;
        font-size: 1.8rem;
        border: 0.1rem solid #222222;
        border-radius: 0.5rem;
        padding: 1.5rem 0;
        text-align: center;
    }
`;

export const buy = css`
    
    & span {
        display: inline-block;
        margin: 1.5rem 0;
        width: 41rem;
    }
`;

export const CartAndInquiry = css`
    display: flex;

    & span {
        width: 20rem;
        margin-right: 1rem;
    }
`;

export const productDetailContainer = css`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;

    & img {
        width: 85rem;
    }
`;