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
  transition: 0.5s;
  padding: 20px;
  &.flip {
    flex-direction: row-reverse;
  }
  &:hover {
  }
  &:hover img {
    transform: scale(1.05);
    transition: object-position 20s, transform 1s;
    object-position: bottom;
  }
  @media (max-width: 768px) {
    flex-direction: column-reverse;
    height: auto;
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
  transition: 1s;
`;

const Info = styled(motion.div)`
  display: flex;
  flex: 1;
  height: 100%;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
    flex: 0;
  }
`;

const Cats = styled.span`
  list-style: none;
  width: 80%;
  padding: 0;
  & li {
    margin: 0 7px 3px 0;
    color: white;
    text-transform: uppercase;
    font-size: 0.7rem;
    display: inline-block;
    background: black;
    padding: 3px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.div`
  font-size: 1.3rem;
  margin: 20px 0 0 0;
  position: relative;
  font-weight: normal;
  @media (max-width: 768px) {
    margin: 25px 0 0 0;
  }
`;

const Desc = styled.span`
  margin: 15px 0;
  font-size: 1rem;
  @media (max-width: 768px) {
    margin: 20px 0;
  }
`;

const Links = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PageLinks = styled.span`
  margin: 0 6px;
  color: green;
  font-size: 1rem;
  display: inline-block;
  margin-bottom: 10px;
  transform: none;
  transition: 1s;
  text-align: center;
  span {
    display: inline-block;
    transform: translateY(3px);
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

const WorkCard = (props) => {
  const { ref, inView } = useInView({ threshold: 0.5 });
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
      <Info className={props.flip ? "flip" : null} animate={animation}>
        <Cats>
          {props.cats.map((c) => (
            <li key={c} className={props.flip ? "flip" : null}>
              {c}
            </li>
          ))}
        </Cats>
        <Title>{props.title}</Title>
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
        <Image src={props.img} animate={animation} />
      </Page>
    </Card>
  );
};

export default WorkCard;
