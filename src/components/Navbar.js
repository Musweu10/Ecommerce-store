import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/shop.svg";
// import styled from "styled-components";
import { ButtonContainer2 } from "./Button";
class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-sm sticky-top navbar-dark px-sm-5">
        {/* Icons made by 
        <a href="https://www.flaticon.com/authors/freepik"
         title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 
        title="Flaticon"> www.flaticon.com</a> */}
        <Link to="/">
          <img
            src={logo}
            alt="store"
            className="navbar-brand"
            style={{
              width: 60,
              height: 60,
            }}
          />
        </Link>
        <ul className="navbar-nav align-items-center text-logo">
          <li className="nav-item ml-5 ">
            <Link to="/" className="nav-link">
              Estore
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer2 navcart>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            cart
          </ButtonContainer2>
        </Link>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainNavbar);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
export default Navbar;
