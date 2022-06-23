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
let [title, setTitle] = useState(0);

let [modal, setModal] = useState(false);


  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={ {color:"red", fontSize:"16px"} }>블로그임</h4>
      </div>

      <div>
        <button onClick={() => {
        
          setTitle(0)
        }}>0번글</button>
           <button onClick={() => {
          setTitle(1)
        }}>1번글</button>
          <button onClick={() => {
          setTitle(2)
        }}>2번글</button>
      </div>

      {
        글제목.map(function(a, i){
          return(
            
            <div className='list'>
            <h4 onClick={()=>{
              setModal(true);
              setTitle(i);

            }}>{글제목[i]}
           
            </h4>
        
            
              <p>2월 17일 발행</p>
          </div>
          
        
          )
        })
      }
 
      
      {
    
       modal == true ?<Modal title={title} 글제목={글제목} /> : null
       

      }

    </div>
  );
}


function Modal(props){
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
    
    </div>
  )
}

export default App;
