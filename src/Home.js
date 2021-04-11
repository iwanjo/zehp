import styles from './App.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarSection from './Navbar';
import ScrollToTop from "react-scroll-to-top";
import Fade from 'react-reveal/Fade';
import { Link }	from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col';
import Contact from './Contact';
// import Cabs from './case-studies/Cabs';
// import TravelMalawi from './case-studies/TravelMalawi';


function Home() {
  return (
    <>
    
    {/* scroll to top button */}
    <ScrollToTop smooth />
    <div className={styles.body}>
    <NavbarSection />

    
  {/* hero section */}

  <div className={styles.textContainer} id="section1">
  <Fade bottom>
    <h1>Hello, my name is Ziithe Ewen Hiwa.</h1>
    <h3>I aim to create innovative and sustainable solutions that positively impact people's lives.</h3>
    </Fade>

  </div>

  {/* My Taglines */}

  <h3 className={styles.tags}>Product Design | Innovation</h3>


    <section className={styles.about} id="section2">
      <div className={styles.aboutRow}>

        <div className={styles.aboutColumn1}>
          <Fade top>

            <img 
              className={styles.aboutImg}
              src="./about.png"
              loading="eager"
              alt="Ziithe Ewen Hiwa"
            />
          </Fade>
        </div>


        <div className={styles.aboutColumn2}>
          <h1 className={styles.bioTitle}>Bio</h1>
          <p className={styles.bioText}>I am a budding Computer Scientist, born and raised in Malawi but currently in my penultimate year of study at ALU in Rwanda.  
          I’ve had a bit of a non-linear career trajectory; wiggling from curriculum design to communications, user experience design, digital marketing and web development. All my explorations have brought me to my current interest; an intersection and study of people and tech; product design, development and management. 
          I am currently learning, exploring and looking for opportunities to grow in this field.</p>

          <h1 className={styles.missionTitle}>Current Mission</h1>
          <h5 className={styles.passionTags}>People. Problem Solving. Innovation</h5>
          <p className={styles.passionText}>My passions and personal mission fall at the intersection of these three. I have explored different skillsets and industries in my career and academic journey thus far. One thing has stood out; I want to solve problems and create innovative solutions that positively impact people's lives across diverse industries.</p>
          
          <button className={styles.downloadBtn}><i class="fa fa-download" ></i><span>Download Resume</span></button>

          
        </div>


      </div>

    </section>

    <section className={styles.portfolio} id="section3">
        <h1 className={styles.portfolioTitle}>Portfolio</h1>
        <Container>
            <Row>
                <Col sm={true}>
                    <Fade bottom>
                        <div className={styles.portfolioImg}>
                            <Link to="/265Cabs">
                            <img src="/265Cabs.png" alt="" className={styles.imageImg}></img>
                                <div className={styles.imageOverlay}>
                                    <div className={styles.imageTitle}>+265Cabs</div>
                                    <p className={styles.imageDescription}>A design and prototype for A Cab Booking software for Malawi.</p>
                                </div>
                            </Link>

                        </div>
                    </Fade>
                </Col>
                <Col sm={true}>
                <Fade top>
                        <div className={styles.portfolioImg}>
                            <Link to="/travel-malawi">
                            <img src="/travel-malawi.jpeg" alt="" className={styles.imageImg2}></img>
                                <div className={styles.imageOverlay}>
                                    <div className={styles.imageTitle}>Travel Malawi</div>
                                    <p className={styles.imageDescription}>A Case Study for a travel application for Malawi.</p>
                                </div>
                            </Link>

                        </div>
                    </Fade>
                </Col>
            </Row>

        </Container>

        <Container>
            <Row>
                <Col sm={true}>
                    <Fade top>
                        <div className={styles.portfolioImg}>
                            <Link to="/furniture">
                            <img src="/furniture.jpg" alt="" className={styles.imageImg}></img>
                                <div className={styles.imageOverlay}>
                                    <div className={styles.imageTitle}>Kuza</div>
                                    <p className={styles.imageDescription}>A Case Study for a furniture store in Malawi</p>
                                </div>
                            </Link>

                        </div>
                    </Fade>
                </Col>
                <Col sm={true}>
                <Fade bottom>
                        <div className={styles.portfolioImg}>
                            <Link to="/jobs">
                            <img src="/work2.svg" alt="" className={styles.imageImg2}></img>
                                <div className={styles.imageOverlay}>
                                    <div className={styles.imageTitle}>Fuzula</div>
                                    <p className={styles.imageDescription}>A Case Study for a mobile application providing opportunities to job seekers in Malawi.</p>
                                </div>
                            </Link>

                        </div>
                    </Fade>
                </Col>
            </Row>

        </Container>

    </section>

    <div id="section4">
    <Contact />
    </div>
    


    </div>
  </>
  );
}

export default Home;
