import React from "react";
import {Row, Container, Col, Carousel} from 'react-bootstrap'

function About () {
  return (
    <Container id="About-me" style={{paddingTop: "100px"}}>
       <style type="text/css">
        {`
          .forma {
            shape-outside: url(jhon.png);
            shape-image-threshold: 0.5;
            shape-margin: 20px;
            float: left;
          }
        `}
      </style>
      <Row>
        <Col sm={5} className="d-none d-md-block">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jhon.png"
                alt="First slide"
              />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jhonslider.png"
                alt="Second slide"
              />

              {/* <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="jhon3.png"
                alt="Third slide"
              />

              {/* <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col className="row align-items-center">
          <div>
            <h1 className="text-center">Acerca de mi</h1>
            <img className="forma d-block d-md-none" alt="Imagen Jhon Ortega" src="jhon3.11.png" width="180" height="180" style={{borderRadius: "90px"}}/>
            <p className="text-center mb-4">Egresado de ingeniería Industrial en formación
              humana, académica y laboral, enfocada hacia
              el desarrollo e implementación de propuestas
              útiles en el campo de la productividad, con
              conocimientos en el manejo de maquinarias y
              mantenimiento preventivo, conocimientos en
              logística y planeación, actualmente con cursos
              en implementación de sistemas de calidad,
              contando con bases de contabilidad general
              básica. Con amplia visión para el beneficio
              tanto colectivo como personal con excelentes
              valores como la disciplina, honestidad,
              honradez, responsabilidad solidaridad y
              respeto por las personas. Habilidad para
              trabajar en equipo en la toma de decisiones y
              capacidad de liderazgo orientado a obtener y
              maximizar excelentes resultados, contando
              también con excelentes manejos dela
              plataforma informática en los Programas
              Microsoft: Excel, Word, PowerPoint y Access.
              Actualmente en formación en tecnologías de
              desarrollo web con las tecnologías (HTML, CSS,
              JavaScript, React, Ruby y Ruby on Rails),
              conocimientos que he venido aplicando en
              aplicaciones web como lo es www.ofertu.co y
              en algunas otras.
            </p>
          </div>
          <div style={{display: "flex", justifyContent: "end"}}>
            <img
              src="logojhon2.png"
              width="120"
              style={{display: "block"}}
              alt="React Bootstrap logo"
            />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default About;