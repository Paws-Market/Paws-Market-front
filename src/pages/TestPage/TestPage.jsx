/**@jsxImportSource @emotion/react */
import { getTestMessage } from '../../apis/testApi';
import { useTestMutation } from '../../mutations/testMutation';
import * as s from './style';
import React, { useEffect, useState } from 'react';

function TestPage(props) {
    const testMutation = useTestMutation();

    const [response, setResponse] = useState("");
    const [ name, setName ] = useState("");

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

    const handleInputOnChange = (e) => {
        setName(e.target.value);
        console.log(name);
    }

    const handleSubmitButtonOnClick = async () => {
        const nameresp = await testMutation.mutateAsync(name);
    }
    

    return (
        <div>
            <br />
            <h2>test</h2>
            <h2>{response}</h2>
            <div>
                <input type="text" placeholder="이름" value={name} onChange={handleInputOnChange} />
                <button onClick={handleSubmitButtonOnClick}>전송</button>
            </div>
        </div>
    );
}

export default TestPage;