import React from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/slices/CartSlice';

const Product = ({ singleItem }) => {

    const cartItems = useSelector((state) => state.Cart);
    const dispatch = useDispatch();

    const addToCart = () => {
        dispatch(add(singleItem));
        toast.success("Item added to Cart");
    }

    const removeFromCart = () => {
        dispatch(remove(singleItem.id));
        toast.error("Item removed from Cart");
    }

    return (
        <div className='w-[20rem] mb-10 flex flex-col border-4 rounded-xl hover:scale-110 hover:shadow-2xl transition-all duration-500 p-10'>

            <div className='flex flex-col justify-center items-center'>
                <p className='font-bold text-lg font-tinos'>{`${singleItem.title.slice(0, 17)}...`}</p>

                <p className='text-sm opacity-50 mt-5'>{`${singleItem.description.slice(0, 60)}...`}</p>

                <img src={singleItem.thumbnail} alt="product-pic"
                    className='h-[13rem] mt-6 mb-8 object-contain' />
            </div>

            <div className='flex justify-between'>
                <p className='font-bold text-green-600 text-lg p-[6px] font-tinos'>${singleItem.price}</p>

                {
                    cartItems.some((item) => item.id === singleItem.id) ?
                        <button onClick={removeFromCart}
                            className='border-2 hover:bg-slate-900 border-slate-900 rounded-xl hover:cursor-pointer p-[6px] hover:text-white font-plus transition-all duration-300'
                        >Remove Item</button> :
                        <button onClick={addToCart}
                            className='border-2 hover:bg-slate-900 border-slate-900 rounded-xl hover:cursor-pointer p-[6px] hover:text-white font-plus transition-all duration-300'
                        >Add to Cart</button>
                }

            </div>

        </div>
    )
}

export default Product;