import styled from "styled-components";
import { motion } from "framer-motion";
import myImage from "./images/markariola_bg.jpg";
import { keyframes } from "styled-components";

const backgroundAnimation = keyframes`
0% { background-position: 0 0; }
25% { background-position: 0 100%;}
50% { background-position: 100% 100%;}
75% {background-position: 100% 0;}
100% { background-position: 0 0;}
`;

const Wrapper = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  background: linear-gradient(rgba(12, 53, 34, 0.4), rgba(0, 34, 45, 0.4)),
    url(${myImage});

  background-size: 400% 400%;
  padding-top: 25vh;
  padding-bottom: 15vh;
  margin-bottom: 10vh;
  animation-name: ${backgroundAnimation};
  animation-duration: 15s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;

  @media (max-width: 768px) {
    height: 80vh;
    padding: 10vh 0;
  }
`;

const Welcome = styled.div`
  width: 60%;
  display: flex;
  color: white;
  flex-direction: column;
  font-size: 3rem;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    width: 80%;
  }
`;

const Intro = () => {
  return (
    <Wrapper
      initial={{ y: "-10%", opacity: 0 }}
      animate={{ x: 0, transition: { duration: 1 }, y: "0", opacity: 1 }}
      exit={{ transition: { duration: 0.2 }, y: "-30%", opacity: 0 }}
    >
      <Welcome>
        Mark Ariola is a web developer with a design background. He is focused
        on creating visual designs that delivers intuitive user experiences.
      </Welcome>
    </Wrapper>
  );
};

export default Intro;
