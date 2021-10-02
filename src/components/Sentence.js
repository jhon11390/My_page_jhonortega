import React from "react";
import {Row, Container, Col, Image} from 'react-bootstrap'

function Sentence () {
  return (
    <Container className="mt-5">
      <Row>
        <Col className="row align-items-center">
          <div>
            <blockquote>

              <p style={{fontSize: "25px"}}><b>Si esperas a que llegue el momento perfecto, acabarás esperando toda tu vida. Es mejor que cojas lo que tienes y empieces ya.</b></p>

            </blockquote>

            <p>— Goerge Herbert</p>
          </div>
        </Col>
        <Col sm={5}>
          <Image src="imagesentence.jpg" thumbnail className="border-0"/>
        </Col>
      </Row>
    </Container>
  )
}

export default Sentence;