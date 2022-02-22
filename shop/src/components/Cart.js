import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';

function Cart(props) {
  let state = useSelector((state) => state);
  console.log(state);
  let dispatch = useDispatch();

  function closeButton() {
    props.dispatch({ type: 'close' });
  }

  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          { state.reducer.map((a,i) => {
            return (
              <tr key={i}>
                <td>{ a.id }</td>
                <td>{ a.name }</td>
                <td>{ a.qnt }</td>
                <td>
                  <button onClick={() => { dispatch({ type: 'increase', data: a.id }) }}>+</button>                
                  <button onClick={() => { dispatch({ type: 'decrease', data: a.id }) }}>-</button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </Table>
      
      { props.openAlert === true
        ? (<div className="my-alert">
            <p>지금 구매하시면 신규 할인 20%</p>
            <button onClick={() => { closeButton() }}>닫기</button>
          </div>)
        : null
      }
    </div>
  )
}

function stateToProps(state){
  return {
    openAlert : state.reducer2
  }
}
export default connect(stateToProps)(Cart) 