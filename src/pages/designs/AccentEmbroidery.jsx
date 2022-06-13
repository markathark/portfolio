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

import Ae1 from "../../components/images/ae/ae1.jpg";
import Ae2 from "../../components/images/ae/ae2.jpg";
import Ae3 from "../../components/images/ae/ae3.jpg";
import Ae4 from "../../components/images/ae/ae4.jpg";

const AccentEmbroidery = () => {
  return (
    <Wrapper>
      <Banner title="Accent Embroidery" image={Ae1} />
      <Body>
        <Desc>
          Accent Embroidery is a local shop that does custom embroidery, and
          printing on apparel and promotional items. I had the pleasure to be
          able to work at the store as an assistant and a graphic designer. I
          took this opportunity for a personal project to create this for a
          brand change proposal.
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Graphic Design</li>
            <li>Print Design</li>
            <li>Branding</li>
          </List>
          <List>
            <li>Tools</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </List>
        </Skills>
        <Image src={Ae1} />
        <Image src={Ae2} />
        <Image src={Ae3} />
        <Image src={Ae4} />
      </Body>
    </Wrapper>
  );
};

export default AccentEmbroidery;
