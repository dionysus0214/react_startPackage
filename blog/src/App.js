import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  function 함수() {
    return 100;
  }

  return (
    // 태그에 class를 주고 싶으면 <div className="클래스명">
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <h5>{posts}</h5>
      <p>{함수()}</p>
    </div>
  );
}

export default App;
