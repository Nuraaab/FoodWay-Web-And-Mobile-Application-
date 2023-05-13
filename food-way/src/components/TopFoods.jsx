import { gql, useQuery } from '@apollo/client';
import tw from 'twin.macro';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { Carousel, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
/** @jsxImportSource @emotion/react */
const CardContainer = styled.div`
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
${tw`
py-3 px-4 flex justify-center flex-col md:w-[21%] md:h-auto w-[70%] mx-5 md:mx-0 items-center mt-[20px] md:mt-0
`};
`;
// const GET_FOODS = gql`
//   query getFoods {
//     foods {
//       id
//       name
//       image
//       price
//     }
//   }
// `;
const TopContainer = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
${tw`
w-full flex flex-col py-8
`};
`;
const TopFoods = () => {
  const [foodList, setFood] = useState(null);
  // const { loading, error, data } = useQuery(GET_FOODS);
  useEffect(() => {
    Axios.get('http://localhost:7000/api/get').then((response) => {
      setFood(response.data);
    })
  }, [])
  // if (loading) { return <h1>Loading......</h1> }
  // if (error) { return <h1>Error Happening</h1> }
  return (


    <TopContainer>
      < h1 className='flex justify-center mb-[30px] font-poppins font-bold text-base md:text-[30px] mt-[20px]'>Our Top Selling Products</h1>
      <div className='w-full flex md:flex-row flex-col md:pl-20 md:pr-20 mr-5 md:mr-0 items-center justify-evenly'>

        {foodList &&
          foodList.map((food, index) => (
              < CardContainer id={food.id} >
                <h1 className='font-poppins font-bold text-sm md:text-[18px] flex justify-center mt-[5px] '>{food.food_name}</h1>
                <img className='w-[200px] h-[200px] rounded mt-[5px] flex justify-center' src={food.image} />
                <p className='font-normal  font-poppins text-[15px] mt-[5px] flex justify-center'>{food.price}<span className='font-normal  font-poppins text-[15px]'> ETB</span></p>
                <div className='flex mt-[10px] items-center'>
                  <button className='font-poppins font-semibold text-white bg-primary rounded py-3 px-8'>Add To Cart</button>
                </div>
              </CardContainer>
           
          ))}
      </div>
    </TopContainer>


  )
}

export default TopFoods