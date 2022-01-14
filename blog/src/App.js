import React, { useState } from 'react';
import './App.css';

function App() {
  // state는 변수 대신 쓰는 데이터 저장 공간으로 useState()를 이용해 만듦
  // 문자, 숫자, array, object 모두 저장 가능
  // state는 변경되면 HTML이 자동으로 재렌더링 -> 자주 바뀌거나 중요한 데이터는 변수 말고 state로 저장
  // [state 데이터, state 데이터 변경 함수]
  let [title, changeTitle] = useState(['강남 맛집 추천', '강남 오마카세', '강남역 데이트']); // ES6 destructuring
  let [likes, changeLikes] = useState(0);
  let [modal, changeModal] = useState(false);

  function clickTitle() {
    // state의 deep copy해서 수정(원본은 수정 불가, 특히 object랑 array)
    // deep copy는 reference data type 특징(값 공유 X, 서로 독립적인 값을 가지는 복사)
    var newArray = [...title];
    newArray[0] = '판교 멸치쌈밥';
    changeTitle(newArray);
  }

  return (
    // 태그에 class를 주고 싶으면 <div className="클래스명">
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={clickTitle}>클릭</button>

      {
        title.map(function (a) {
          return (
            <div className="list">
              <h3 onClick={ () => changeModal(!modal)}>{ a } <span onClick={ () => { changeLikes(likes + 1) }}>👍</span> { likes } </h3>
              <p>2월 18일 발행</p>
              <hr />
            </div>
          )
        })
      }
      {
        modal === true
        ? <Modal />
        : null
      }
    </div>
  );
}

// component 만드는 법: 함수 만들고 이름 짓고 -> 축약을 원하는 HTML 넣고 -> 원하는 곳에서 <함수명 />
// component 유의사항: 이름은 대문자, return() 안에 있는 건 태그 하나로 묶어야 함
// 반복하는 HTML 덩어리, 자주 변경되는 HTML UI는 component로 만드는 게 좋음
// 단 state 쓸 떄 복잡하다는 단점
function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
