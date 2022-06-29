import React from "react";
import Banner from "../../components/Banner";
import {
  Wrapper,
  Body,
  Skills,
  List,
  Page,
  Links,
  Desc,
  Image,
} from "../../components/styles/Body";

import WhatchWeb from "../../components/images/whatch/whatch-web.png";
import Whatch1 from "../../components/images/whatch/whatch_1.png";
import Whatch2 from "../../components/images/whatch/whatch_2.png";

const Whatch = () => {
  return (
    <Wrapper>
      <Banner title="Whatch" image={WhatchWeb} />
      <Body>
        <Desc>
          <Links>
            <Page>
              <a
                href="https://github.com/markathark/whatch"
                target="_blank"
                rel="noreferrer"
              >
                View Repository →
              </a>
            </Page>
            <Page>
              <a
                href="https://whatch-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                View Live →
              </a>
            </Page>
          </Links>
          <br />
          <br />
          Whatch is web app to search for a movie or tv show to watch! Users can
          look around popular shows, and even search for a movie or tv show and
          read more about them. <br />
          <br />
          <ul>
            <li>
              Parsed data from a Movie/TV API and designed a front-end to allow
              users to search for movies or tv shows, browse popular shows, and
              read more details
            </li>
          </ul>
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Web / UI Design</li>
            <li>Web Development</li>
            <li>API</li>
          </List>
          <List>
            <li>Tools</li>

            <li>HTML, SCSS, JS</li>
            <li>Heroku</li>
            <li>VSCode</li>
          </List>
        </Skills>
        <Image src={WhatchWeb} />
        <Image src={Whatch1} />
        <Image src={Whatch2} />
      </Body>
    </Wrapper>
  );
};

export default Whatch;
