import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import img from "../Assets/Images/product.jpg";
import { Add, Remove } from "@material-ui/icons";
import {mobile} from "../responsive"
const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  ${mobile({
    padding:"10px"
  })}
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;
const TopTextDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: underline;
  cursor: pointer;
  ${mobile({
    display:"none"
  })}
`;
const TopText = styled.p`
  margin: 0 20px;
  font-weight: 600;
  font-size: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection:"column",
  })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({
    flexDirection: "column"
  })}
`;
const ProductDetail = styled.div`
  flex: 1;
  display: flex;
  
`;
const Image = styled.img`
  width: 400px;
  ${mobile({
    width: "200px"
  })}
`;
const Details = styled.div`
  display: flex;
  justify-content: space-around;
  width: 50%;
  padding: 20px;
  padding-left: 40px;
  flex-direction: column;
  ${mobile({
    paddingLeft: "10px"
  })}
`;
const ProductName = styled.span``;
const ProductId = styled.span``;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;
const ProductSize = styled.div``;
const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProductAmount = styled.span`
  font-size: 20px;
  margin: 5px;
`;
const ProductPrice = styled.span`
  font-size: 40px;
  font-weight: 600;
  ${mobile({
    fontSize: "20px"
  })}
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({
    flexDirection: "row",
    justifyContent: "space-between"
  })}
`;
const Hr = styled.hr`
  width: 100%;
  background-color: #e6e6e6;
  border: none;
  height: 1px;
  margin: 20px 0;
`;
const Summary = styled.div`
  flex: 1;
  border: 0.5px solid #aad6d6;
  border-radius: 10px;
  padding: 15px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({
    margin:"10px 0"
  })}
`;
const SummaryTitle = styled.span`
 font-weight: 400;
 text-decoration: underline;
 font-size: 20px;
 text-align: center;

`;
const SummaryItem = styled.div`
display: flex;
margin: 20px 0;
justify-content: space-between;
font-weight: ${props=>props.type==="total" && "600"};
font-size: ${props=>props.type==="total" && "20px"};
padding-bottom: 10px;
border-bottom: 0.5px solid #aad6d6;


`;
const SummaryItemText = styled.span``;
const SummaryItemPrice = styled.span``;
const Button = styled.button`
padding: 10;
background-color: teal;
color: white;
border: none;
border-radius: 5px;
height: 50px;
font-size: 20px;
font-weight: 300;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <Title>Your Cart</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTextDiv>
            <TopText>Shoping Bag(2)</TopText>
            <TopText> Your Wishlist(0)</TopText>
          </TopTextDiv>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src={img} />
                <Details>
                  <ProductName>
                    <b>Product:</b>Shirt
                  </ProductName>
                  <ProductId>
                    <b>Product ID:</b>2457203052
                  </ProductId>
                  <ProductColor color="#7ba9cf" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$100</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src={img} />
                <Details>
                  <ProductName>
                    <b>Product:</b>Shirt
                  </ProductName>
                  <ProductId>
                    <b>Product ID:</b>2457203052
                  </ProductId>
                  <ProductColor color="#7ba9cf" />
                  <ProductSize>
                    <b>Size:</b> 37.5
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <Add />
                  <ProductAmount>2</ProductAmount>
                  <Remove />
                </ProductAmountContainer>
                <ProductPrice>$100</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$40</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping</SummaryItemText>
              <SummaryItemPrice>$10</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Discount</SummaryItemText>
              <SummaryItemPrice>$20</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Tax</SummaryItemText>
              <SummaryItemPrice>$2.99</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText >Total</SummaryItemText>
              <SummaryItemPrice>$32.99</SummaryItemPrice>
            </SummaryItem>
            <Button>Checkout Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Cart;
