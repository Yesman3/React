
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useState} from 'react';
import data from './data.js';



function App() {

  let [ shoes ] = useState(data);
  let [글제목,글제목변경] = useState(0,0,0);
  

  return (
    <div className="App">
      
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      
    
      
      <div className="container">
        <div className="row">

            {
              [1,2,3].map(function (a, i){
                return(
                  <div className="col-md-4" key={i}>
                  <img src="https://codingapple1.github.io/shop/shoes2.jpg" width="80%"/>
                  <h4>{shoes[i].title}</h4>
                  <p>{shoes[i].price}</p>
                  </div>
                )
              })
            }


          </div>
        </div> 

    </div>
    
  );
}


export default App;
