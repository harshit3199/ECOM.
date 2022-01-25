import React from 'react'
import {mobile} from "../responsive"
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: space-between;
`;
const Filter = styled.div`
margin:20px;
${mobile({
    margin:"-10px 15px",
    display: "flex",
    flexDirection: "column"
})}
`;

const FilterText= styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({
    marginRight: "10px"
})}
`;

const Select= styled.select`
padding: 10px;
margin-right: 20px;
background-color: white;
border: none;
${mobile({
    marginRight: "10px"
})}


`;
const Option= styled.option``;


const FilterItem = () => {
    return (
        <Container>
        <Filter>
            <FilterText>Filter Products</FilterText>
            <Select>
                <Option disabled selected>
                    Color
                </Option>
                <Option>Red</Option>
                <Option>Blue</Option>
                <Option>Green</Option>
                <Option>Yellow</Option>
                <Option>Black</Option>
                <Option>White</Option>
            </Select>
            <Select>
                <Option disabled selected>
                    Size
                </Option>
                <Option>XS</Option>
                <Option>S</Option>
                <Option>M</Option>
                <Option>L</Option>
                <Option>XL</Option>
            </Select>
            </Filter>
        <Filter>
            <FilterText>Sort Products</FilterText>
            <Select>
                <Option selected>Treanding</Option>
                <Option>Latest Products</Option>
                <Option>Price: Low to High</Option>
                <Option>Price: High to Low</Option>
            </Select>
            </Filter>
      </Container>
    )
}

export default FilterItem
