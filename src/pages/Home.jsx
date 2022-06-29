import React from "react";
import Intro from "../components/Intro";
import Work from "../components/Work";
import Designs from "../components/Designs";
import { motion } from "framer-motion";
import styled from "styled-components";

const Homepage = styled(motion.div)``;
const Web = styled.div`
  margin-top: -15vh;
  padding-top: 15vh;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Home = () => {
  return (
    <Homepage>
      <Intro />
      <Web id="web">
        <Work />
      </Web>
      <Web id="web">
        <Designs />
      </Web>
    </Homepage>
  );
};

export default Home;
