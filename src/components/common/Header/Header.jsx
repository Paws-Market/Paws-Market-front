/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useRef, useState } from 'react';
import { HiMiniShoppingBag } from "react-icons/hi2";
import { IoSearch } from "react-icons/io5";
import Select from 'react-select';
import { getCategoryList } from '../../../apis/categoryApi';
import { useNavigate } from 'react-router-dom';


function Header() {
    const [categories, setCategories] = useState([]);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const navigate = useNavigate();
    const searchRef = useRef();

    useEffect(() => {
        getCategoryList().then((data) => {
            if (data.status === "SUCCESS") {
                setCategories(data.data);
            }
        });
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isSearchOpen && searchRef.current && !searchRef.current.contains(event.target)) {
                setIsSearchOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isSearchOpen]);

    const handleSearchToggle = () => {
        if (isSearchOpen) {
            handleSearchSubmit(); // 검색창이 열려있을 때 아이콘 클릭 시 검색 실행
        } else {
            setIsSearchOpen(true); // 검색창이 닫혀있을 때 열기
        }
    };

    const handleSearchSubmit = (e) => {
        if (e) e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/product?search=${searchQuery}&pageNo=0&pageSize=10&sortBy=salesQuantity&direction=desc`);
            setSearchQuery('');
            setIsSearchOpen(false);
        }
    };

    const handleCategoryClick = (categoryType) => {
        navigate(`/product?categoryType=${categoryType}&pageNo=0&pageSize=10&sortBy=salesQuantity&direction=desc`);
    };

    const handleNewClick = () => {
        navigate('/product?sortBy=createdAt&direction=desc&pageNo=0&pageSize=10');
    };

    const handleAllProductsClick = () => {
        navigate('/product?pageNo=0&pageSize=10&sortBy=salesQuantity&direction=desc');
    };

    return (
        <div css={s.layout}>
            <div css={s.headerContainer}>
                <div css={s.logoContainer}>
                    <h1><a href="/slick">PAWS MARKET</a></h1>
                </div>

                <div css={s.navContainer}>
                    <div css={s.menuContainer}>
                        <div onClick={handleNewClick}><span>★New★</span></div>
                        {categories.map((category) => (
                            <div key={category.categoryId} onClick={() => handleCategoryClick(category.categoryType)}>
                                <span>{category.categoryName}</span>
                            </div>
                        ))}
                        <div onClick={handleAllProductsClick}><span>전체상품</span></div>
                    </div>

                    <div css={s.accountContainer}>
                    <form onSubmit={handleSearchSubmit} css={s.searchForm} ref={searchRef}>
                        <input
                            type="text"
                            placeholder="상품 검색..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            autoFocus
                            css={[s.searchInput, isSearchOpen && s.searchInputOpen]}
                        />
                        <div css={s.cartIcon} onClick={handleSearchToggle}>
                            <IoSearch />
                        </div>
                        </form>
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