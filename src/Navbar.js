import React from 'react'
import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-scroll";

function NavbarSection() {
    return(
        <>
        {/* Navbar Area */}
            <Navbar collapseOnSelect expand="lg" sticky="top" className={styles.topNav}>
                <Navbar href="#home" className={styles.brand}>Z.E.H</Navbar>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className={styles.navLinksArea}>

                <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <Nav.Link href="#section1" className={styles.navLink}>Home</Nav.Link>
                </Link>


                <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <Nav.Link className={styles.navLink}>About</Nav.Link>
                </Link>

                <Link
                    activeClass="active"
                    to="section3"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                <Nav.Link className={styles.navLink}>Portfolio</Nav.Link>

                </Link>

                <Link
                    activeClass="active"
                    to="section4"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >

                <Nav.Link className={styles.navLink}>Let's Chat</Nav.Link>
                </Link>

                </Nav>
                </Navbar.Collapse>
            </Navbar>


        </>
    )
}

export default NavbarSection;