import { Checkbox } from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
import { CheckBoxOutlineBlankRounded } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";
import {mobile} from "../responsive"

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #087474;
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 138, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 219, 219, 0.25) 0%,
     rgba(42,60,87,0.4) 100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #094a56 100%);
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  /* padding: 10px; */
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  ${mobile({
    width: "50%",
    height: "50%"
  })}
`;
const Title = styled.h1`
  color: #fff;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 1px;
  text-align: center;
  margin: 10px;
  ${mobile({
    fontSize: "40px",
    fontSpacing: " 0.7px",
    margin: "8px",


  })}
`;
const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px;
`;
const Input = styled.input`
  background: rgba(0, 0, 0, 0.3);
  margin-bottom: 20px;
  border: none;
  outline: none;
  padding: 10px;
  font-size: 13px;
  color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.2),
    0 1px 1px rgba(255, 255, 255, 0.1);
  transition: box-shadow 0.5s ease;
  :focus {
    box-shadow: inset 0 -5px 45px rgba(100, 100, 100, 0.4),
      0 1px 1px rgba(255, 255, 255, 0.2);
  }
`;
const Agreement = styled.div`
  color: white;
  font-size: 20px;
  margin: 20px 0px;
  ${mobile({
    fontSize:"10px",
    margin: "15px 0",
    marginTop: "-5px"
  })}

`;
const Button = styled.button`
  padding: 4px 10px 4px;
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  font-size: 20px;
  color: white;
  text-align: center;
  border-radius: 4px;
  cursor: pointer;
  background-image: linear-gradient(#7dc5c5 10%, teal 80%);
  border: none;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.5);
  :hover {
    background: teal;
  }
  `;
const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Register</Title>
        <Form>
          <Input placeholder="Name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Phone Number" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm Password" />
          <Agreement>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Non
            dolores, sint ipsa nulla nam vitae dicta itaque amet dolorum?
            Possimus.
            <b>PRIVACY POLICY</b>
              <Checkbox sx={{color: teal, '&Mui-checked':{color: teal},}}>
                <CheckBoxOutlineBlankRounded/>
              </Checkbox>
            </Agreement>
          <Button>Create</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
