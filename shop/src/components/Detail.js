/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import styled from 'styled-components';
import '../css/Detail.css';

let Box = styled.div`
  padding-top: 20px;
`;
let Title = styled.h4`
  font-size: 20px;
  color: ${ props => props.color };
`;

function Detail(props) {
  let [alert, changeAlert] = useState(true);
  useEffect(() => {
    let timer = setTimeout(() => {
      changeAlert(false)
    }, 2000);
    return () => { clearTimeout(timer) }
  }, [alert]);


  let { id } = useParams();
  let history = useHistory();
  let clickedShoes = props.shoes.find((shoes) => shoes.id == id);

  return (
    <div className="container">
      <Box>
        <Title className="title">상세페이지</Title>
      </Box>

      {
        alert === true
        ? (<div className="my-alert">
            <p>재고가 얼마 남지 않았습니다.</p>
          </div>)
          : null
      }

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