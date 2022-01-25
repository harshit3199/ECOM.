import { Send } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
height: 40vh;
background-color: #e8f1f0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
${mobile({
    height: "30vh",
  })}
`;
const Title = styled.h1`
font-size: 50px;
margin-bottom: 20px;

${mobile({
    fontSize: "35px",
  })}
`;
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({
    textAlign: "center",
    fontSize:"20px",
    padding: "0 10px"
  })}
`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
${mobile({
    width: "80%",
  })}

`;
const Input = styled.input`
border:1px solid #201d1d;
border-right: none;
width: 100%;
padding: 15px;;
:focus{outline: none;}
`;
const Button = styled.button`
height: 100%;
border-radius: 0;
width: 90px;
border: 1px solid #201d1d;
border-left: none;
background-color: teal;
color: white;
cursor: pointer;
:hover{
    color: #d1caca
}
`;

const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>
                Get updates on the the latest products and offers
            </Description>
            <InputContainer>
            <Input placeholder='Your Email'/>
            <Button>
                <Send/>
            </Button>
            
            </InputContainer>
        </Container>
    )
}

export default NewsLetter
