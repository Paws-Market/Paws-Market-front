/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';

function SlickPage() {
    const settings = {
        dots: false,            // 슬라이드 아래 네비게이션 버튼
        infinite: true,         // 무한반복
        speed: 500,             // 슬라이드 전환 속도
        slidesToShow: 1,        // 한 번에 보여줄 슬라이드 개수
        slidesToScroll: 1,      // 한 번에 넘어가는 슬라이드 개수
        adaptiveHeight: false,   // 슬라이드별 높이 자동 조정
        autoplay: true,         // 자동 슬라이드 활성화
        autoplaySpeed: 3500,    // 자동 슬라이드 전환 간격 (3.5초)
        pauseOnHover: true,     // 마우스 Hover 시 멈춤
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
                <div css={s.productItems}>
                    <div css={s.productImg}>

                    </div>
                    <div css={s.productinfo}>
                        <div>상품명</div>
                        <div>가격</div>
                    </div>
                </div>
                <div css={s.productItems}>
                    <div css={s.productImg}>

                    </div>
                    <div css={s.productinfo}>
                        <div>상품명</div>
                        <div>가격</div>
                    </div>
                </div>
                <div css={s.productItems}>
                    <div css={s.productImg}>

                    </div>
                    <div css={s.productinfo}>
                        <div>상품명</div>
                        <div>가격</div>
                    </div>
                </div>
                <div css={s.productItems}>
                    <div css={s.productImg}>

                    </div>
                    <div css={s.productinfo}>
                        <div>상품명</div>
                        <div>가격</div>
                    </div>
                </div>
                <div css={s.productItems}>
                    <div css={s.productImg}>

                    </div>
                    <div css={s.productinfo}>
                        <div>상품명</div>
                        <div>가격</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlickPage;
