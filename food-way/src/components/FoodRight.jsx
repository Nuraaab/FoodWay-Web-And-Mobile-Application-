import React, { useEffect, useState } from 'react'
/** @jsxImportSource @emotion/react */
import tw from 'twin.macro';
import styled from '@emotion/styled';
import Axios from 'axios';
import { Input } from 'postcss';
import FoodLeft from './FoodLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleUp, faCartShopping, faSearch } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Cart from './Cart';
import CartDiscription from './CartDiscription';
const RightTopContainer = styled.div`

${tw`

flex flex-row justify-between py-4 px-6 mt-3 items-center w-full
`};
`;
const RightContainer = styled.div`
box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
${tw`
flex flex-col  justify-between py-8 px-0 mt-3 md:rounded-t-[50px] w-full 
`};
`;

const CardContainer = styled.div`
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
${tw`

py-3 px-5 flex justify-between flex-col rounded md:w-[250px] md:h-auto w-[50%] mx-5 md:mx-0 items-center mt-[20px] md:mt-5 mx-2
`};

`;
const FilterContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
${tw`
w-[25%] rounded px-2 flex justify-start  flex-col justify-start py-3  sm:flex hidden
`};
`;
const TypeContainer = styled.div`
box-shadow: 0 2px 4px rgba(0,0,0,0.2), 0 2px 10px rgba(0,0,0,0.15);
${tw`
w-full pl-3 pr-3 flex flex-col justify-between items-center py-3 rounded
`};
`;
const InnerContainer = styled.div`
box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
${tw`
w-full pl-2 pr-2 flex flex-col justify-between items-center py-2
`}
`;
const FoodRight = () => {
    const [select, setSelect] = useState(true);
    const [filter, setFilter] = useState(true);
    const [catagory, setCatagory] = useState(false);
    const [price, setPrice] = useState(false);
    // foodlist
    const [foodList, setFood] = useState([]);
    const [filteredFood, setFilteredFood] = useState([]);
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [foodType, setFoodType] = useState("");
    const [foodCatagory, setFoodCatagory] = useState("");
    const [searchFood, setSearch] = useState("");
    const [cart, setCart] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    useEffect(() => {
        Axios.get('http://localhost:7000/api/food').then((response) => {
            setFood(response.data);
            setFilteredFood(response.data);
        })
    }, [])

    useEffect(() => {
        // Filter data based on price range
        const min = parseFloat(minPrice);
        const max = parseFloat(maxPrice);
        let filtered = foodList.filter(item => {
            if (isNaN(min) && isNaN(max)) {
                return true;
            }
            if (isNaN(min)) {
                return item.price <= max;
            }
            if (isNaN(max)) {
                return item.price >= min;
            }
            return item.price >= min && item.price <= max;
        });
        setFilteredFood(filtered);
    }, [foodList, minPrice, maxPrice]);

    const handleFilterChange = (filter, value) => {
        if (filter === 'min') {
            setMinPrice(value);
        } else if (filter === 'max') {
            setMaxPrice(value);
        }
    };
    const handleFoodTypeChange = (type) => {
        const filtered = foodList.filter((item) => {
            if (type === "") {
                return true;
            }
            return item.type === type;
        });
        setFoodType(type);
        setFilteredFood(filtered);
    };
    const handleFoodCatagoryChange = (catagory) => {
        const filtered = foodList.filter((item) => {
            if (catagory === "") {
                return true;
            }
            return item.catagory === catagory;
        });
        setFoodCatagory(catagory);
        setFilteredFood(filtered);
    };
    //search
    const handleSearchChange = (search) => {
        const filtered = foodList.filter((item) => {
            if (search === "") {
                return true;
            }
            return item.food_name.toUpperCase().toLowerCase() === search;
        });
        setSearch(search);
        setFilteredFood(filtered);
    };
    //

    const resetFilters = (event) => {
        setMinPrice("");
        setMaxPrice("");
        setFoodType("");
        setFilteredFood(foodList);
    };

    const handleAddToCart = (item) => {
        const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      existingItem.quantity += 1;
      setCart([...cart]);
    } else {
      item.quantity = 1;
      setCart([...cart, item]);
    }
    setTotalPrice(parseFloat(totalPrice)+parseFloat(item.price));
    }
    const removeFromCart = (item) => {
        setCart(cart.filter((cartItem) => cartItem.id !== item.id));
        setTotalPrice(totalPrice -(item.quantity * item.price) );
      };
    const foodCards = filteredFood &&
        filteredFood.map((food, index) => (
            < CardContainer id={food.id} className={` `}>
                <h1 className='font-poppins font-bold text-sm md:text-[18px] flex justify-center mt-[5px] '>{food.food_name}</h1>
                <img className='w-[200px] h-[200px] rounded mt-[5px] flex justify-center ml-[20%] md:ml-0' src={food.image} />
                <p className='font-normal  font-poppins text-[15px] mt-[5px] flex justify-center'>{food.price}<span className='font-normal  font-poppins text-[15px]'> ETB</span></p>
                <div className='w-full flex mt-[10px] items-center justify-center mb-[10px]'>
                    < button onClick={() => handleAddToCart(food)} className='flex justify-center   font-poppins font-semibold text-white bg-primary rounded py-3 px-8'>Add To Cart</button>
                </div>
            </CardContainer>

        ));

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        centerMode: true,

    };
    return (
        < div className='w-full h-full flex flex-row'>
            <FilterContainer>
                <TypeContainer>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <h2 className='font-poppins font-semibold text-[16px]'>What You Need?</h2>
                        < FontAwesomeIcon icon={!select ? faAngleUp : faAngleDown} color='black' onClick={() => setSelect(!select)} className='cursor-pointer' />
                    </div>
                    <InnerContainer>
                        <div className={`w-full flex flex-row justify-between  ${!select ? "hidden" : "flex"} mt-3`}>
                            <div className='flex flex-col w-full '>
                                <h2 className='font-poppins font-semibold text-[13px]'>From Where</h2>
                                <select className='py-2 bg-transparent border-2 w-full  cursor-pointer border-gray-300 focus:outline-none rounded-[10px]' placeholder='Minimum price' value={foodType} onChange={(event) => handleFoodTypeChange(event.target.value)}>
                                    <option className='font-poppins font-normal text-[14px] hover:text-red-500 cursor-pointer' value="store">Order From Store</option>
                                    <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="build">Build Your Meal</option>
                                </select>
                            </div>
                        </div>
                    </InnerContainer>
                </TypeContainer> 

                <TypeContainer className='mt-5'>
                    <div className='w-full flex flex-row justify-between items-center'>
                        <h2 className='font-poppins font-semibold text-[16px]'>Filter</h2>
                        < FontAwesomeIcon icon={!filter ? faAngleUp : faAngleDown} color='black' onClick={() => setFilter(!filter)} className='cursor-pointer' />
                    </div>
                    <div className={`w-full  flex flex-col ${!filter ? "hidden" : "flex"} mt-3`}>
                        <InnerContainer>
                            <div className='flex flex-row w-full justify-between'>
                                <h2 className='font-poppins font-semibold text-[16px]'>By Price</h2>
                                < FontAwesomeIcon icon={!price ? faAngleUp : faAngleDown} color='black' onClick={() => setPrice(!price)} className='cursor-pointer' />
                            </div>
                            <div className={`w-full flex flex-row justify-between  ${!price ? "hidden" : "flex"} mt-3`}>
                                <div className='flex flex-col w-[47%]'>
                                    <h2 className='font-poppins font-semibold text-[13px]'>Minimum Price</h2>
                                    <select className='py-2 bg-transparent border-2 w-full  cursor-pointer border-gray-300 focus:outline-none rounded-[10px]' placeholder='Minimum price' value={minPrice} onChange={event => handleFilterChange('min', event.target.value)}>
                                        <option className='font-poppins font-normal text-[14px] hover:text-red-500 cursor-pointer' value="50">50ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="60">60ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="70">70ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="110">110ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="200">200ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="300">300ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="320">320ETB</option>
                                    </select>
                                </div>
                                <div className='flex flex-col w-[47%]'>
                                    <h2 className='font-poppins font-semibold text-[13px]'>Maximum Price</h2>
                                    <select className='py-2 bg-transparent border-2 w-full  cursor-pointer border-gray-300 focus:outline-none rounded-[10px]' placeholder='Maximum price' value={maxPrice} onChange={event => handleFilterChange('max', event.target.value)}>
                                        <option className='font-poppins font-normal text-[14px] hover:text-red-500 cursor-pointer' value="60">60ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="70">70ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="200">200ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="300">300ETB</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="320">320ETB</option>

                                    </select>
                                </div>
                            </div>
                            <div className='w-full bg-gray-300 h-[1px] px-2 mt-2 mb-2'>

                            </div>
                            <div className='flex flex-row w-full justify-between '>
                                <h2 className='font-poppins font-semibold text-[16px]'>By Catagory</h2>
                                < FontAwesomeIcon icon={!catagory ? faAngleUp : faAngleDown} color='black' onClick={() => setCatagory(!catagory)} className='cursor-pointer' />
                            </div>
                            <div className={`w-full flex flex-row justify-between  ${!catagory ? "hidden" : "flex"} mt-3`}>
                                <div className='flex flex-col w-full'>
                                    <h2 className='font-poppins font-semibold text-[13px]'>Select Food Catagory</h2>
                                    <select className='py-2 bg-transparent border-2 w-full  cursor-pointer border-gray-300 focus:outline-none rounded-[10px]' placeholder='Minimum price' value={foodCatagory} onChange={(event) => handleFoodCatagoryChange(event.target.value)}>
                                        <option className='font-poppins font-normal text-[14px] hover:text-red-500 cursor-pointer' value="fast">Fast Food</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="meat">Fasting Food</option>
                                        <option className='font-poppins font-normal text-[14px] mt-1 hover:text-red-500 cursor-pointer' value="soft">Soft Drink</option>
                                    </select>
                                </div>
                            </div>
                        </InnerContainer>
                    </div>
                </TypeContainer>
                <div className='w-full flex flex-row justify-end flex-wrap mt-8'>
                    <button onClick={() => resetFilters()} className='font-poppins font-semibold font-[15px] py-3 px-5 flex items-center bg-black text-white rounded'>Reset Filter</button>
                </div>
            </FilterContainer>
            <div className='w-full py-3  flex flex-col justify-between  items-center '>
                <RightTopContainer>
                    <h1 className='sm:flex hidden font-poppins font-semibold text-[20px] ml-10 '>AVAILABLE FOODS</h1>
                    <FontAwesomeIcon icon={faSearch} size='50px' className='absolute right-[550px]' />
                    <input placeholder='Search Food' type='text' className='md:ml-0 ml-10  max-w-[500px] mr-16 text-[13px] font-poppins font-bold px-4 py-3 pl-12 w-full bg-transparent border-2  cursor-pointer border-gray-300 focus:outline-none rounded-[50px]' value={searchFood} onChange={(event) => handleSearchChange(event.target.value.toUpperCase().toLowerCase())}  ></input>
                </RightTopContainer>

                <RightContainer>
                    <div className='sm:flex hidden w-full flex-wrap justify-between flex md:flex-row flex-col md:pl-5 md:pr-5 mr-5 md:mr-0 items-start '>
                        {
                            foodCards
                        }
                    </div>

                    <Slider {...settings} className='sm:hidden flex justify-between items-center w-[85%]  ml-5'>
                        {foodCards}
                    </Slider>
                </RightContainer>
            </div>
            <div className='w-full absolute top-0 right-5 cursor-pointer' >
                <Cart cart={cart} setCart={setCart} tPrice={totalPrice} setTotal={setTotalPrice} removeCart={removeFromCart} />
            </div>
            
        </div>
    )
}

export default FoodRight;


