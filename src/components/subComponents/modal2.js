import {useState} from "react";
import {Row, Col,Button, Modal, ProgressBar} from 'react-bootstrap';
import "react-circular-progressbar/dist/styles.css";


function ModalFormation2() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <style type="text/css">
          {`
            #ViewMore:focus {
              outline: none;
              box-shadow: none;
            }
          `}
        </style>
      <Button variant="link" id="ViewMore" onClick={handleShow} className="m-2" style={{color: "black", border: "none", textDecoration: "none", textAlign: "right"}}>
        Ver Proceso...
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cursos en proceso</Modal.Title>
        </Modal.Header>
        <Modal.Body>Javascript</Modal.Body>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>JavaScript Moderno Guía Definitiva Construye +15 Proyectos</h6>
              <ProgressBar striped animated now={40} label={`${40}%`}/>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>React - La Guía Completa: Hooks Context Redux MERN +15 Apps</h6>
              <ProgressBar striped animated now={60} label={`${60}%`}/>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>Next JS: Crea tu tienda online completa</h6>
              <ProgressBar striped animated now={10} label={`${10}%`}/>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>Masterclass: Web usando Next.js + TailwindCSS + Vercel</h6>
              <ProgressBar striped animated now={10} label={`${10}%`}/>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>React Native - Crea aplicaciones para Android y iOS c/ React</h6>
              <ProgressBar striped animated now={5} label={`${5}%`}/>
            </Col>
          </Row>
        <Modal.Body>Ruby</Modal.Body>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>Curso Completo Ruby - Desde las Bases hasta Rails</h6>
              <ProgressBar now={100} label={`${100}%`}/>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>Ruby Bootcamp - 100 Hands-On Exercises</h6>
              <ProgressBar striped animated now={5} label={`${5}%`}/>
            </Col>
          </Row>

        <Modal.Body>Bases de datos</Modal.Body>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>SQL Básico - Intermedio ¡Añade valor a tu CV en 2 horas!</h6>
              <ProgressBar striped animated now={5} label={`${5}%`}/>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>Postgresql y PgAdmin ( Diseño , Administración y Consultas)</h6>
              <ProgressBar striped animated now={5} label={`${5}%`}/>
            </Col>
          </Row>
        <Modal.Body>Complementarios</Modal.Body>
          <Row className="mb-3">
            <Col style={{paddingLeft: "30px", paddingRight: "30px"}}>
              <h6>Visual Studio Code Ultimate Course</h6>
              <ProgressBar now={100} label={`${100}%`}/>
            </Col>
          </Row>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{backgroundColor: "black", color: "white"}}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalFormation2