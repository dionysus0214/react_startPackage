import React, { useState } from 'react';
import './App.css';

function App() {
  // state는 변수 대신 쓰는 데이터 저장 공간으로 useState()를 이용해 만듦
  // 문자, 숫자, array, object 모두 저장 가능
  // state는 변경되면 HTML이 자동으로 재렌더링 -> 자주 바뀌거나 중요한 데이터는 변수 말고 state로 저장
  // [state 데이터, state 데이터 변경 함수]
  let [title, changeTitle] = useState(['강남 맛집 추천', '강남 오마카세', '강남역 데이트']); // ES6 destructuring
  let [likes, changeLikes] = useState(0);

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
      <button onClick={ clickTitle }>클릭</button>
      <div className="list">
        {/* state 변경함수로 변경해야 재렌더링이 잘 일어남 */}
        <h3>{ title[0] } <span onClick={ () => { changeLikes(likes + 1) }}>👍</span> { likes } </h3>
        <p>2월 14일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[1] }</h3>
        <p>3월 8일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ title[2] }</h3>
        <p>4월 25일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
