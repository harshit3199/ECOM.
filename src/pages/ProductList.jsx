import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";
import FilterItem from "../components/FilterItem";

const Container = styled.div``;
const Title = styled.h1`
margin: 20px;
`;
const ProductLIst = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Title>Dresses</Title>
      <FilterItem/>
      <Products/>
      <NewsLetter/>
      <Footer/>
    </Container>
    
  );
};

export default ProductLIst;
