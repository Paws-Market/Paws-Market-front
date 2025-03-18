import { css } from "@emotion/react";

export const wrapper = css`
  width: 100%;
  max-width: 120rem;
  height: 50rem;  // 슬라이드 높이 고정
  margin: 0 auto;
  overflow: hidden; 
  position: relative;
  top: 0;
`;

export const imageContainer = css`
  width: 100%;
  height: 50rem;  // 슬라이드 높이 고정
  overflow: hidden;  // 이미지 넘치는 부분 숨김
`;

export const imageStyle = css`
  width: 100%;    // 부모 크기에 맞게 이미지 크기 조정
  height: 100%;   // 부모 크기에 맞게 이미지 크기 조정
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
  border: 0.1rem solid #000000;
  width: 22rem;
  height: 22rem;
`;

export const productImg = css`
  box-sizing: border-box;
  border: 0.1rem solid #000000;
  width: 17rem;
  height: 17rem;
`;

export const productinfo = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & div {
    font-size: 1.5rem;
  }
`;