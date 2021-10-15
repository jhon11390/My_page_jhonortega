import Header from './components/Header';
import Menu from './components/Menu';
import About from './components/About';
import Formation from './components/Formation';
import Projects from './components/Projects';
import Sentence from './components/Sentence';
import Contact from './components/Contact';
import {Nav, Button} from 'react-bootstrap'

function App() {
  
  return (
    <>
      <style type="text/css">
        {`
          .up_GO {
            height: 50px;
            position: sticky;
            top: 90vh;
            z-index: 4;
            text-align: right;
            padding-right: 0px;
          }

          .up_GO_sub {
            display: none;
          }

          .hide {
            display: none;
            
          }

          .show {
            display: block;
          }

        `}
      </style>
      <script>
       
      </script>
      <Menu />
      <Header />

      <div className="up_GO">
        <Nav.Link href="#Start" className="up_GO_sub" style={{paddingRight: "0px"}}>
          <Button variant="dark" style={{borderRadius: "50%", width: "50px", height: "50px"}} >
            <img src="flecha.png" alt="flecha arriba" width="100%" style={{filter: "invert(100%)"}}/>
          </Button>
        </Nav.Link>
      </div>
      
      <About />
      <Formation />
      <Projects />
      <Sentence />
      <Contact />
    </>
   
  );
}

export default App;
