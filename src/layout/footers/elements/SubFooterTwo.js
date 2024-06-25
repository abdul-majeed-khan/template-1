import Link from "next/link";
import React from "react";
import { Container, Row } from "reactstrap";

const SubFooterTwo = () => {
  return (
    <div className="sub-footer footer-light">
      <Container>
        <Row>
          <div className="col-xl-6 col-md-6">
            <div className="copy-right">
              <p className="mb-0">Copyright 2022, All Right Reserved Sheltos</p>
            </div>
          </div>
          <div className="col-xl-6 col-md-6 text-end">
            <ul className="sub-footer-link">
              <li>
                <Link href="/home/corporate">Home</Link>
              </li>
              <li>
                <Link href="/pages/other-pages/terms-&-conditions">Terms</Link>
              </li>
              <li>
                <Link href="/pages/user-panel/privacy">Privacy policy</Link>
              </li>
              <li>
                <Link href="/contact/contact-us-2">Contact</Link>
              </li>
            </ul>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default SubFooterTwo;
