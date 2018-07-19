import React, { Component } from 'react';
import { Row, Slider, Slide, Col, Navbar, NavItem, Modal, Button }from 'react-materialize';
import logo from './logo.png';
import background from './thefam.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" >
      <Row>
      <h1 >Street Blues Family </h1>
      </Row>
      <Row >
      <Col s={10}>
      <Navbar class="Navbar" className="black" brand='welcome to the Family' right>
      <img src={logo} className="App-logo" alt="logo" />
      <NavItem >
      <Modal
      header='Tour info coming soon!'
      bottomSheet
      trigger={<Button className='purple' >Tour</Button>}>
      </Modal> 
      </NavItem>
      <NavItem >
      <Modal
      header='Family Bio coming soon!'
      bottomSheet
      trigger={<Button className='purple' >The Family</Button>}>
      </Modal> 
      </NavItem>
      <NavItem>
      <Modal
      header='Get in touch with the Family'
      bottomSheet
      trigger={<Button className='purple' >Contact</Button>}>

      <Row>
      <Col s={12} m={4}>
      <Button className='purple' waves='light' href='mailto:streetbluesfamilyoficl@gmail.com'>Email</Button>
      </Col>
      <Col s={12} m={4}>
      <Button className='purple' waves='light' href='https://www.facebook.com/streetbluesfam'>Facebook</Button>
      </Col>
      <Col s={4} m={4}>
      <Button className='purple' waves='light' href='https://www.instagram.com/streetbluesfamilyofficial'>Instagram</Button>
      </Col>
      </Row>
      </Modal> 
      </NavItem>
      </Navbar>
      </Col>
      </Row>
      <Row>
      <Col s={10}>
      <Slider> 
      <Slide src={background} >
      </Slide>
      </Slider>
      </Col>
      </Row>
      </div>
    );
  }
}

export default App;
