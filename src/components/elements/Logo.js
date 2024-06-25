import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/6.png" alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

const Logo2 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/5.png" alt="" className="img-fluid for-light" />
        <img src="/assets/images/logo/11.png" alt="" className="img-fluid for-dark" />
      </Link>
    </div>
  );
};

const Logo3 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/2.png" alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

const Logo4 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/1.png" alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

const Logo5 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/7.png" alt="" className="img-fluid for-light" />
        <img src="/assets/images/logo/12.png" alt="" className="img-fluid for-dark" />
      </Link>
    </div>
  );
};

const Logo6 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/4.png" alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

const Logo7 = () => {
  return (
    <div className="brand-logo">
      <Link href="/">
        <img src="/assets/images/logo/10.png" alt="" className="img-fluid for-light" />
        <img src="/assets/images/logo/1.png" alt="" className="img-fluid for-dark" />
      </Link>
    </div>
  );
};

const Logo8 = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img src="/assets/images/logo/footer-logo.png" alt="" className="img-fluid" />
      </Link>
    </div>
  );
};
const Logo9 = () => {
  return (
    <div className="logo">
      <Link href="/">
        <img src="/assets/images/logo/3.png" alt="" className="img-fluid" />
      </Link>
    </div>
  );
};

export { Logo, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9 };
