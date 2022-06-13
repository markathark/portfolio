import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Image from "../components/images/logo.svg";

const Wrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  padding: 0px 20%;
  height: 20vh;
  top: 0;
  left: 0;
  z-index: 3;
  transition: 0.2s;
  &.active {
    background-color: black;
    height: 8vh;
    transition: 1s;
  }
  @media (max-width: 1200px) {
    width: 90%;
    padding: 0 5%;
  }
  @media screen and (max-width: 768px) {
    width: 80%;
    padding: 0 10%;
    height: 20vh;
  }
`;

const Menu = styled.ul`
  display: flex;
  column-gap: 30px;
  height: 100%;
  align-items: center;
`;

const MenuLink = styled.li`
  display: flex;
  position: relative;
  height: 8vh;
  align-items: center;
`;

const Page = styled.span`
  color: white;
  display: inline-block;
  transform: none;
  transition: 1s;
  &:after {
    content: "";
    position: absolute;
    top: 25px;
    left: 0;
    width: 0px;
    height: 2px;
    background-color: white;
  }
  &:hover:after {
    width: 100%;
    transition: 1s;
  }
  &:hover {
    transform: translateY(-3px);
  }
`;

const Logo = styled.img`
  height: 1rem;
`;

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);

    return () => {
      window.removeEventListener("scroll", changeBackground);
    };
  }, [window.scrollY]);

  return (
    <Wrapper className={navbar ? "active" : null}>
      <Link to="/">
        <Logo src={Image} />
      </Link>

      <Menu>
        <MenuLink>
          <a href="/#web">
            <Page>Web</Page>
          </a>
        </MenuLink>
        <MenuLink>
          <a href="/#design">
            <Page>Design</Page>
          </a>
        </MenuLink>
        <MenuLink>
          <Link to="/about">
            <Page>About</Page>
          </Link>
        </MenuLink>
      </Menu>
    </Wrapper>
  );
};

export default Navbar;
