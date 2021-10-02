import React from "react";
import {Row, Container, Col, Card, Button} from 'react-bootstrap'

function Projects () {
  return (
    <Container className="mt-5" id="Projects" style={{paddingTop: "100px"}}>
      <style type="text/css">
        {`
          .viewProject:focus {
            outline: none;
            box-shadow: none;
          }
        `}
      </style>
      <Row>
        <h1 className="text-center mb-5">Proyectos</h1>
        <Col xs={12} md={3}>
          <Card style={{ width: '100%' }} className="text-center">
            <Card.Img variant="top" src="proyecto1-min.png" style={{filter: "grayscale(100%)"}}/>
            <Card.Body>
              <Card.Title>Mi primera pagina</Card.Title>
              <Card.Text>
                Uno de los primeros acercamientos hacia el desarrollo web, realizacion de mi primera pagina web estatica.
              </Card.Text>
              <Button className="viewProject" style={{color: "black", textDecoration: "none"}} variant="link" href="https://jhon11390.github.io/Studiodev/#home" target="_blank">Ver Proyecto...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card style={{ width: '100%' }} className="text-center">
            <Card.Img variant="top" src="proyecto2-min.png" style={{filter: "grayscale(100%)"}}/>
            <Card.Body>
              <Card.Title>Juego 21 cartas</Card.Title>
              <Card.Text>
                Reto de ingenio usando el lenguaje de javascript para la realizacion de un juego de 21.
              </Card.Text>
              <Button className="viewProject" style={{color: "black", textDecoration: "none"}}  variant="link" href="https://jhon11390.github.io/blackjack/" target="_blank">Ver Proyecto...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card style={{ width: '100%' }} className="text-center">
            <Card.Img variant="top" src="proyecto3-min.png" style={{filter: "grayscale(100%)"}}/>
            <Card.Body>
              <Card.Title>Calculadora basica</Card.Title>
              <Card.Text>
                Reto en proceso, de generar logica una calculadora basica con el lenguaje de javascript.
              </Card.Text>
              <Button className="viewProject" style={{color: "black", textDecoration: "none"}}  variant="link" href="https://jhon11390.github.io/calculadora/" target="_blank">Ver Proyecto...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card style={{ width: '100%' }} className="text-center">
            <Card.Img variant="top" src="proyecto4-min.png" style={{filter: "grayscale(100%)"}}/>
            <Card.Body>
              <Card.Title>Horarios personales 2021 {`(Puesto de trabajo)`}</Card.Title>
              <Card.Text>
                Proyecto realizado con con react, pagina basica para ver horarios del 2021.
              </Card.Text>
              <Button className="viewProject" style={{color: "black", textDecoration: "none"}}  variant="link" href="https://jhon11390.github.io/pph_horarios_react/" target="_blank">Ver Proyecto...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card style={{ width: '100%' }} className="text-center">
            <Card.Img variant="top" src="proyecto5-min.png" style={{filter: "grayscale(100%)"}}/>
            <Card.Body>
              <Card.Title>Super Blog</Card.Title>
              <Card.Text>
                Proyecto basico de un superblog realizado con el lenguaje ruby y su framework Ruby On Rails.
              </Card.Text>
              <Button className="viewProject" style={{color: "black", textDecoration: "none"}}  variant="link" href="https://morning-brushlands-71267.herokuapp.com/posts" target="_blank">Ver Proyecto...</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={3}>
          <Card style={{ width: '100%' }} className="text-center">
            <Card.Img variant="top" src="proyecto6-min.png" style={{filter: "grayscale(100%)"}}/>
            <Card.Body>
              <Card.Title>Ofertu {`(front-end)`}</Card.Title>
              <Card.Text>
                Primera experiencia laboral, realizacion de la parte front-end hecho en next.js.
              </Card.Text>
              <Button className="viewProject" style={{color: "black", textDecoration: "none"}}  variant="link" href="https://www.ofertu.co" target="_blank">Ver Proyecto...</Button>
            </Card.Body>
          </Card>
        </Col>
        
        
      </Row>
    </Container>
  )
}

export default Projects;