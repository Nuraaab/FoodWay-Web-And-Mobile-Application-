import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import styled from '@emotion/styled';
import Axios from 'axios';
import { Input } from 'postcss';
import FoodLeft from './FoodLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp } from '@fortawesome/free-solid-svg-icons';
const RightTopContainer = styled.div`

${tw`

flex flex-row justify-between py-4 px-6 mt-3 items-center
`};
`;
const RightContainer = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
${tw`
flex flex-col  justify-between py-4 px-0 mt-3 rounded-t-[50px] w-full 
`};
`;

const CardContainer = styled.div`
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
${tw`

py-3 px-5 flex justify-center flex-col rounded md:w-[250px] md:h-auto w-[70%] mx-5 md:mx-0 items-center mt-[20px] md:mt-5 mx-2
`};

`;
const FilterContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
${tw`
w-[25%] rounded px-2 flex justify-start  flex-col justify-start py-3 h-[1600px] 
`};
`;
const TypeContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-full pl-3 pr-3 flex flex-col justify-between items-center
`};
`;
const FoodRight = () => {
    const [select, setSelect] = useState(false);
    const [filter, setFilter] = useState(false);
    const [type, setType] = useState(false);
    const [price, setPrice] = useState(false);
    const [foodList, setFood] = useState(null);
    const [buildList, setList] =useState(null);
    //
    const [store, setStore] = useState(true);
    const [build, setBuild] = useState(false);
    useEffect(() => {
        if(store===true){
        Axios.get('http://localhost:7000/api/food').then((response) => {
            setFood(response.data);
            setBuild(false);
        })
    }else if(build===true){
    Axios.get('http://localhost:7000/api/build').then((res)=>{
        setFood(res.data);
        setStore(false);
    })
}
    }, [])
    return (
        <div className='w-full h-full flex flex-row'>
            <FilterContainer>
                <TypeContainer>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <h2 className='font-poppins font-semibold text-[16px]'>What you need</h2>
                        <FontAwesomeIcon icon={!select ? faAngleUp : faAngleDown} color='black' onClick={() => setSelect(!select)} className='cursor-pointer'/>
                    </div>
                    <div className={`flex flex-col ${!select ? "hidden" : "flex"} mt-3`}>
                        <p className='font-poppins font-normal text-[14px] hover:text-red-500 cursor-pointer' onClick={()=>{setStore(!store);  setBuild(!build);}  }>Foods from store</p>
                        <p className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' onClick={()=>{setBuild(!build); setStore(!store);}}>Build your own meal</p>
                    </div>
                </TypeContainer>

                <TypeContainer className='mt-5'>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <h2 className='font-poppins font-semibold text-[16px]'>Filter</h2>
                        < FontAwesomeIcon icon={!filter ? faAngleUp : faAngleDown} color='black' onClick={() => setFilter(!filter)} className='cursor-pointer'/>
                    </div>
                    <div className={`w-full  flex flex-col ${!filter ? "hidden" : "flex"} mt-3`}>
                        <div className='w-full pl-10 pr-10 flex flex-row justify-between items-center'>
                            <h2 className='font-poppins font-semibold text-[16px]'>By price</h2>
                            < FontAwesomeIcon icon={!price ? faAngleUp : faAngleDown} color='black' onClick={() => setPrice(!price)} className='cursor-pointer'/>
                        </div>
                        <div className={`flex flex-col ${!price ? "hidden" : "flex"} mt-3`}>
                            <p className='font-poppins font-normal text-[14px] hover:text-red-500 cursor-pointer'>40-70</p>
                            <p className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer'>75-120</p>
                            <p className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer'>130-170</p>
                            <p className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer'>180-250</p>
                            <p className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer'>255-350</p>
                        </div>
                        <div className=' w-full pl-10 pr-10 flex flex-row justify-between items-center mt-2'>
                            <h2 className='font-poppins font-semibold text-[15px]'>By type</h2>
                            < FontAwesomeIcon icon={!type ? faAngleUp : faAngleDown} color='black' onClick={() => setType(!type)} className='cursor-pointer' />
                        </div>
                        <div className={`flex flex-col ${!type ? "hidden" : "flex"} mt-3`}>
                            <p className='font-poppins font-normal text-[14px] hover:text-red-500 cursor-pointer'>Fish</p>
                            <p className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer'>Meat</p>
                            <p className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer'>Fast Food</p>
                            <p className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer'>Drinks</p>
                        </div>
                    </div>
                </TypeContainer>

            </FilterContainer>
            <div className='w-full py-3 px-0 flex flex-col justify-between'>
                <RightTopContainer>
                    <h1 className='font-poppins font-semibold text-[20px] ml-10 '>AVAILABLE FOODS</h1>
                    <input type='text' className='max-w-[500px] mr-16 text-[13px] font-poppins font-bold px-4 py-3 pl-5 w-full bg-transparent border-2  cursor-pointer border-gray-300 focus:outline-none rounded-[50px]' />
                </RightTopContainer>

                <RightContainer>
                    <div className='w-full flex-wrap justify-between flex md:flex-row flex-col md:pl-5 md:pr-5 mr-5 md:mr-0 items-center justify-evenly'>

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

                            ))
                            }

                       
                    </div>
                </RightContainer>
            </div>
        </div>
    )
}

export default FoodRight;


