/*eslint-disable*/
import React, { useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';

function Detail(props) {
  let { id } = useParams();
  let clickedShoes = props.shoes.find(function (shoes) {
    return shoes.id == id;
  });
  let history = useHistory();

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src={ `https://codingapple1.github.io/shop/shoes${Number(id) + 1}.jpg` } width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{clickedShoes.title}</h4>
          <p>{clickedShoes.content}</p>
          <p>{clickedShoes.price}</p>
          <button className="btn btn-danger">주문하기</button>
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