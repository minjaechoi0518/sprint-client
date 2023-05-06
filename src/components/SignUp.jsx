import React, { useState } from 'react'
import Button from './component/Button'
import useInput from './Hooks/useInput'

const SignUp = () => {
  const [userId,onChangeUserIdHandler]= useInput('')
  const [password,onChangePasswordHandler]= useInput('')
  const [nickname,onChangeNicknameHandler]= useInput('')
  const [email,onChangeEmailHandler]= useInput('')
  const [checkPassword,onChangeCheckPasswordHandler]= useInput('')

  const [warningNotice, setWarningNotice] = useState('')

  const onClickSingUpHandler= () =>{
    if(userId.length<1){
      setWarningNotice('아이디를 입력해주세요.')
      return;
    }
    if(password.length<1){
      setWarningNotice('비밀번호를 입력해주세요.')
      return;
    }
    if(password !== checkPassword){
      setWarningNotice('비밀번호가 일치하지 않습니다.')
      return;
    }
    if(nickname.length<1){
      setWarningNotice('닉네임을 입력해주세요.')
      return;
    }
    if(email.length<1){
      setWarningNotice('이메일을 입력해주세요.')
      return;
    }

  } 
  return (
    <>
    <h1>회원가입</h1>
    <form>
    <input value={userId} onChange={onChangeUserIdHandler} placeholder='아이디'/>
    <input value={password} onChange={onChangePasswordHandler} placeholder='비밀번호'/>
    <input value={checkPassword} onChange={onChangeCheckPasswordHandler} placeholder='비밀번호 확인'/>
    <input value={nickname} onChange={onChangeNicknameHandler} placeholder='닉네임'/>
    <input value={email} onChange={onChangeEmailHandler} placeholder='이메일'/>
    </form>
    <div>{warningNotice}</div>
    <Button onClick={onClickSingUpHandler}>회원가입</Button>
    </>
  )
}

export default SignUp;

