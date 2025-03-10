/**@jsxImportSource @emotion/react */
import { getTestMessage } from '../../apis/testApi';
import * as s from './style';
import React, { useEffect, useState } from 'react';

function TestPage(props) {

    const [response, setResponse] = useState("");


    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const message = await getTestMessage(); // data만 가져옴
                console.log("백엔드 응답:", message);
                setResponse(message);
            } catch (error) {
                console.error("API 호출 중 오류 발생:", error);
            }
        };

        fetchMessage();
    }, []);
    

    return (
        <div>
            <br />
            <h2>test</h2>
            <h2>{response}</h2>
        </div>
    );
}

export default TestPage;