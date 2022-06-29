import React from "react";
import {
  Wrapper,
  Body,
  Skills,
  List,
  Page,
  Desc,
  Links,
  Image,
} from "../../components/styles/Body";
import Banner from "../../components/Banner";
import SweetistWeb from "../../components/images/sweetist/sweetist-web.png";
import Sweetist1 from "../../components/images/sweetist/sweetist_1.png";
import Sweetist2 from "../../components/images/sweetist/sweetist_2.png";
import Sweetist3 from "../../components/images/sweetist/sweetist_3.png";

const Sweetist = () => {
  return (
    <Wrapper>
      <Banner image={SweetistWeb} title="Sweetist" />
      <Body>
        <Desc>
          <Links>
            <Page>
              <a
                href="https://github.com/markathark/sweetist"
                target="_blank"
                rel="noreferrer"
              >
                View Repository →
              </a>
            </Page>
            <Page>
              <a
                href="https://sweetist-app.herokuapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                View Live →
              </a>
            </Page>
          </Links>
          <br />
          <br />
          Sweetist is an ecommerce website focused on selling baked goods and
          art prints.
          <br />
          <br />
          <ul>
            <li>
              Built a responsive front-end with React and Redux to manage user
              and cart states, and allow users to browse and purchase products
            </li>
            <li>
              Developed REST API’s to manage data from users, products, and
              orders
            </li>
          </ul>
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Web / UI Design</li>
            <li>Web Development</li>
            <li>Branding</li>
            <li>eCommerce</li>
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
        <Image src={SweetistWeb} />
        <Image src={Sweetist1} />
        <Image src={Sweetist2} />
        <Image src={Sweetist3} />
      </Body>
    </Wrapper>
  );
};

export default Sweetist;
