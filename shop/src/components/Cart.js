import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
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
          { props.state.map((a,i) => {
            return (
              <tr key={i}>
                <td>{ a.id }</td>
                <td>{ a.name }</td>
                <td>{ a.qnt }</td>
                <td>
                  <button onClick={() => { props.dispatch({ type: 'increase' }) }}> + </button>                
                  <button onClick={() => { props.dispatch({ type: 'decrease' }) }}> - </button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </Table>
    </div>
  )
}

function stateToProps(state) {
  return {
    state: state
  }
}

export default connect(stateToProps)(Cart);