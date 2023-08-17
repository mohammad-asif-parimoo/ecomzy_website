import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {

  const cartItems = useSelector((state) => state.Cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(cartItems.reduce((acc, curr) => acc + curr.price, 0));
  }, [cartItems])

  return (
    <div>

      {
        cartItems.length > 0 ?

          <div className='w-[100vw] mt-[8rem]'>

            <div className='w-[85%] mx-auto flex flex-col md:flex-row gap-6 justify-between'>
              <div className='md:w-[55%] w-[100%]'>
                {
                  cartItems.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))
                }
              </div>

              <div className='md:w-[45%] w-[100%] flex flex-col md:justify-between justify-center'>

                <div className='mb-7 md:mb-0'>
                  <p className='text-3xl text-green-500 font-bold font-plus'>YOUR CART</p>
                  <p className='text-3xl text-green-500 font-bold font-plus'>SUMMARY</p>
                  <p className='text-lg font-bold mt-5 font-plus'>Total Items: {cartItems.length}</p>
                </div>

                <div className=' flex justify-center items-center h-10 bg-green-500 rounded-lg mb-6'>
                  <p className='text-white font-extrabold text-xl font-plus'>Total Amount: <span className='text-black font-tinos text-2xl'>&nbsp; ${Math.trunc(totalAmount)}</span></p>
                </div>

              </div>
            </div>

          </div> :

          <div>
            <div className='flex flex-col justify-center items-center h-[100vh] w-[100vw]'>
              <p
                className='text-2xl font-semibold mb-4 font-outfit'>Your cart is empty</p>
              <NavLink to={"/"}>
                <button
                  className='pl-[20px] pr-[20px] pt-[8px] pb-[8px] text-2xl text-white rounded-lg bg-green-600 font-preahvihear'
                  onClick={() => window.scrollTo(0, 0)}>Shop Now</button>
              </NavLink>
            </div>
          </div>
      }

    </div>
  )
}

export default Cart;