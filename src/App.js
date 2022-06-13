/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';

{}

function App() {

let post = "해운대 우동 맛집";
let [ 글제목, 글제목변경] = useState( ["남자 코트 추천", "강남우동맛집","파이썬 독학"]);

let [따봉, 따봉변경 ] = useState(0);

let [modal, setModal] = useState(false);

// let num = [1, 2];
// let [a, c] = [1, 2];

// let a = num[0];
// let c = num[1];

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:"red", fontSize:"16px"} }>블로그임</h4>
      </div>
      <div className='list'>
        <button onClick={ () => { 
        
     
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);

        }}>버튼</button>

        

        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경 (따봉 +1 ) }  }> 👍 </span> {따봉} </h4>
        <p>2월 17일 발행</p>
      </div>



      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {

        setModal(true);

        // 위 코드떄문에 modal이 true 로 바꼈으니 true 일떄는 modal이 false 로바꿔주세요 라고 해야함
        modal == true ? false : null

        setModel(false)

     
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>

      
      {
        // 조건식 ? 참일떄 실행할 코드 : 거짓일떄 실행할 코드
      // 1 == 1 ? '참' : '아님'
       modal == true ? <Modal/> : null
       

      }

    </div>
  );
}

function Modal(){
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
