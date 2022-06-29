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

import PhoWeb from "../../components/images/phoxiclo/phoxiclo-web.png";
import Pho1 from "../../components/images/phoxiclo/phoxiclo_1.png";
import Pho2 from "../../components/images/phoxiclo/phoxiclo_2.png";
import Pho3 from "../../components/images/phoxiclo/phoxiclo_3.png";

const PhoXicLo = () => {
  return (
    <Wrapper>
      <Banner title="Food Ordering Website - Pho Xic Lo" image={PhoWeb} />
      <Body>
        <Desc>
          <Links>
            <Page>
              <a
                href="https://github.com/markathark/phoxiclo"
                target="_blank"
                rel="noreferrer"
              >
                View Repository →{" "}
              </a>
            </Page>

            <Page>
              <a
                href="https://phoxiclo.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                View Live →
              </a>
            </Page>
          </Links>
          <br />
          <br />
          Pho Xic Lo is a local favourite restaurant of mine, and I decided to
          recreate their website as a personal project. Customers can view menu,
          and order on the website, and finally keep track of their order.
          Admins have their own section where they can add more items to the
          menu, and update the orders.
          <br />
          <br />
          <ul>
            <li>
              Created a front-end to display restaurant details, the menu and
              allow users to purchases and track orders
            </li>
            <li>
              Developed an admin page and the backend to allow updating and
              storing of orders and menu items
            </li>
          </ul>
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Web Development</li>
            <li>Web / UI Design</li>
            <li>Branding</li>
            <li>Live Order</li>
          </List>
          <List>
            <li>Tools</li>
            <li>HTML, CSS, JS</li>
            <li>NextJS, Redux</li>
            <li>NodeJS, Express </li>
            <li>MongoDB</li>
            <li>PayPaljs</li>
            <li>Vercel</li>
            <li>VSCode</li>
          </List>
        </Skills>
        <Image src={PhoWeb} />
        <Image src={Pho1} />
        <Image src={Pho2} />
        <Image src={Pho3} />
      </Body>
    </Wrapper>
  );
};

export default PhoXicLo;
