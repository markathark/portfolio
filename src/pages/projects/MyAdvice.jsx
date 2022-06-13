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
      <Banner title="MyAdvice" image={MyAdviceWeb} />
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
          <br />I developed the website with the MERN stack and designed a clean
          brand and user interface for the website. The front end is developed
          on React, and the backend is stored on MongoDB.
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Web / UI Design</li>
            <li>Web Development</li>
            <li>Branding</li>
            <li>Blog</li>
          </List>
          <List>
            <li>Tools</li>
            <li>HTML, CSS, JS</li>
            <li>React, Redux</li>
            <li>NodeJS, Express </li>
            <li>MongoDB, Mongoose</li>
            <li>Stripe</li>
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
