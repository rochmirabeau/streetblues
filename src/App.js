import React, { Component } from 'react';
import { Footer, Carousel, Card, CardTitle,  Row, Col, Navbar, NavItem, Modal, Button }from 'react-materialize';
import logo from './logo.png';
import links from './components/Members/links.js';
import icons from './components/Members/icons.js';
import social from './components/Members/social.js';
import contact from './components/Contact/Contact.js'
import './App.css';


console.log(links)
class App extends Component {
  render() {
    return (
      <div className="container" >
        <Row>
          <h1 >Street Blues Family </h1>
        </Row>
        <Row >
          <Col s={10}>
            <Navbar className="black" brand='' right>
            <img src={logo} className="App-logo" alt="logo" />
              <NavItem >
                <Modal
                  header='Upcoming Shows'
                  bottomSheet
                  trigger={<Button className='purple' >Shows</Button>}>
                  <a className='black' href='https://www.facebook.com/events/493169004461362/'><h2 href='https://www.facebook.com/events/493169004461362/'>Black Heart 3 Charity Show at 191 Toole</h2></a>
                  <a href='https://www.facebook.com/events/493169004461362/'><h3 >Sep 13</h3></a>
                </Modal> 
              </NavItem>
              <NavItem >
                <Modal
                  header=''
                  fixedFooter
                  trigger={<Button className='purple' >The Family</Button>}>
      
                    <Row >
      <div className="container">
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[3]} waves='light'/>}
                          title="Rey Murf"
                          reveal={<p>Vocals, H.N.I.C.</p>}>
                          <p><a href=""> </a></p>
                        </Card>
                      </Col>
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[0]} waves='light'/>}
                          title="Zaya Briggs"
                          reveal={<p>Drums</p>}>
                          <p><a href=""> </a></p>
                        </Card>
                      </Col>
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[4]} waves='light'/>}
                          title="Mick Burton"
                          reveal={<p>Sax</p>}>
                          <p><a href=""> </a></p>
                        </Card>
                      </Col>
      </div>
      <div className="container">
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[9]} waves='light'/>}
                          title="Joe Novelli"
                          reveal={<p>Slide guitar, Synthesizer, Vocals</p>}>
                          <p><a href=""> </a></p>
                        </Card>
                      </Col>
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[6]} waves='light'/>}
                          title="Mike Moynihan"
                          reveal={<p>Saxophone</p>}>
                          <p><a href=""> </a></p>
                        </Card>
                      </Col>
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[7]} waves='light'/>}
                          title="Pat Morris"
                          reveal={<p>Bass</p>}>
                          <p><a href=""> </a></p>
                        </Card>
      <br />
                      </Col>
      </div>
      <div className="container">
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[1]} waves='light'/>}
                          title="Swansuit"
                          reveal={<p>Guitar, Vocals, Vocoder</p>}>
                          <p><a href=""> </a></p>
                        </Card>
                      </Col>
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[8]} waves='light'/>}
                          title="Kalvin Jarvis"
                          reveal={<p>Vocals</p>}>
                          <p><a href=""> </a></p>
                        </Card>
                      </Col>
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[5]} waves='light'/>}
                          title="Jai Thomas"
                          reveal={<p>Guitar</p>}>
                          <p><a href=""> </a></p>
                        </Card>
      <br />
                      </Col>
      </div>
      <div className="container">
                      <Col m={4} s={12}>
                        <Card header={<CardTitle reveal image={icons[2]} waves='light'/>}
                          title="Roch Kiss"
                          reveal={<p>Vocals, Samples</p>}>
                          <p><a href=""> </a></p>
                        </Card>
                      </Col>
      </div>
                    </Row>
                </Modal> 
              </NavItem>
              <NavItem>
                <Modal
                  header='Get in touch with the Family'
                  bottomSheet
                  trigger={<Button className='purple' >Contact</Button>}>

                  <Row>
                    <Col s={4} m={4}>
                      <a href={contact.email}>
                        <img src={social.email} />
                      </a>
                    </Col>
                    <Col s={4} m={4}>
                      <a href= {contact.facebook}> 
                        <img src={social.facebook} />
                      </a>
                    </Col>
                    <Col s={4} m={4}>
                      <a href={contact.instagram}>
                         <img src={social.instagram} />
                      </a>
                    </Col>
                  </Row>
                </Modal> 
              </NavItem>
            </Navbar>
          </Col>
        </Row>
        <Row >
          <Col m={12} s={12} >
            <Carousel options={{ fullWidth: true, indicators: true }}  images={links} />
          </Col>
        </Row>
      <Row>
        <Footer copyrights="Copyright 2018 Street Blues Family LLC"
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href={contact.instagram}>Instagram</a></li>
              <li><a className="grey-text text-lighten-3" href={contact.facebook}>Facebook</a></li>
              <li><a className="grey-text text-lighten-3" href={contact.email}>Booking</a></li>
            </ul>
          }
          className='purple'
        >
            <h5 className="white-text">Stay in Touch</h5>
            <p className="grey-text text-lighten-4"></p>
      </Footer>;
      </Row>
      </div>
    );
  }
}

export default App;
