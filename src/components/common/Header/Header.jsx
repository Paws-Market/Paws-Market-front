/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import Select from 'react-select';
import { getCategoryList } from '../../../apis/categoryApi';

function Header(props) {
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
        <div css={s.layout}>
            <div css={s.headerContainer}>
                <div css={s.logoContainer}>
                    <h1><a href="/slick">PAWS MARKET</a></h1>
                    {/* <img src="https://private-user-images.githubusercontent.com/170929089/420828790-ab1f7d71-4bec-437e-8426-b8ce35531bde.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NDE1OTY4NjUsIm5iZiI6MTc0MTU5NjU2NSwicGF0aCI6Ii8xNzA5MjkwODkvNDIwODI4NzkwLWFiMWY3ZDcxLTRiZWMtNDM3ZS04NDI2LWI4Y2UzNTUzMWJkZS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwMzEwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDMxMFQwODQ5MjVaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT02MTMxOTRiY2UwNTM4YWEyYjE5YzRhY2IyOTBlNzFlNGJkMmJlZDJjYjhkZDNjMWQ0ZmFhZWIxZTRiNzQwNmY3JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.XNKim7V0pPAnP9pvkTonWm_0OwNRw0Mul1vHEIm7KiI" alt="" /> */}
                </div>
                <div css={s.navContainer}>
                    <div css={s.menuContainer}>
                        <div><span>★New★</span></div>
                        {
                            categories.map((category) => (
                                <div key={category.categoryId}>
                                    <span>{category.categoryName}</span>
                                </div>
                            ))
                        }
                        <div><span>전체상품</span></div>
                    </div>
                    <div css={s.accountContainer}>
                        <div css={s.cartIcon}><IoSearch /></div>
                        <div css={s.cartIcon}><HiMiniShoppingBag /></div>
                        <div><span>Signin</span></div>
                        <div><span>Join</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;