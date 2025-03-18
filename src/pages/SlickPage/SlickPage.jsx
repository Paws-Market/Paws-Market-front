/**@jsxImportSource @emotion/react */
import * as s from './style';
import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { getProductList } from '../../apis/productApi';
import { useNavigate } from 'react-router-dom';
import { getCategoryList } from '../../apis/categoryApi';

function SlickPage() {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // 카테고리 정보 가져오기
        getCategoryList().then((data) => {
            if (data.status === "SUCCESS") {
                setCategories(data.data);
            }
        });
    }, []);

    useEffect(() => {
        if (categories.length) {
            fetchTopProducts();
        }
    }, [categories]); // 카테고리 정보가 로드되면 상품을 가져옴

    const fetchTopProducts = async () => {
        setProducts(await Promise.all(
            categories.map(async (category) => {
                const params = {
                    pageNo: 0,
                    pageSize: 1,
                    sortBy: 'salesQuantity',
                    direction: 'desc',
                    categoryType: category.categoryType
                };
                const response = await getProductList(params);
                return { ...response.data[0], categoryName: category.categoryName, categoryType: category.categoryType };
            })
        ));
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
    };

    return (
        <div>
            <div css={s.wrapper}>
                <Slider {...settings}>
                    {[1, 2, 3, 4].map(num => (
                        <div key={num} css={s.imageContainer}>
                            <img 
                                src={`/img/mainImg${num}.png`} 
                                alt={`Slide ${num}`} 
                                css={s.imageStyle}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
            <div css={s.productContainer}>
                {products.map((product, idx) => (
                    <div 
                        key={idx}
                        css={s.productItems}
                        onClick={() => handleProductClick(product.productId)}
                    >
                        <div css={s.categoryLabel}>
                            {product.categoryName} Best 1
                        </div>
                        <div css={s.productImg}>
                            <img src={product.imageUrl} alt={product.productName} />
                        </div>
                        <div css={s.productinfo}>
                            <div>{product.productName}</div>
                            <div>{product.price.toLocaleString()}원</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SlickPage;