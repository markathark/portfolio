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
import Aswe1 from "../../components/images/aswe/aswe1.jpg";
import Aswe3 from "../../components/images/aswe/aswe3.jpg";
import Aswe4 from "../../components/images/aswe/aswe4.jpg";
import Aswe5 from "../../components/images/aswe/aswe5.jpg";
import Aswe6 from "../../components/images/aswe/aswe6.jpg";
import Aswe7 from "../../components/images/aswe/aswe7.jpg";

const ASWE = () => {
  return (
    <Wrapper>
      <Banner title="Alzheimer's Society" image={Aswe1} />
      <Body>
        <Desc>
          Working with the Development Team at the local Alzheimer's Society, I
          was able to assist in creating the graphics for their events, brand,
          print and social media.
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Graphic Design</li>
            <li>Branding</li>
          </List>
          <List>
            <li>Tools</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </List>
          <Image src={Aswe1} />
          <Image src={Aswe3} />
          <Image src={Aswe4} />
          <Image src={Aswe5} />
          <Image src={Aswe6} />
          <Image src={Aswe7} />
        </Skills>
      </Body>
    </Wrapper>
  );
};

export default ASWE;
