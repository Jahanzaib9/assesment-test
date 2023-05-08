import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import styles from "./index.module.css";
import Progressbar from "./Progressbar";

export const Homepage = () => {
  return (
    <div className={styles["primary_div"]}>
      <Container className={styles["main_grid"]}>
        <Row>
          <Col sm={12} xs={12} md={8} className={styles["first_col"]}>
            <h2>
              <b>
                Get in Early on the
                <br /> $MBLK Pre-Sale
              </b>
            </h2>
            <p>
              <b>$MBLK</b> is an ERC20 utility token on the{" "}
              <b>Ethereum network</b>
              that serves as the main in-game currency in{" "}
              <b>
                Legends
                <br /> of Bezogia
              </b>
              . Developed by Zogi Labs, $MBLK offers players and investors a
              unique opportunity to be a part of the
              <br />
              <b>future of gaming and blockchain technology</b>.
            </p>
            <div className={styles["scroll-bar"]}>
              <Progressbar value={84.85} />
              <div className={styles["parent-div"]}>
                <div className={styles["first-div"]}>
                  <span>486,432,431</span> Tokens Sold
                </div>
                <div className={styles["second-div"]}>
                  <span>58,587,431</span> Remaining
                </div>
              </div>
              <div className={styles["final-comp"]}>
                <div className={styles["flex"]}>
                  <div className={styles["grid-div"]}>
                    <span>STAGE 1 PRICE: $0.014 USDT = 1$MBLK</span>
                    <span>NEXT STAGE PRICE: $0.015 USDT = 1$MBLK</span>
                  </div>
                  <Button>
                    <b>BUY TOKENS</b>
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
