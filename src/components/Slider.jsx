import styled from 'styled-components'
import { React, useState } from 'react'
import { ArrowLeftRounded, ArrowRightRounded } from '@material-ui/icons'
import { sliderItems } from '../data'

const Container = styled.div`
    width: 100%;
    height: 90vh;
    display:flex;
    position: relative;
    overflow: hidden;
`;
const Arrow = styled.div`
    width:50px;
    height:50px;
    background-color: #f5f5fa;
    border-radius: 50%;
    display:flex;
    align-items:center;
    justify-content:center;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    opacity: 0.5;
    z-index: 1;
    cursor: pointer;
    `;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform:translateX(${props => props.slideIndex * -100}vw);
    transition:all 1.5s ease;
    `;

const Slide = styled.div`
    display: flex;
    align-items: center;
    width:100vw;
    height:90vh;
    background-color: ${props => props.bg};
    
    `;
const ImageContainer = styled.div`
    flex:1;
    height:100%;
    `;
const Img = styled.img`
        height:90vh;
    `;

const InfoCotainer = styled.div`
    flex: 1;
    padding: 50px;
    `;
const Title = styled.h1`
    font-size: 70px;

    `;
const Desc = styled.p`
    margin: 20px 0px;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 3px;
    `;
const Button = styled.button`
    padding: 10px;
    width: 100px;
    height: 50px;
    border-bottom: 5px solid steelblue;
    border-top: none;
    border-left: none;
    border-right: none;
    background: linear-gradient(#5FDDFF,#53ADDF);
    color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 10px grey;
    transition: 300ms ease;
    font-weight: bold;
    cursor: pointer;
    :active{
        border: none;
  border-bottom: 2px solid steelblue;
  box-shadow: 0px 1px 5px grey;
  background: linear-gradient(#53AFFF,#5FCDFF);
  color: #FFF;
    }
    `;



const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        }
        else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftRounded />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map(item => (

                    <Slide bg={item.bg} key={item.id}>
                        <ImageContainer ><Img src={item.img} /></ImageContainer>

                        <InfoCotainer> <Title>{item.title}</Title>
                            <Desc>
                                {item.desc}
                            </Desc>
                            <Button>Show ME</Button>

                        </InfoCotainer>
                    </Slide>
                ))}
            </Wrapper>

            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightRounded />
            </Arrow>


        </Container>
    )
};

export default Slider;
