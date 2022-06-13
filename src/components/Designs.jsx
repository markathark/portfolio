import React from "react";
import styled from "styled-components";
import DesignCard from "./DesignCard";
import DesignList from "../pages/designs/Designs";

const DesignWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60%;
  justify-content: space-between;
  row-gap: 10vh;
  column-gap: 5vw;
  margin-bottom: 15vh;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

const Title = styled.div`
  width: 100%;
  font-size: 1.5rem;
  margin-bottom: 3vh;
`;

const Designs = () => {
  return (
    <DesignWrapper>
      <Title>Design Projects [8]</Title>
      {DesignList.map((d, i) => (
        <DesignCard
          url={d.url}
          title={d.title}
          image={d.image}
          key={i + 1}
          num={i + 1}
        />
      ))}
    </DesignWrapper>
  );
};

export default Designs;
