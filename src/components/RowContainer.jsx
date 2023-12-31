import React, { useEffect, useState } from 'react';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import NotFound from '../img/NotFound.svg'; 
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';

const RowContainer = ({ flag, data }) => {
  const [{ cartItems }, dispatch] = useStateValue();
  const [items, setItems] = useState([]);

  const addToCart = () => {
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  useEffect(() => {
    addToCart();
  }, [items]);

  return (
    <div className={`w-full flex items-center gap-3 my-12
    ${
      flag 
      ? 'overflow-x-scroll' 
      : 'overflow-x-hidden flex-wrap justify-center'
    }`}
    >
      {data && data.length > 0 ? (
        data.map(item => (
          <div
          key={item?.id} 
          className='w-275 h-[175px] min-w-[275px] md:w-300 md:min-w-[300px] bg-gray-50 rounded-lg p-2 my-12 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-evenly relative'>
            <div className='w-full flex items-center justify-between'>
              <motion.div
              whileHover={{ scale: 1.2 }}
              className='w-40 -mt-8 drop-shadow-2xl'
                >
                <img 
                src={item?.imageURL} 
                alt="" 
                className='object-contain'
                width={100}
                height={100}
                />
              </motion.div>
              <motion.div 
              onClick={() =>     setItems([...cartItems, item])}
              whileTap={{ scale: 0.75 }}
              className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md'>
                <MdShoppingBasket className='text-white' />
              </motion.div>
            </div>
            <div className='w-full flex flex-col items-end justify-end'>
              <p className='text-textColor font-semibold text-base md:text-lg'>
                {item?.title}
              </p>
              <p className='mt-1 text-sm text-gray-500'>
                {item?.calories}
              </p>
              <div className='flex items-center gap-8'>
                <p className='text-lg text-headingColor font-semibold'>
                  <span>$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
    )
      )) : (
      <div className='w-60 h-60 flex flex-col items-center justify-center'>
        <img 
        src={NotFound} 
        alt='No Items' 
        className='h-340' 
        />
        <p className='text-md text-headingColor font-semibold my-2'>Items Not Available</p>
      </div>
      )}
    </div>
  );
};

export default RowContainer;