import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import ScrollToTop from "react-scroll-to-top";
import Fade from 'react-reveal/Fade';


function App() {
  return (
    <>
    {/* scroll to top button */}
    <ScrollToTop smooth />

    {/* Navbar Area */}
    <Navbar collapseOnSelect expand="lg">
      <Navbar href="#home" className={styles.brand}>Z.E.H</Navbar>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
      </Nav>
    <Nav className={styles.navLinksArea}>
      <Nav.Link href="#" className={styles.navLink}>Home</Nav.Link>
      <Nav.Link href="#" className={styles.navLink}>About</Nav.Link>
      <Nav.Link href="#" className={styles.navLink}>Portfolio</Nav.Link>
      <Nav.Link href="#" className={styles.navLink}>Let's Chat</Nav.Link>

    </Nav>
      </Navbar.Collapse>
  </Navbar>

  {/* hero section */}

  <div className={styles.textContainer}>
  <Fade bottom>
    <h1>Hello, my name is Ziithe Ewen Hiwa.</h1>
    <h3>I aim to create innovative and sustainable solutions that positively impact people's lives.</h3>
    </Fade>

  </div>

  {/* My Taglines */}

  <h3 className={styles.tags}>Product Design | Innovation</h3>


    <section className={styles.about}>
      <div className={styles.aboutContainer}>

        <div className={styles.column1}>
          <Fade top>

            <img 
              className={styles.aboutImg}
              src="./about.png"
              loading="lazy"
              alt="Ziithe Ewen Hiwa"
              
            />
          </Fade>
        </div>


        <div className={styles.column2}>

        </div>


      </div>

    </section>



    
  </>
  );
}

export default App;
