import { css } from "@emotion/react";

export const container = css`
  max-width: 120rem;
  margin: 0 auto;
  padding: 2rem;
`;

export const petType = css`
  display: flex;
  justify-content: center;
  align-items: center;

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    margin: 0 3rem 1rem 3rem;
    border: 0.1rem solid #dddddd;
    border-radius: 50%;
    width: 8rem;
    height: 8rem;
    font-size: 1.5rem;
    font-weight: 700;
    background-color: #1A2867;
    color: #FCB904;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: #FCB904;
      color: #1A2867;
    }

    &:active {
      background-color: #FCB904;
      color: #1A2867;
      transform: scale(0.95);
    }
  }

  & > .active {
    background-color: #FCB904;
    color: #1A2867;
  }
`;

export const productsGrid = css`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
`;

export const productItem = css`
  border: 0.1rem solid #dddddd;
  padding: 1rem;
  text-align: center;
  cursor: pointer;
  
  img {
    width: 20rem;
    height: 20rem;
    object-fit: cover;
  }
  
  h3 {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
  
  p {
    color: #333;
    font-size: 1.3rem;
  }
`;

export const pagination = css`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  button {
    margin: 0 1rem;
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
`;