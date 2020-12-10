import React, { Component } from "react";
import styled from "styled-components";
// import styled from "styled-components";
class Footer extends Component {
  render() {
    return (
      <NavWrapper>
        <div className="footer">
          Contact Me
          <a
            target="_blank"
            rel="noreferrer"
            class="btn btn-dark btn-social mx-1 logo-btn"
            href="https://github.com/Musweu10"
          >
            <i class="fab fa-fw fa-github"></i>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            class="btn btn-dark btn-social mx-1 logo-btn"
            href="https://www.instagram.com/musweu10/"
          >
            {" "}
            <i class="fab fa-fw fa-instagram "></i>
          </a>
          Copyright@musweumunyima2020
        </div>
      </NavWrapper>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainNavbar);
  .footer {
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    color: var(--mainWhite) !important;
    font-size: 0.8rem;
    text-transform: capitalize;
  }
`;
export default Footer;
