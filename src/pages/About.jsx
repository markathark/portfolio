import React from "react";

import Banner from "../components/Banner";
import {
  Wrapper,
  Body,
  Skills,
  List,
  Page,
  Links,
  Desc,
} from "../components/styles/Body";
import Mark from "../components/images/about/markariola.jpg";

import {
  RiGithubLine,
  RiInstagramLine,
  RiLinkedinBoxLine,
} from "react-icons/ri";

const About = () => {
  return (
    <Wrapper>
      <Banner title="About" image={Mark} />
      <Body>
        <Desc>
          Mark Ariola loves developing and designing digitally. With an initial
          background in marketing and design, and the motivation to create, he's
          expanded his skillset to development.
          <br />
          <br />
          Developing and creating a better and more intuitive user experience
          and design has become a main goal from previous collaborations with
          different brand and organizations.
          <br />
          <br />
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
              <a href="mailto:ariolamark@gmail.com.com">Say Hello → </a>
            </Page>
          </Links>
        </Desc>
        <Skills>
          <List>
            <li>Skills</li>
            <li>Web Development</li>
            <li>Graphic Design</li>
            <li>UI/UX Design</li>
            <li>Marketing</li>
            <li>Branding</li>
            <li>Illustration</li>
            <li>Video</li>
          </List>
          <List>
            <li>Tools</li>
            <li>VS Code</li>
            <li>Adobe Creative Suite</li>
            <li>Figma</li>
            <li>Git/GitHub</li>
          </List>
          <List>
            <li>Languages/Frameworks</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>React</li>
            <li>Mongoose</li>
            <li>Express</li>
            <li>NodeJS</li>
            <li>SCSS</li>
            <li>Styled Components</li>
          </List>
        </Skills>
      </Body>
    </Wrapper>
  );
};

export default About;
