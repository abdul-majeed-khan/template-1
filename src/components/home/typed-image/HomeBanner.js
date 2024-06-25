import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { Col, Container, Row } from "reactstrap";
import Typed from "typed.js";
import { WantToBuyOrRentHome } from "@/constValues/constValues";
import WhatAreYouLookingFor from "../../elements/WhatAreYouLookingFor";

const HomeBannerSection = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Live", "Work", "Wonder"],
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
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="home-section layout-1 layout-9 img-fluid bg-size bg-img background-style">
      <Container>
        <Row>
          <Col xxl="5" xl="6" lg="7">
            <div className="home-main arrow-light">
              <div className="home-content">
                <div>
                  <img src="/assets/images/signature/3.png" className="img-fluid" alt="" />
                  <h6>{WantToBuyOrRentHome}</h6>
                  <h1>
                    Find Better Places to <span ref={el}> Live</span>
                  </h1>
                  <Link href="/agent/submit-property" className="btn btn-gradient btn-pill">
                      submit property
                  </Link>
                  <WhatAreYouLookingFor />
                </div>
              </div>
            </div>
          </Col>
          <Col lg="6">
            <div className="layout-right-img ">
              <img src="/assets/images/layout-9.png" alt="" className="img-fluid bg-size bg-img background-style" />
            </div>
          </Col>
        </Row>
      </Container>
      <div className="snow-effect"></div>
    </section>
  );
};

export default HomeBannerSection;
