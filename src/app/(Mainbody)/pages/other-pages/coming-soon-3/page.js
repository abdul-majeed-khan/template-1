"use client";
import React from "react";
import { Container, Row } from "reactstrap";
import { Logo9 } from "@/components/elements/Logo";
import Img from "@/utils/BackgroundImageRatio";
import useTimer from "@/utils/useTimer";

const ComingSoon3 = () => {
  const [days, hours, minutes, seconds] = useTimer(new Date("dec 1, 2022 16:37:52").getTime());
  return (
    <div className='coming-soon comingsoon-countdown coming-left'>
      <Img src='/assets/images/inner-pages/coming-soon2.jpg' alt='' className='img-fluid bg-img' />
      <Container>
        <Row>
          <div className='col-xl-6 offset-xl-3 col-md-8 offset-md-2'>
            <div className='coming-soon-detail'>
              <div>
                <Logo9 />
                <h2 className='font-roboto'>
                  <span>Counter </span> site is coming soon...
                </h2>
                <div className='timer'>
                  <ul>
                    <li>
                      <span id='days'>{days}</span>days
                    </li>
                    <li>
                      <span id='hours'>{hours}</span>Hour
                    </li>
                    <li>
                      <span id='minutes'>{minutes}</span>min
                    </li>
                    <li>
                      <span id='seconds'>{seconds}</span>sec
                    </li>
                  </ul>
                </div>
                <form action='#' className='theme-form w-100'>
                  <div className='form-group'>
                    <input type='text' name='password' id='name' className='form-control' placeholder='Enter your email address' />
                    <button type='submit' className='btn btn-solid btn-flat'>
                      subscribe
                    </button>
                  </div>
                </form>
                <div className='social-coming'>
                  <ul>
                    <li>
                      <a href='https://www.facebook.com/'>
                        <i className='fab fa-facebook-f'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://twitter.com/'>
                        <i className='fab fa-twitter'></i>
                      </a>
                    </li>
                    <li>
                      <a href='https://account.google.com'>
                        <i className='fab fa-google-plus-g'></i>
                      </a>
                    </li>
                  </ul>
                  <p>Copyright 2022, All Right Reserved Sheltos </p>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ComingSoon3;
