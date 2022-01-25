import { Add, Remove } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import { mobile } from "../responsive";
import img from "../Assets/Images/product.jpg";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({
    flexDirection:"column",
    padding:"20px",
  })}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  height: 60vh;
  width: 100%;
  object-fit: cover;
  ${mobile({
    height:"45vh"
  })}
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding:"0"
  })}
`;
const Description = styled.p`
  margin: 20px 0;
  ${mobile({
    margin:"10px 0"
  })}
`;
const Title = styled.h1`
  font-weight: 200;
`;
const Price = styled.p`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
  width: 50%;
  ${mobile({
    margin: "20px 0",
    width: "100%",
  })}
`;
const Filter = styled.div`
  display: flex;
  align-items: center;
`;
const FilterColor = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
  ${mobile({
    width:"20px",
    height: "20px"
  })}
`;
const FilterItem = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 20px;
`;
const FilterSize = styled.select`
  padding: 10px;
  margin-right: 20px;
`;
const Option = styled.option``;

const QuatityContainer = styled.div`
  display: flex;
  margin-right: 20px;
  align-items: center;
  font-weight: 700;
`;
const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 20px;
`;
const ButtonContainer = styled.div`
  display: flex;
  padding: 40px 0;
  width: 70%;
  ${mobile({
    width:"100%",
    justifyContent: "space-between",

  })}
`;
const Button = styled.button`
  width: 150px;
  height: 100px;
  margin-right: 30px;
  font-weight: 700;
  font-size: 30px;
  border: 1px solid black;
  border-radius: 15px;
  color: white;
  box-shadow: none;
  background-color: teal;
  cursor: pointer;
  ${mobile({
    height:"70px"
  })}
`;

const ProductPage = () => {
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Wrapper>
        <ImageContainer>
          <Image src={img} />
        </ImageContainer>
        <InfoContainer>
          <Title>Lorem, ipsum dolor.</Title>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            dolores fuga quaerat distinctio voluptatem! Cum dolores quidem
            deleniti dicta blanditiis!
          </Description>
          <Price>Rs. 500</Price>
          <FilterContainer>
            <Filter>
              <FilterItem>Color</FilterItem>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterItem>Size</FilterItem>
              <FilterSize>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <QuatityContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
          </QuatityContainer>
          <ButtonContainer>
            <Button>Cart</Button>
            <Button>Buy</Button>
          </ButtonContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductPage;
