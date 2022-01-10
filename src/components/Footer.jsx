import { EmailRounded, Facebook, Instagram, Phone, Pinterest, Room, Twitter } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Left = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
`;
const Logo = styled.h1`
font-weight: bold;
  font-size: 30px;
`;
const Description = styled.p`
margin: 20px 0;
`;
const SocialContainer = styled.div`
display: flex;

`;
const SocialIcon = styled.div`
margin-right:20px;
width: 40px;
height: 40px;
border-radius: 50%;
color: #${props=>props.color};
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  text-align: center;
`;

const Title = styled.h3`
margin-bottom:30px;
text-align: center;
`;

const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`;
const ListItem = styled.li`
width: 50%;
margin-bottom: 10px;
`;


const Right = styled.div`
  flex: 1;
  padding: 20px;
`;

const ContactItem = styled.div`
display: flex;
margin-bottom: 20px;
padding-left: 40px;

`;
const Icon = styled.div`
margin-right: 10px;

`;

const Footer = () => {
  return (
    <Container>
      <Left>
          <Logo>ECOM.</Logo>
          <Description>Lorem ipsum dolor sit amet consectetur 
              adipisicing elit. Odio placeat incidunt laborum, 
              tenetur eum voluptas ut! At numquam magnam magni 
              perspiciatis placeat voluptas perferendis sint 
              veritatis facilis odio, est explicabo!
            </Description>
            <SocialContainer>
                <SocialIcon color="3B59999">
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color="E4405F">
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color="55ACEE">
                    <Twitter/>
                </SocialIcon>
                <SocialIcon color="E60023">
                    <Pinterest/>
                </SocialIcon>
            </SocialContainer>
      </Left>
      <Center>
            <Title>Usefull Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Men Fashion</ListItem>
                <ListItem>Women Fachion</ListItem>
                <ListItem>Kids</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Track</ListItem>
                <ListItem>Terms</ListItem>
            </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
            <Icon><Room/></Icon>
            Lorem ipsum dolor, sit amet sdewws.
        </ContactItem>
        <ContactItem>
            <Icon>
                <Phone/>
            </Icon>
            +91 34384938
        </ContactItem>
        <ContactItem>
            <Icon>
                <EmailRounded/>
            </Icon>
            contactus@ecom.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;
