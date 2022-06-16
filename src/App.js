/* eslint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { toBeRequired } from '@testing-library/jest-dom/dist/matchers';
import { map } from 'lodash';

{}

function App() {

let post = "해운대 우동 맛집";
let [ 글제목, 글제목변경] = useState( ["남자 코트 추천", "강남우동맛집","파이썬 독학"]);

let [따봉, 따봉변경 ] = useState([0,0,0]);


let [modal, setModal] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:"red", fontSize:"16px"} }>블로그임</h4>
      </div>
      <div className='list'>
        <button onClick={ () => { 
        
        let num = [...따봉];
        num[0] = 1
        따봉변경(num);
        console.log(글제목);
     
        let copy = [...글제목];
        copy[0] = '여자 코트 추천';
        글제목변경(copy);

        }}>버튼</button>

       
        

        <h4>{ 글제목[0] } <span onClick={ () => { 따봉변경 ( 따봉 +1 ) }  }> 👍 </span> {따봉} </h4>
        
        <p>2월 17일 발행</p>
      </div>

{/* 

       <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4 onClick={() => {

        setModal(!modal)

     
        }}>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>  */}


      {
        글제목.map(function(a, i){
          return(
            
            <div className='list'>
            <h4>{글제목[i]}
            <span onClick={()=> {

            let num = [...따봉];
            num[i] = num[i] +1;



            따봉변경 (num )

            }}>👍{따봉[i]}</span>
            </h4>
        
            
              <p>2월 17일 발행</p>
          </div>
          )
        })
      }


      
      {
    
       modal == true ? <Modal></Modal> : null
       

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
