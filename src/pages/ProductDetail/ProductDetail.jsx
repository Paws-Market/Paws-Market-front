/**@jsxImportSource @emotion/react */
import { useParams } from 'react-router-dom';
import * as s from './style';
import React, { useEffect, useState } from 'react';
import { getProductDetail } from '../../apis/productApi';
import { MdOutlinePayment } from "react-icons/md";
import { HiMiniShoppingBag } from 'react-icons/hi2';
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

function ProductDetail(props) {
    const { productId } = useParams();  // url에서 productId 가져옴
    const [ product, setProduct ] = useState(null);
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await getProductDetail(productId);
            setProduct(response.data);
        };
        fetchProduct();
    }, [productId]);

    const salePrice = product ? Math.round(product.price * (1 - product.discountRate / 100)) : 0;
    const totalPrice = salePrice * quantity;

    return (
        <div>
        {product ? (
            <>
                <div css={s.productContainer}>
                    <div css={s.productImg}>
                        <img src={product.imageUrl} alt="상품 이미지" />
                    </div>
                    <div css={s.infoContainer}>
                        <div css={s.productInfo}>
                            <p>상품 ID: {product.productId}</p>
                            <p>펫 타입: {product.petType}</p>
                            <p>카테고리 타입: {product.category.categoryName}</p>
                            <p>상품명: {product.productName}</p>
                            <p>가격: {product.price.toLocaleString()}원</p>
                            <p>할인율: {product.discountRate}%</p>
                            <p>
                                판매 가격: {salePrice.toLocaleString()}원
                            </p>
                            <p>
                                개수: 
                                <input
                                    type="number"
                                    min="1"
                                    value={quantity}
                                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                    css={s.quantityInput}
                                />
                            </p>
                            <p>
                                총 금액: {totalPrice.toLocaleString()}원
                            </p>
                        </div>
                        <div css={s.buttonContainer}>
                            <div css={s.buy}><span><MdOutlinePayment /> 구매하기</span></div>
                            <div css={s.CartAndInquiry}>
                                <div><span><HiMiniShoppingBag/> 장바구니</span></div>
                                <div><span><IoChatbubbleEllipsesOutline /> 문의하기</span></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div css={s.productDetailContainer}>
                    <div>
                        <img src={product.descriptionImageUrl1} alt="상세 이미지 1" />
                    </div>
                    <div>
                        {product.descriptionImageUrl2 && (
                            <img src={product.descriptionImageUrl2} alt="상세 이미지 2" />
                        )}
                    </div>
                    <div>
                        {product.descriptionImageUrl3 && (
                            <img src={product.descriptionImageUrl3} alt="상세 이미지 3" width={200} />
                        )}
                    </div>
                </div>
            </>
        ) : (
            <p>로딩 중...</p>
        )}
    </div>
    );
}

export default ProductDetail;