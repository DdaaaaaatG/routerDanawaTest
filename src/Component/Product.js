import React from 'react'
import { styled } from 'styled-components';

const ImgCon = styled.div``;
const ProWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  &>p:nth-of-type(1){font-size:20px;}
  &>p:nth-of-type(2){font-size:24px; font-weight:bold}
`;
function Product({item}) {
  return (
    <ProWrap>
      <ImgCon>
        <img src={`${process.env.PUBLIC_URL}/img/${item.img}`}/>
      </ImgCon>
      <p>{item.title}</p>
      <p>{item.price} 원</p>
    </ProWrap>
  )
}

export default Product