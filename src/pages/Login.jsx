import React, { useEffect, useState } from "react";

const User = {
    email: 'test@gmail.com',
    pw: 'netive12!@'
}

export default function Login() {
    const [email, setEmail] = useState('');
    const [pw, setPw] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    const handleEmail = (e) => {
        setEmail(e.target.value);
        const regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
        if (regex.test(email)) {
            setEmailValid(true);
        } else {
            setEmailValid(false);
        }
    }

    const handlePw = (e) => {
        setPw(e.target.value);
        const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
        if (regex.test(pw)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    }

    const onClickConfirmButton = () => {
        if (email === User.email && pw === User.pw) {
            alert('로그인 성공!');
        } else {
            alert('등록되지 않은 회원입니다.');
        }
    }

    useEffect(() => {
        if (emailValid && pwValid) {
            setNotAllow(false);
            console.log('false notAllow' + notAllow);
            return;
        }
        setNotAllow(true);
        console.log('true notAllow' + notAllow);
    }, [emailValid, pwValid]);

    return (
        <div className="page">
            <div className="titleWrap">
                이메일과 비밀번호를
                <br />
                입력해주세요
            </div>

            <div className="contentWrap">
                <div className="inputTitle">이메일 주소</div>
                <div className="inputWrap">
                    <input
                        type="text"
                        className="input"
                        placeholder="test@gmail.com"
                        value={email}
                        onChange={handleEmail}
                    />
                </div>
                <div className="errorMessageWrap">
                    {
                        !emailValid && email.length > 0 && (
                            <div>올바른 이메일을 입력해주세요.</div>
                        )
                    }
                </div>

                <div style={{ marginTop: "26px" }} className="inputTitle">비밀번호</div>
                <div className="inputWrap">
                    <input
                        type="password"
                        className="input"
                        placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요."
                        value={pw}
                        onChange={handlePw}
                    />
                </div>
                <div className="errorMessageWrap">
                    {
                        !pwValid && pw.length > 0 && (
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요.</div>
                        )
                    }
                </div>
            </div>

            <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">확인</button>
        </div>
    )
}