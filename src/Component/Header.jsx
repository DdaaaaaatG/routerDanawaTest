import React from 'react'
import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

const Gnb = styled.div``;
const Login = styled.div``;
const HeaderWrap = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  border-bottom: 1px solid #ddd;
  &>.logo{
    margin-left: 30px;
    width: 200px;
    height: 80px;
    &>img{
      width: 200px;
      height: 80px;
      object-fit: cover;
    }
  }
  
  &>${Gnb}{
    display: flex;
    gap: 20px;
  }
  &>${Login}{
    margin-right: 30px;
  }
`;

function Header({data}) {
  return (
    <HeaderWrap>
      <Link to='/' className='logo'>
        <img src={`${process.env.PUBLIC_URL}/img/danawa_logo_main_brand.png`} alt="" />
      </Link>
      <Gnb>
          <Link to='/Notebook'>노트북</Link>
          <Link to='/Brand'>브랜드Pc</Link>
          <Link to='/Custom'>조립Pc</Link>
          <Link to='/'>태블릿</Link>
          <Link to='/'>모바일</Link>
          <Link to='/'>가전제품</Link>
      </Gnb>
      <Login>
        <Link to='/Login'>로그인</Link>
      </Login>
    </HeaderWrap>
  )
}

export default Header