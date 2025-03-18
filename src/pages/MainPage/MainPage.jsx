/**@jsxImportSource @emotion/react */
import * as s from './style';
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
import React, { useEffect, useState } from "react";
import { getCategoryList } from '../../apis/categoryApi';

function MainPage(props) {
    // 카테고리 상태 설정
    const [categories, setCategories] = useState([]);

    useEffect(() => {
    // 카테고리 목록을 가져오는 API 호출
        getCategoryList().then((data) => {
            if (data.status === "SUCCESS") {
                setCategories(data.data); // 카테고리 데이터를 상태에 저장
            }
        });
    }, []);
      
    return (
        <div css={s.wrapper}>
            <div css={s.mainImg}>
                <img src="/img/mainImg1.png" alt="" />
            </div>
            <div>
                <h2>카테고리 목록</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category.categoryId}>
                            {category.categoryName}
                            {category.categoryType} (ID: {category.categoryId})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default MainPage;