/*eslint-disable*/
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import styled from 'styled-components';
import '../css/Detail.css';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';

let Box = styled.div`
  padding-top: 20px;
`;
let Title = styled.h4`
  font-size: 20px;
  color: ${ props => props.color };
`;

function Detail(props) {
  let [alert, changeAlert] = useState(true);
  let [tab, changeTab] = useState(0);
  let [click, changeClick] = useState(false);

  useEffect(() => {
    let timer = setTimeout(() => {
      changeAlert(false)
    }, 2000);
    return () => { clearTimeout(timer) }
  }, [alert]);
  // useEffect(()=>{},[]);에서 [] 사용하면 업데이트 시 재로딩 안 됨

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
          <StockInfo stock={props.stock} />
          <button className="btn btn-primary" onClick={() => {
            props.changeStock([9, 15, 12]);
            props.dispatch({ type: 'addItem', data: { id: clickedShoes.id, name: clickedShoes.title, qnt: 1 }});
            history.push('/cart');
          }}>주문하기</button>&nbsp;
          <button className="btn btn-secondary" onClick={() => {
            history.goBack();
            // history.push('/');
          }}>뒤로가기</button>
        </div>
      </div>

      <Nav variant="tabs" defaultActiveKey="link-0">
        <Nav.Item>
          <Nav.Link eventKey="link-0" onClick={() => {
            changeTab(0)
          }}>Active</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" onClick={() => {
            changeTab(1)
          }}>Option 2</Nav.Link>
        </Nav.Item>
      </Nav>
      <CSSTransition in={click} classNames="wow" timeout={500}>
        <TabContent tab={tab} changeClick={changeClick} />
      </CSSTransition>
    </div> 
  )
}

function TabContent(props) {
  useEffect( ()=>{
    props.changeClick(true);
  });

  if (props.tab === 0) {
    return <div>0번째 내용입니다.</div>;
  } else if (props.tab === 1) {
    return <div>1번째 내용입니다.</div>;
  }
}

function StockInfo(props) {
  return (
    <p>재고: {props.stock[0]}</p>
  )
}

function stateToProps(state) {
  return {
    state: state.reducer,
    openAlert: state.reducer2
  }
}

export default connect(stateToProps)(Detail);