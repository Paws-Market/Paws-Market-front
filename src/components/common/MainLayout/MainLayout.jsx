/**@jsxImportSource @emotion/react */
import * as s from './style';
import React from 'react';

function MainLayout({ children }) {
    return (
        <div css={s.layout}>
            <div>
                <h1>mainlayout</h1>
            </div>
            <div>
                {children}
            </div>
        </div>
    );
}

export default MainLayout;