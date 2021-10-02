import React from "react";
import {Row, Container, Col, Image, Figure} from 'react-bootstrap'

function Header () {
  return (
    <Container id="Start" style={{marginTop: "0px", paddingTop: "100px"}}>
       <style type="text/css">
        {`
          #facebook:hover {
            transform: scale(1.3);
          }

          #twitter:hover {
            transform: scale(1.3);
          }

          #instagram:hover {
            transform: scale(1.3);
          }

          #github:hover {
            transform: scale(1.3);
          }

          #linkedin:hover {
            transform: scale(1.3);
          }

        `}
      </style>
      <Row className="text-center mb-5">
        <Col className="d-block d-md-none">
          <Image src="jhon3.1.png" width="180" height="180" roundedCircle />
        </Col>
      </Row>
      <Row>
        <Col className="row align-items-center">
          <div>
            <h1 className="text-center">Jhon Edinson Ortega López</h1>
            <p className="text-center">Ingeniero industrial y Ruby on Rails Full-Stack Developer</p>
            <div className="text-center">

              <Figure style={{marginRight: "10px", cursor: "pointer"}}>
                <a href="https://www.facebook.com/jhon.ortegalopez.7" style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                  <Figure.Image
                    id="facebook"
                    width={40}
                    height={40}
                    alt="171x180"
                    src="facebook.png"

                  />
                  <Figure.Caption>
                    Facebook
                  </Figure.Caption>
                </a>
                
              </Figure>

              <Figure style={{marginRight: "10px", cursor: "pointer"}}>
                <a href="https://twitter.com/Jhon11390" style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                  <Figure.Image
                    id="twitter"
                    width={40}
                    height={40}
                    alt="171x180"
                    src="twitter.png"
                  />
                  <Figure.Caption>
                    Twitter
                  </Figure.Caption>
                </a>

              </Figure>

              <Figure style={{marginRight: "10px", cursor: "pointer"}}>
                <a href="https://www.instagram.com/meljhon2/" style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                  <Figure.Image
                    id="instagram"
                    width={40}
                    height={40}
                    alt="171x180"
                    src="instagram.png"
                  />
                  <Figure.Caption>
                    Instagram
                  </Figure.Caption>
                </a>
              </Figure>

              <Figure style={{marginRight: "10px", cursor: "pointer"}}>
                <a href="https://github.com/jhon11390" style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                  <Figure.Image
                    id="github"
                    width={40}
                    height={40}
                    alt="171x180"
                    src="github.png"
                  />
                  <Figure.Caption>
                    Github
                  </Figure.Caption>
                </a>
              </Figure>

              <Figure style={{cursor: "pointer"}}>
                <a href="https://www.linkedin.com/in/jhon-ortega-89557a194/" style={{textDecoration: "none"}} target="_blank" rel="noreferrer">
                  <Figure.Image
                    id="linkedin"
                    width={40}
                    height={40}
                    alt="171x180"
                    src="linkedin.png"
                  />
                  <Figure.Caption>
                    Linkedin
                  </Figure.Caption>
                 </a> 
              </Figure>
            </div>
          </div>
        </Col>
        <Col sm={5} className="d-none d-md-block">
          <Image src="foto1.jpg" thumbnail className="border-0"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Header;