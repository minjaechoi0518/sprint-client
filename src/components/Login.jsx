import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from './component/Button'
import Header from './Header'
import useInput from './Hooks/useInput'

const Login = () => {
  const [userId, onChangeUserIdHandler ] = useInput('')
  const [password, onChangPasswordHandler] = useInput('')

  const [warningNotice, setWarningNotice] = useState('')

  const onClickLoginHandler = ()=>{
    if(userId.length <1 ){
      setWarningNotice('아이디를 입력해주세요')
      return;
    }
    if(password.length <1 ){
      setWarningNotice('비밀번호를 입력해주세요')
      return;
    }

  }
  return (
    <>
    <Header/>
    <h1>로그인</h1>
    <form>
    <input value={userId} onChange={onChangeUserIdHandler}/>
    <input value={password} onChange={onChangPasswordHandler}/>
    </form>
    <Button onClick={onClickLoginHandler}>로그인</Button>
    {warningNotice}


    <div>
    계정이 없으신가요?<Link to='/signUp'>회원가입</Link>
    </div>
    </>
  )
}

export default Login