/**
 * It takes in an array of objects and returns a Slider component with the data from the array
 * @returns The LatestBlogSection component is being returned.
 */
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import { Col, Container, Row } from "reactstrap";
import { LatestBlog, proCity } from "@/constValues/constValues";
import { blog1 } from "@/data/slickSlider";
import NoSsr from "@/utils/NoSsr";

const LatestBlogSection = ({ value }) => {
  return (
    <section className="blog-section bg-comman-2">
      <Container>
        <Row>
          <Col>
            <div className="title-2 text-white">
              <h2>{LatestBlog}</h2>
              <p>{proCity}</p>
            </div>
            <NoSsr>
              <Slider className="blog-1" {...blog1}>
                {value &&
                  value.map((data, i) => (
                    <div key={i}>
                      <div className="blog-box">
                        <div className="img-box">
                          <img src={data.img} alt="" className="img-fluid" />
                        </div>
                        <div className="blog-content">
                          <span>{data.date}</span>
                          <h3>
                            <Link href="/pages/blog-detail-pages/left-sidebar">{data.titles}</Link>
                          </h3>
                          <p className="font-roboto">{data.details}</p>
                          <Link href="/pages/blog-detail-pages/left-sidebar" className="btn btn-gradient btn-pill btn-lg">
                            read more
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
              </Slider>
            </NoSsr>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestBlogSection;
