import React from "react";
import {Row, Container, Col, Figure} from 'react-bootstrap'

function Contact () {
  return (
    <Container id="Contact" className="mt-5" style={{backgroundColor: "black", color: "white"}}>
      <Row>
        <Col className="text-center m-5 p-5">
          <Figure>
            <Figure.Image
              width={350}
              height={350}
              alt="350x350"
              src="logoblanco.png"
            />
            <Figure.Caption>
              Si la vida te pone obstáculos, tu reto es superarlos.
            </Figure.Caption>
          </Figure>
        </Col>
      </Row>
      <Row className="text-center">
        <Col className="mb-4">
          <h4 style={{textDecoration: "underline"}}>Contacto</h4>
          <p><img src="email .png" alt="email" width="20"/> meljhon2@jhonortega.com</p>
          <p><img src="telephone .png" alt="telephone" width="20"/> 313-819-74-24</p>
          <p><img src="placeholder.png" alt="placeholder" width="20"/> Bogotá, Colombia</p>
        </Col>
        <Col sm={12} md={6}>
          <h4 style={{textDecoration: "underline"}}>Redes Sociales</h4>
          <div>

            <div className="text-center">

              <Figure style={{marginRight: "10px", cursor: "pointer"}}>
                <Figure.Image
                  width={40}
                  height={40}
                  alt="171x180"
                  src="facebook.png"
                  style={{filter: "invert(100%)"}}
                />
                <Figure.Caption>
                  Facebook
                </Figure.Caption>
              </Figure>

              <Figure style={{marginRight: "10px", cursor: "pointer"}}>
                <Figure.Image
                  width={40}
                  height={40}
                  alt="171x180"
                  src="twitter.png"
                  style={{filter: "invert(100%)"}}
                />
                <Figure.Caption>
                  Twitter
                </Figure.Caption>
              </Figure>

              <Figure style={{marginRight: "10px", cursor: "pointer"}}>
                <Figure.Image
                  width={40}
                  height={40}
                  alt="171x180"
                  src="instagram.png"
                  style={{filter: "invert(100%)"}}
                />
                <Figure.Caption>
                  Instagram
                </Figure.Caption>
              </Figure>

              <Figure style={{marginRight: "10px", cursor: "pointer"}}>
                <Figure.Image
                  width={40}
                  height={40}
                  alt="171x180"
                  src="github.png"
                  style={{filter: "invert(100%)"}}
                />
                <Figure.Caption>
                  Github
                </Figure.Caption>
              </Figure>

              <Figure style={{cursor: "pointer"}}>
                <Figure.Image
                  width={40}
                  height={40}
                  alt="171x180"
                  src="linkedin.png"
                  style={{filter: "invert(100%)"}}
                />
                <Figure.Caption>
                  Linkedin
                </Figure.Caption>
              </Figure>
            </div>
          </div>
        
        </Col>
      </Row>
      <hr></hr>
      <p className="text-center" style={{marginBottom: "0px"}}>Desarrollado por @jhonortega</p>
    </Container>
  )
}

export default Contact;