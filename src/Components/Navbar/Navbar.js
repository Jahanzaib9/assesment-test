// import React from "react";
import { Nav, Navbar, Container, Image, Button } from "react-bootstrap";
import logo from "../../Assets/logo.png";
import styles from "./Navbar.module.css";

function NavigationBar() {
  return (
    <Navbar
      style={{ zIndex: 100 }}
      collapseOnSelect
      expand="lg"
      variant="dark"
      className={styles["main-div"]}
    >
      <Container>
        <Navbar.Brand href="/">
          <div className={styles.flex}>
            <Image
              className={styles.logo_style}
              src={logo}
              alt="logo"
              height="28"
            />
            <span className={styles.logo_text}>
              <b>MBLK</b>
            </span>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ marginLeft: "50px" }}
            navbarScroll
          >
            <Nav.Link className={styles.text_weight} href="#action1">
              Intro Video
            </Nav.Link>
            <Nav.Link className={styles.text_weight} href="#action2">
              Referral Programs
            </Nav.Link>
            <Nav.Link className={styles.text_weight} href="#action3">
              Buy Now
            </Nav.Link>
            <Nav.Link className={styles.text_weight} href="#action4">
              MBLK Vision
            </Nav.Link>
            <Nav.Link className={styles.text_weight} href="#action5">
              Tokenomics
            </Nav.Link>
            <Nav.Link className={styles.text_weight} href="#action6">
              How to Buy
            </Nav.Link>
            <Nav.Link className={styles.text_weight} href="#action7">
              Press and Media
            </Nav.Link>
          </Nav>

          <Nav>
            <span className={styles.nav_btn}>CONNECT WALLET</span>

            <Button className={styles.nav_btn2} size={"sm"}>
              JOIN PRESALE
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
