import { motion, useAnimation } from "framer-motion";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import {
  RiExternalLinkLine,
  RiGithubLine,
  RiInformationLine,
} from "react-icons/ri";

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 7vh 0;
  height: 400px;
  column-gap: 4vw;
  &.flip {
    flex-direction: row-reverse;
  }
  &:hover img {
    transition: 20s;
    object-position: bottom;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: 60vh;
    margin: 4vh 0;
    img {
    }
    &.flip {
      flex-direction: column-reverse;
    }
  }
`;

const Page = styled.a`
  display: block;
  flex: 2;
  text-decoration: none;
  height: 100%;
  padding: 0;
  margin: 0;
  @media (max-width: 768px) {
    width: 100%;
    flex: none;
    height: 30vh;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  object-position: top;
  border: 0.5px solid #ededed;
  transition: 3s;
`;

const Info = styled(motion.div)`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  &.flip {
    align-items: flex-end;
    text-align: right;
  }
  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    flex: 0;
    &.flip {
      align-items: center;
      text-align: center;
    }
  }
`;

const Number = styled.span`
  font-weight: 500;
  @media (max-width: 768px) {
    display: none;
  }
`;
const Title = styled.div`
  font-size: 2rem;
  margin: 50px 0 5px 0;
  position: relative;
  @media (max-width: 768px) {
    margin: 25px 0 0 0;
  }
`;

const Links = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLinks = styled.span`
  margin: 0 12px 0 0;
  color: green;
  font-size: 1rem;
  display: inline-block;
  margin-bottom: 10px;
  transform: none;
  transition: 1s;
  span {
    display: inline-block;
    transform: translateY(3px);
  }
  &.flip {
    margin: 0 0 0 20px;
  }
  &:after {
    content: "";
    position: absolute;
    top: 30px;
    left: 0;
    width: 0px;
    height: 2px;
    background-color: black;
  }
  &:hover:after {
    width: 100%;
    transition: 1s;
  }
  &:hover {
    color: black;
    transform: translateY(-5px);
  }
`;
const Desc = styled.span`
  margin: 50px 0;
  font-size: 1rem;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const Cats = styled.span`
  margin: 0 10px 0 0;
  color: lightgray;
  text-transform: uppercase;
  font-size: 0.7rem;
  display: inline-block;
  &.flip {
    margin: 0 0 0 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const WorkCard = (props) => {
  const { ref, inView } = useInView({ threshold: 0.3 });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        transition: {
          type: "spring",
          duration: 3,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animation.start({ opacity: 0 });
    }
  }, [inView]);

  return (
    <Card ref={ref} className={props.flip ? "flip" : null}>
      <Info animate={animation} className={props.flip ? "flip" : null}>
        <Number>{props.num}</Number>
        <Title>{props.title}</Title>
        <div>
          {props.cats.map((c) => (
            <Cats key={c} className={props.flip ? "flip" : null}>
              {c}
            </Cats>
          ))}
        </div>
        <Desc>{props.desc} </Desc>
        <Links>
          <a href={props.links[0]} target="_blank" rel="noreferrer">
            <PageLinks className={props.flip ? "flip" : null}>
              <span>
                <RiExternalLinkLine />
              </span>{" "}
              Live
            </PageLinks>
          </a>
          <a href={props.links[1]} target="_blank" rel="noreferrer">
            <PageLinks className={props.flip ? "flip" : null}>
              <span>
                <RiGithubLine />
              </span>{" "}
              Repo
            </PageLinks>
          </a>
          <Link to={props.links[2]}>
            <PageLinks className={props.flip ? "flip" : null}>
              <span>
                <RiInformationLine />
              </span>{" "}
              Info
            </PageLinks>
          </Link>
        </Links>
      </Info>
      <Page href={props.links[0]} target="_blank" rel="noreferrer">
        <Image src={props.img} />
      </Page>
    </Card>
  );
};

export default WorkCard;
