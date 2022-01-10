import React from "react";
import styled from "styled-components";
import {
  ShoppingCartOutlined,
  FavoriteBorderOutlined,
  SearchOutlined
} from "@material-ui/icons";

const Info = styled.div`
opacity: 0;
width: 100%;
height: 100%;
position: absolute;
top: 0;
left: 0;
background-color: rgba(68, 64, 64, 0.2);
display: flex;;
align-items: center;
justify-content: center;
z-index: 3;
`;

const Image = styled.img`
  height: 85%;
  z-index: 1;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 350px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f1f1f8;
  position: relative;
  :hover ${Info}{
      opacity: 1;
      transition: all 0.5s ease;
  }
  :hover ${Image}{
      transform: scale(1.1);
      transition: all 0.5s ease;
  }
`;
const Circle = styled.div`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-color: #f5f5fa;
    position: absolute;
`;


const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #f5f5fa;
display: flex;
align-items: center;
justify-content: center;
margin: 12px;
 :hover{
    background-color: #d3d3da;
    transform: scale(1.1);
    transition: all 0.5s ease;
    cursor: pointer;
 }

`;


const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <Info>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <SearchOutlined/>
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </Info>
    </Container>
  );
};

export default Product;
