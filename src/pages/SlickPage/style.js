import { css } from "@emotion/react";

export const wrapper = css`
  width: 100%;
  max-width: 120rem;
  height: 50rem;
  margin: 0 auto;
  overflow: hidden; 
  position: relative;
  top: 0;
`;

export const imageContainer = css`
  width: 100%;
  height: 50rem;
  overflow: hidden;
`;

export const imageStyle = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

export const productContainer = css`
  display: flex;
  justify-content: space-around;
  box-sizing: border-box;
  margin: 1.5rem 0;
  width: 100%;
  height: 20rem;
`;

export const productItems = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 0.1rem solid #dddddd;
  width: 22rem;
  height: 22rem;
  position: relative;
  cursor: pointer;
`;

export const categoryLabel = css`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.3rem 0.6rem;
  font-size: 1.2rem;
  border-radius: 0.3rem;
  z-index: 1;
`;

export const productImg = css`
  width: 17rem;
  height: 17rem;

  & > img {
    width: 17rem;
    height: 17rem;
    object-fit: cover;
  }
`;

export const productinfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 20rem;
  }
`;