import {useState} from "react";
import {Row, Col,Button, Modal} from 'react-bootstrap'
import {
  CircularProgressbarWithChildren,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";


function ModalFormation() {
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
        Ver Temas Vistos...
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Temas Aprobados</Modal.Title>
        </Modal.Header>
        <Modal.Body>PROGRAMADOR APRENDIZ</Modal.Body>
          <Row className="text-center" style={{paddingLeft: "10px", paddingRight: "10px"}}>
            <Col>
              <CircularProgressbarWithChildren 
                value={100}
                styles={buildStyles({
                  pathColor: "black"
                })}  
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Html y Css</b></h7>
            </Col>
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Bootstrap versiones (3 y 4)</b></h7>
            </Col>
            
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Git y Github</b></h7>
            </Col>
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Ruby</b></h7>
            </Col>
          </Row>
        <Modal.Body>DESARROLLADOR WEB</Modal.Body>
          <Row className="text-center" style={{paddingLeft: "10px", paddingRight: "10px"}}>
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Http y Sinatra</b></h7>
            </Col>
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Ruby On Rails I</b></h7>
            </Col>
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Javascript</b></h7>
            </Col>
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Jquery y Ajax</b></h7>
            </Col>
            
          </Row>
        <Modal.Body>DESARROLLADOR WEB PROFESIONAL</Modal.Body>
          <Row className="text-center" style={{paddingLeft: "10px", paddingRight: "10px"}}>
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Ruby On Rails II</b></h7>
            </Col>
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>React y Redux</b></h7>
            </Col>
            <Col>
              <CircularProgressbarWithChildren 
                styles={buildStyles({
                  pathColor: "black"
                })} 
                value={100}
              >
                {/* Put any JSX content in here that you'd like. It'll be vertically and horizonally centered. */}
                
                <div style={{ fontSize: 12, marginTop: -5 }}>
                  <strong>100%</strong>
                </div>
              </CircularProgressbarWithChildren>
              <h7 style={{fontSize: "10px"}}><b>Express y Mongo DB (beta)</b></h7>
            </Col>
            <Col></Col>
            
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

export default ModalFormation