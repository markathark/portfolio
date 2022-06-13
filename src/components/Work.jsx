import styled from "styled-components";
import WorkCard from "./WorkCard";
import Projects from "../pages/projects/Projects";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
  margin-bottom: 20vh;
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

const Work = () => {
  return (
    <Wrapper>
      <Title>Web Projects [5]</Title>
      {Projects.map((proj) => (
        <WorkCard
          key={proj.num}
          num={proj.num}
          title={proj.title}
          desc={proj.desc}
          cats={proj.cats}
          links={proj.links}
          img={proj.img}
          flip={proj.flip}
        />
      ))}
    </Wrapper>
  );
};

export default Work;
