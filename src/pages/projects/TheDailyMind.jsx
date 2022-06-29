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

import Daily from "../../components/images/thedailymind/thedailymind-web.png";
import Daily1 from "../../components/images/thedailymind/thedailymind_1.png";
import Daily2 from "../../components/images/thedailymind/thedailymind_2.png";
import Daily3 from "../../components/images/thedailymind/thedailymind_3.png";

const TheDailyMind = () => {
  return (
    <Wrapper>
      <Banner title="The Daily Mind" image={Daily} />
      <Body>
        <Desc>
          <Links>
            <Page>
              <a
                href="https://github.com/markathark/thedailymind"
                target="_blank"
                rel="noreferrer"
              >
                View Repository →
              </a>
            </Page>

            <Page>
              <a
                href="https://thedailymind-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                View Live →
              </a>
            </Page>
          </Links>
          <br />
          <br />
          The Daily Mind is a web app created to organize simple daily mundane
          things that keep our head busy on the daily. Users can access
          different pages to do different things whether it's journaling,
          calculating a budget or posting a simple note.
          <br />
          <br />
          <ul>
            <li>
              Developed a web app containing different programs that organize
              and track recurring tasks and activities such as journaling, to-do
              lists, budgeting, etc.
            </li>
          </ul>
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Web App</li>
            <li>Web Development</li>
          </List>
          <List>
            <li>Tools</li>
            <li>HTML, CSS, JS</li>
            <li>React</li>
            <li>Draggablejs</li>
            <li>Heroku</li>
            <li>VSCode</li>
          </List>
        </Skills>
        <Image src={Daily} />
        <Image src={Daily1} />
        <Image src={Daily2} />
        <Image src={Daily3} />
      </Body>
    </Wrapper>
  );
};

export default TheDailyMind;
