/**
 * It creates a new Typed instance, passing in the ref to the element we want to type in, and the
 * options we want to use
 * @returns A function
 */
import React from "react";
import Typed from "typed.js";
import { useEffect, useRef } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import Link from "next/link";
import WhatAreYouLookingFor from "../../elements/WhatAreYouLookingFor";
import { VideoDetail, WantToBuyOrRentHome } from "@/constValues/constValues";

const HomeBannerSection = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Much is My House Worth ?"],
      stringsElement: null,
      typeSpeed: 120,
      backSpeed: 30,
      showCursor: false,
      loop: true,
      cursorChar: "|",
      attr: null,
      contentType: "html",
      callback: function () {},
      preStringTyped: function () {},
      onStringTyped: function () {},
      resetCallback: function () {},
    });
    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home-section layout-5">
      <Container fluid={true}>
        <Row>
          <Col xl="8" md="11">
            <div className="home-main">
              <div className="home-content">
                <div>
                  <img src="/assets/images/signature/2.png" className="img-fluid m-0" alt="" />
                  <h6>{WantToBuyOrRentHome}</h6>
                  <h1>
                    How <span ref={el}></span>
                  </h1>
                  <Row>
                    <Col xl="8">
                      <p>{VideoDetail}</p>
                    </Col>
                  </Row>
                  <Link href="/agent/submit-property" className="btn btn-lg btn-gradient btn-pill">
                      submit property
                  </Link>
                  <WhatAreYouLookingFor />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="decor-image">
        <img src="/assets/images/shape.png" alt="" className="img-fluid" />
      </div>
    </section>
  );
};

export default HomeBannerSection;
