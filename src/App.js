import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function App() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top">
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
    

  );
}

export default App;
