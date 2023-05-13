import React from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import styled from '@emotion/styled';
const FilterContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
${tw`
w-[25%] rounded px-2 flex justify-start  flex-col justify-start py-3 h-[1600px]
`};
`;
const FoodLeft = () => {
  return (
    <FilterContainer>
      <h1>Filter By</h1>
    </FilterContainer>
  )
}

export default FoodLeft