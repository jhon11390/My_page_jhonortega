import React from "react";
import {Row, Container, Col, Image, Figure, ProgressBar} from 'react-bootstrap'
import ModalFormation from './subComponents/modal.js'
import ModalFormation2 from './subComponents/modal2.js'

function Formation () {
  return (
    <Container id="Formation" style={{paddingTop: "100px"}}>
      <style type="text/css">
        {`
          .progress-bar {
            background-color: black;
          }
        `}
      </style>
      <Row>
        <Col className="row align-items-center">
          <div>
            <h1 className="text-center mb-5">Formacion</h1>
            
            <Row className="mb-5">

              <Col style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0", margin: "auto"}}>
                <Figure
                  style={{margin: "0"}}
                >
                  <Figure.Image
                    width={70}
                    height={70}
                    alt="171x180"
                    src="popayan.jpg"
                    style={{filter: "grayscale(100%)"}}
                  /> 
                </Figure>
              </Col>
              <Col sm={10}>
                <h6>Fundacion Universitaria de Popayan</h6>
                <h6>Titulo: Ingeniero Industrial 2013</h6>
                <h6>Año: 2013</h6>
                <ProgressBar  now={100} label={`${100}%`}/>
              </Col>

            </Row>
            <Row className="mb-3">

              <Col style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0", margin: "auto"}}>
                <Figure
                  style={{backgroundColor: "black", margin: "0"}}
                >
                  <Figure.Image
                    width={70}
                    height={70}
                    alt="171x180"
                    src="make.png"
                    style={{filter: "grayscale(100%)"}}
                  /> 
                </Figure>
              </Col>
              <Col sm={10}>
                <h6>Make It Real</h6>
                <h6>Titulo: Desarrollador web Ruby on Rails Full-StackDeveloper</h6>
                <h6>Año: 2020</h6>
                <ProgressBar  now={100} label={`${100}%`}/>
              </Col>
              <ModalFormation />
            </Row>

            <Row className="mb-5">

              <Col style={{display: "flex", justifyContent: "center", alignItems: "center", padding: "0", margin: "auto"}}>
                <Figure
                  style={{backgroundColor: "black", margin: "0"}}
                >
                  <Figure.Image
                    width={70}
                    height={70}
                    alt="171x180"
                    src="udemy.png"
                    style={{filter: "grayscale(100%)"}}
                  /> 
                </Figure>
              </Col>
              <Col sm={10}>
                <h6>Udemy</h6>
                <h6>Titulo: Cursos en desarrollo web</h6>
                <h6>Año: Cursos en procesos</h6>
                <ProgressBar striped animated now={100} label={`En proceso`}/>
              </Col>
              <ModalFormation2 />
            </Row>
            {/* <Row className="mb-3">

              <Col>
                <Figure>
                  <Figure.Image
                    width={40}
                    height={40}
                    alt="171x180"
                    src="udemy.png"
                  /> 
                </Figure>
              </Col>
              <Col sm={10}>
                <h6>Udemy / Titulo: JavaScript Moderno Guía Definitiva Construye +15 Proyectos</h6>
                <ProgressBar  now={40} label={`${40}%`}/>
              </Col>

            </Row>
            <Row className="mb-3">

              <Col>
                <Figure>
                  <Figure.Image
                    width={40}
                    height={40}
                    alt="171x180"
                    src="udemy.png"
                  /> 
                </Figure>
              </Col>
              <Col sm={10}>
                <h6>Udemy / Titulo: React - La Guía Completa: Hooks Context Redux MERN +15 Apps</h6>
                <ProgressBar  now={40} label={`${40}%`}/>
              </Col>

            </Row>
            <Row className="mb-3">

              <Col>
                <Figure>
                  <Figure.Image
                    width={40}
                    height={40}
                    alt="171x180"
                    src="udemy.png"
                  /> 
                </Figure>
              </Col>
              <Col sm={10}>
                <h6>Udemy / Titulo: Next JS: Crea tu tienda online completa</h6>
                <ProgressBar  now={10} label={`${10}%`}/>
              </Col>

            </Row> */}
          </div>
        </Col>
        <Col sm={5} className="d-none d-md-block">
          <Image src="jhon2.jpg" thumbnail className="border-0"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Formation;