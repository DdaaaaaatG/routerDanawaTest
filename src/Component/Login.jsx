import React from 'react'
import { styled } from 'styled-components'

const LoginWrap = styled.div`
  background-color: #FFFFFF;
  width: 400px;
  height: 400px;
  margin: 7em auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  border-radius: 1.5em;
  box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
  text-align: center;
  &>.sign{
    padding-top: 40px;
    color: #5cecff;
    font-weight: bold;
    font-size: 23px;
  }
  &>.un,&>.pass{
      width: 76%;
      color: rgb(38, 50, 56);
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 1px;
      background: rgba(136, 126, 126, 0.04);
      padding: 10px 20px;
      border: none;
      border-radius: 20px;
      outline: none;
      box-sizing: border-box;
      border: 2px solid rgba(0, 0, 0, 0.02);
  }
  &>.submit {
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    background:#5cecff;
    border: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-family: 'Ubuntu', sans-serif;
    font-size: 13px;
    box-shadow: 0 0 20px 1px rgba(0, 0, 0, 0.04);
    }
`;
function Login() {
  return (
    <div className="inner">
      <LoginWrap>
        <p class="sign">Sign in</p>
        <input class="un" type="text" placeholder="Username"/>
        <input class="pass" type="password"placeholder="Password"/>
        <span class="submit" >Sign in</span>
      </LoginWrap>
    </div>
  )
}

export default Login