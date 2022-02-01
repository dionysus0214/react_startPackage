/*eslint-disable*/
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../css/Detail.scss';

let Box = styled.div`
  padding-top: 20px;
`;
let Title = styled.h4`
  font-size: 20px;
  color: ${ props => props.color };
`;

function Detail(props) {
  let { id } = useParams();
  let clickedShoes = props.shoes.find((shoes) => shoes.id == id);
  let history = useHistory();

  return (
    <div className="container">
      <Box>
        <Title className="red">상세 페이지</Title>
      </Box>
      <div className="my-alert">
        <p>재고가 얼마 남지 않았습니다.</p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <img src={ `https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg` } width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{clickedShoes.title}</h4>
          <p>{clickedShoes.content}</p>
          <p>{clickedShoes.price}</p>
          <button className="btn btn-danger">주문하기</button>&nbsp;
          <button className="btn btn-secondary" onClick={() => {
            history.goBack();
            // history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>
    </div> 
  )
}

export default Detail;