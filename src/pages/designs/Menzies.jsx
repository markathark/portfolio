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
import Mag1 from "../../components/images/menzies/mag1.jpg";
import Mag2 from "../../components/images/menzies/mag2.jpg";
import Mag3 from "../../components/images/menzies/mag3.jpg";
import Mag4 from "../../components/images/menzies/mag4.jpg";
import Mag5 from "../../components/images/menzies/mag5.jpg";
import Mag6 from "../../components/images/menzies/mag6.jpg";
import Mag7 from "../../components/images/menzies/mag7.jpg";
import Mag8 from "../../components/images/menzies/mag8.jpg";

const Menzies = () => {
  return (
    <Wrapper>
      <Banner title="Menzies Automotive Group" image={Mag4} />
      <Body>
        <Desc>
          Initially worked at Menzies Automotive Group as a Graphic Designer, I
          was able to design a variety of graphics for the website, emails,
          print, social media, and more.
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Branding</li>
            <li>Graphic Design</li>
            <li>Print Design</li>
          </List>
          <List>
            <li>Tools</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </List>
        </Skills>
        <Image src={Mag1} />
        <Image src={Mag2} />
        <Image src={Mag3} />
        <Image src={Mag4} />
        <Imgdiv>
          <Image src={Mag5} />
          <Image src={Mag6} />
        </Imgdiv>
        <Imgdiv>
          <Image src={Mag7} />
          <Image src={Mag8} />
        </Imgdiv>
      </Body>
    </Wrapper>
  );
};

export default Menzies;
