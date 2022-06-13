import React from "react";
import Banner from "../../components/Banner";
import {
  Wrapper,
  Body,
  Skills,
  List,
  Desc,
  Image,
} from "../../components/styles/Body";

import Logosweb from "../../components/images/logos/logos-main.jpg";
import Logos1 from "../../components/images/logos/logos1.jpg";
import Logos2 from "../../components/images/logos/logos2.jpg";
import Logos3 from "../../components/images/logos/logos3.jpg";
import Logos4 from "../../components/images/logos/logos4.jpg";
import Logos5 from "../../components/images/logos/logos5.jpg";
import Logos6 from "../../components/images/logos/logos6.jpg";
import Logos7 from "../../components/images/logos/logos7.jpg";
import Logos8 from "../../components/images/logos/logos8.jpg";
import Logos9 from "../../components/images/logos/logos9.jpg";
import Logos10 from "../../components/images/logos/logos10.jpg";
import Logos11 from "../../components/images/logos/logos11.jpg";

const Logos = () => {
  return (
    <Wrapper>
      <Banner title="Logos" image={Logosweb} />
      <Body>
        <Desc>A curation of logos I have designed up to date.</Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Branding</li>
            <li>Graphic Design</li>
          </List>
          <List>
            <li>Tools</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </List>
        </Skills>
        <Image src={Logos10} />
        <Image src={Logos11} />
        <Image src={Logos1} />
        <Image src={Logos2} />
        <Image src={Logos3} />
        <Image src={Logos4} />
        <Image src={Logos5} />
        <Image src={Logos6} />
        <Image src={Logos7} />
        <Image src={Logos8} />
        <Image src={Logos9} />
      </Body>
    </Wrapper>
  );
};

export default Logos;
