import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './Product';
import { styled } from 'styled-components';

const ListCon = styled.ul`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-auto-rows: 450px;
  gap: 50px;
  &>li{border:1px solid #eee; cursor: pointer;}
`;

function MainProduct({ data }) {
  const location = useLocation();
  const category1 = location.pathname === '/Notebook' ? 'notebook' : ''; // 노트북 카테고리 여부 확인
  const category2 = location.pathname === '/Brand' ? 'brandPC' : ''; // 브랜드pc 카테고리 여부 확인
  const category3 = location.pathname === '/Custom' ? 'cusPC' : ''; // 조립pc 카테고리 여부 확인

  let filteredData = data;
  if (category1) {
    filteredData = data.filter(item => item.category === category1);
  }
  else if (category2) {
    filteredData = data.filter(item => item.category === category2);
  }
  else if (category3) {
    filteredData = data.filter(item => item.category === category3);
  }
  
  return (
    <>
      <section className='MainList inner'>
        <ListCon>
          {filteredData.map((item) => {
            return (
              <li className="list" key={item._id}>
                <Product item={item} />
              </li>
            );
          })}
        </ListCon>
      </section>
    </>
  )
}

export default MainProduct;
