import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import styles from './App.module.css';


function Contact() {
    return(
        <>
            <div className={styles.footerSection}>
            <div className={styles.footerContent}>
                <h4>You can get in touch with me through:</h4>
                <Container>
                    <Row>
                        <Col sm>
                            <a href="mailto:ziitheh@gmail.com" target="_blank" rel="noreferrer"><img src="./email.png" alt="Email Icon"></img></a>
                        </Col>
                        <Col sm>
                        <a href="https://www.linkedin.com/in/ziitheewenhiwa/" target="_blank" rel="noreferrer"><img src="./linkedin.png" alt="LinkedIn Icon"></img></a>

                        </Col>
                        <Col sm>
                        <a href="https://github.com/Ziithe" target="_blank" rel="noreferrer"><img src="./github.png" alt="GitHub Icon"></img></a>

                        </Col>
                    </Row>
                </Container>

            </div>

            <div className={styles.footerBtm}>
                <p>Copyright &copy; 2021 Ziithe Ewen Hiwa</p>

            </div>

    </div>
        </>
    )
}

export default Contact;