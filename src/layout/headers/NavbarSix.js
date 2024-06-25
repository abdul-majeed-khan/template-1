import React from "react";
import { Container } from "reactstrap";
import MainNav from "./elements/MainNav";

const NavbarSix = () => {
  return (
    <header className='header-4 header-centered top-bar'>
      <Container>
        <div className='row top-content p-0'>
          <div className='col'>
            <div className='menu'>
              <MainNav center={true} />
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default NavbarSix;
