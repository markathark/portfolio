import React from "react";
import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
  RiMailLine,
} from "react-icons/ri";
import { Page, Links } from "./styles/Body";
import styled from "styled-components";

const FooterContent = styled.div`
  margin-top: 5vh;
  display: flex;
  background-color: #ededed;
  width: 100%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
  @media screen and (max-width: 768px) {
    & > div:nth-child(2) {
      display: none;
    }
  }
`;

const Message = styled.div``;

const Footer = () => {
  return (
    <FooterContent>
      <Body>
        <Message>Designed and Developed by Mark Ariola.</Message>
        <Links>
          <Page>
            <a
              href="https://www.linkedin.com/in/markariola/"
              target="_blank"
              rel="noreferrer"
            >
              <RiLinkedinBoxLine />
            </a>
          </Page>
          <Page>
            <a
              href="https://www.instagram.com/markathark"
              target="_blank"
              rel="noreferrer"
            >
              <RiInstagramLine />
            </a>
          </Page>
          <Page>
            <a
              href="https://github.com/markathark/"
              target="_blank"
              rel="noreferrer"
            >
              <RiGithubLine />
            </a>
          </Page>

          <Page>
            <a href="mailto:ariolamark@gmail.com.com">
              <RiMailLine />
            </a>
          </Page>
        </Links>
      </Body>
    </FooterContent>
  );
};

export default Footer;
