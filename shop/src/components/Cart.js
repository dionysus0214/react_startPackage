import React from 'react';
import { Table } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';

function Cart(props) {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();

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
                  <button onClick={() => { dispatch({ type: 'increase' }) }}>+</button>                
                  <button onClick={() => { dispatch({ type: 'decrease' }) }}>-</button>
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
            <button onClick={() => { props.dispatch({ type: 'close' }) }}>닫기</button>
          </div>)
        : null
      }
    </div>
  )
}

export default Cart;