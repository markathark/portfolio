import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Body = styled.div`
  width: 60%;
  @media (max-width: 1200px) {
    width: 90%;
  }
  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const Desc = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  margin: 10vh 0;
  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const Skills = styled.ul`
  display: flex;
  font-size: 1rem;
  line-height: 1.7rem;
  list-style: none;
  flex-wrap: wrap;
  row-gap: 40px;
  & li:first-child {
    text-transform: uppercase;
    font-size: 0.7rem;
    margin-bottom: 15px;
    color: gray;
    letter-spacing: 0.1rem;
    font-weight: bold;
  }
`;

export const List = styled.div`
  flex: 1;
  @media (max-width: 768px) {
    min-width: 48%;
  }
`;

export const Links = styled.div`
  display: flex;
  position: relative;
  span {
    margin-right: 30px;
  }
`;

export const Page = styled.span`
  color: green;
  font-size: 1.3rem;
  display: inline-block;
  transform: none;
  transition: 1s;
  &:after {
    content: "";
    position: absolute;
    top: 25px;
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
    transform: translateY(-3px);
  }
`;

export const Image = styled.img`
  flex: 1;
  width: 100%;
  margin: 10vh 0;
  border: 1px solid #ededed;
`;

export const Imgdiv = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  & img {
    width: 49%;
  }
  @media screen and (max-width: 768px) {
    & img {
      width: 100%;
    }
  }
`;
