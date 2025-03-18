/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

function Footer(props) {
    return (
        <div css={s.layout}>
            <div css={s.footerContainer}>
                <div><span></span></div>
                <div><span>ⓒ PawsMarket</span></div>
                <div><span>이용약관</span></div>
                <div><span>개인정보보호</span></div>
                <div><span>반품/환불규정</span></div>
                <div><span>Contact</span></div>
                <div><span></span></div>
            </div>
        </div>
    );
}

export default Footer;