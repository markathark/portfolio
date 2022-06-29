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
import MyAdviceWeb from "../../components/images/myadvice/myadvice-web.png";
import MyAdvice1 from "../../components/images/myadvice/myadvice_1.png";
import MyAdvice2 from "../../components/images/myadvice/myadvice_2.png";
import MyAdvice3 from "../../components/images/myadvice/myadvice_3.png";

const MyAdvice = () => {
  return (
    <Wrapper>
      <Banner title="Open Platform Blog - MyAdvice" image={MyAdviceWeb} />
      <Body>
        <Desc>
          <Links>
            <Page>
              <a
                href="https://github.com/markathark/myadvice"
                target="_blank"
                rel="noreferrer"
              >
                View Repository →
              </a>
            </Page>

            <Page>
              <a
                href="https://myadvice-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                View Live →
              </a>
            </Page>
          </Links>
          <br />
          <br />
          MyAdvice is a community blog website focused on sharing advice. Users
          can browse around reading advise from different categories but also
          share their own advise on their individual expertise.
          <br />
          <br />
          <ul>
            <li>
              Designed an interactive front-end that allow users to create, read
              or interact with posts
            </li>
            <li>
              Structured Schemas and API to allow CRUD operations for users,
              posts, comments, likes, etc
            </li>
          </ul>
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Web Development</li>
            <li>Web / UI Design</li>
            <li>Branding</li>
            <li>Blog</li>
          </List>
          <List>
            <li>Tools</li>
            <li>HTML, CSS, JS</li>
            <li>React, Redux</li>
            <li>NodeJS, Express </li>
            <li>MongoDB</li>
            <li>Stripejs</li>
            <li>Heroku</li>
            <li>VSCode</li>
          </List>
        </Skills>{" "}
        <Image src={MyAdviceWeb} />
        <Image src={MyAdvice1} />
        <Image src={MyAdvice2} />
        <Image src={MyAdvice3} />
      </Body>
    </Wrapper>
  );
};

export default MyAdvice;
