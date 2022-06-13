import Banner from "../../components/Banner";
import {
  Wrapper,
  Body,
  Skills,
  List,
  Desc,
  Image,
  Imgdiv,
} from "../../components/styles/Body";

import Whoweare1 from "../../components/images/whoweare/whoweare1.jpg";
import Whoweare2 from "../../components/images/whoweare/whoweare2.jpg";
import Whoweare3 from "../../components/images/whoweare/whoweare3.jpg";
import Whoweare4 from "../../components/images/whoweare/whoweare4.jpg";
import Whoweare5 from "../../components/images/whoweare/whoweare5.jpg";
import Whoweare6 from "../../components/images/whoweare/whoweare6.jpg";
import Whoweare7 from "../../components/images/whoweare/whoweare7.jpg";
import Whoweare8 from "../../components/images/whoweare/whoweare8.jpg";
import Whoweare9 from "../../components/images/whoweare/whoweare9.jpg";
import Whoweare10 from "../../components/images/whoweare/whoweare10.jpg";
import Whoweare11 from "../../components/images/whoweare/whoweare11.jpg";

const WhoWeAre = () => {
  return (
    <Wrapper>
      <Banner title="Who We Are" image={Whoweare1} />
      <Body>
        <Desc>
          Who We Are is an internal campaign for a student club I was a part of.
          The aim was to showcase a fun, positive and uplifting internal brand.
          This was showcase on our social media, but also to our members. This
          design was also translated to the newsletter and an internal event
          powerpoint during this campaign run.
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Graphic Design</li>
            <li>Print Design</li>
          </List>
          <List>
            <li>Tools</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </List>
        </Skills>

        <Image src={Whoweare1} />
        <Imgdiv>
          <Image src={Whoweare2} />
          <Image src={Whoweare3} />
        </Imgdiv>
        <Imgdiv>
          <Image src={Whoweare4} />
          <Image src={Whoweare5} />
        </Imgdiv>
        <Image src={Whoweare6} />
        <Image src={Whoweare7} />
        <Image src={Whoweare8} />
        <Image src={Whoweare9} />
        <Image src={Whoweare10} />
        <Image src={Whoweare11} />
      </Body>
    </Wrapper>
  );
};

export default WhoWeAre;
