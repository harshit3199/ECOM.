import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"
const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  padding-left: 10px;
  ${mobile({
    justifyContent:"center"
  })}
`;

const Announcement = () => {
  return <Container>Offer Get 50% discount on all categories!!!</Container>;
};

export default Announcement;
