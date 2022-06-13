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
import Sweetistd1 from "../../components/images/sweetist-design/sweetistd1.jpg";
import Sweetistd2 from "../../components/images/sweetist-design/sweetistd2.jpg";
import Sweetistd3 from "../../components/images/sweetist-design/sweetistd3.jpg";
import Sweetistd4 from "../../components/images/sweetist-design/sweetistd4.jpg";
import Sweetistd5 from "../../components/images/sweetist-design/sweetistd5.jpg";
import Sweetistd6 from "../../components/images/sweetist-design/sweetistd6.jpg";
import Sweetistd7 from "../../components/images/sweetist-design/sweetistd7.jpg";
import Sweetistd8 from "../../components/images/sweetist-design/sweetistd8.jpg";
import Sweetistd9 from "../../components/images/sweetist-design/sweetistd9.jpg";
import Sweetistd10 from "../../components/images/sweetist-design/sweetistd10.jpg";

const SweetistDesign = () => {
  return (
    <Wrapper>
      <Banner title="Sweetist" image={Sweetistd1} />
      <Body>
        <Desc>
          <br />
          <br />
          Sweetist is a custom cake and baked goods business. I was tasked with
          creating the visual brand, packaging and creating the website for
          Louis Pham, a pastry chef in Windsor. <br />
          <br />
          The chosen design and colours complements the feelings of celebration
          and enjoying sweet treat. As the products are often unique and custom
          made, I chose a calligraphy style on the logo and the font to express
          this.
        </Desc>
        <Skills>
          <List>
            <li>Categories</li>
            <li>Branding</li>
            <li>Graphic Design</li>
            <li>Print / Packaging Design</li>
          </List>
          <List>
            <li>Tools</li>
            <li>Adobe Photoshop</li>
            <li>Adobe Illustrator</li>
          </List>
        </Skills>
        <Image src={Sweetistd1} />
        <Imgdiv>
          <Image src={Sweetistd2} />
          <Image src={Sweetistd3} />
        </Imgdiv>
        <Imgdiv>
          <Image src={Sweetistd4} />
          <Image src={Sweetistd5} />
        </Imgdiv>
        <Imgdiv>
          <Image src={Sweetistd6} />
          <Image src={Sweetistd7} />
        </Imgdiv>
        <Image src={Sweetistd8} />
        <Image src={Sweetistd9} />
        <Image src={Sweetistd10} />
      </Body>
    </Wrapper>
  );
};

export default SweetistDesign;
