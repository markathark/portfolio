import styled, { keyframes } from "styled-components";

const Header = styled.div`
  width: 100%;
  height: 40vh;
  background-color: black;
  width: 100%;
  position: relative;
`;

const Intro = styled.div`
  color: white;
  position: absolute;
  font-size: 3rem;
  bottom: 5vh;
  left: 20%;
  @media (max-width: 1200px) {
    left: 5%;
  }
  @media (max-width: 768px) {
    left: 10%;
    font-size: 2rem;
  }
`;

const backgroundAnimation = keyframes`
0% { object-position:top; }
80% { object-position: bottom;}
100% { object-position: top;}
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.15;
  animation-name: ${backgroundAnimation};
  animation-duration: 70s;
  animation-iteration-count: infinite;
`;

const Banner = (props) => {
  return (
    <Header>
      <Image src={props.image} />
      <Intro>{props.title}</Intro>
    </Header>
  );
};

export default Banner;
