import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 1s;
  width: 45%;
  background-color: black;
  height: 45vh;
  :hover img {
    opacity: 0.2;
    transition: 1s;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    opacity: 1;
    & img {
      opacity: 0.2;
    }
  }
  &:hover span:after {
    width: 100%;
    transition: 1s;
  }
  &:hover span {
    opacity: 1;
    transform: translateY(-3px);
  }
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 0.5px solid #ededed;
`;

const Page = styled.span`
  opacity: 0;
  color: white;
  font-size: 1.5rem;
  display: inline-block;
  position:relative;
  transform: none;
  transition: 1s;
  &:after {
    content: "";
    position: absolute;
    top: 40px;
    left: 0;
    width: 0px;
    height: 2px;
    background-color: white;
  }
  b {
    margin-left: 20px;
  }

  @media screen and (max-width: 768px) {
    opacity: 1;
    &:after {
      content: "";
      position: absolute;
      top: 40px;
      left: 0;
      width:100%;
      height: 2px;
      background-color: white;
  }
`;

const DesignCard = (props) => {
  return (
    <Card>
      <Link to={props.url}>
        <Image src={props.image} />
        <Page>
          0{props.num} <b>{props.title}</b>
        </Page>
      </Link>
    </Card>
  );
};

export default DesignCard;
