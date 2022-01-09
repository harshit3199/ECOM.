import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
flex: 1;
margin: 5px;
height: 60vh;
position: relative;
`;
const Image = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`;
const Info = styled.div`
position: absolute;
top: 0;
bottom: 0;
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
const Title = styled.h1`
color: white;
margin-bottom: 20px;
`;
const Button = styled.button`
padding: 10px;
border: none;
background-color: white;
color: #837676;
border-radius: 10%;
cursor: pointer;
font-weight: 600;
`;


const CategoryItem = ({item}) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
