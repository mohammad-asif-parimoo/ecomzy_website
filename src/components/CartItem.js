import React from 'react';
import { BiTrashAlt } from 'react-icons/bi';
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({ item }) => {

    const dispatch = useDispatch();
    const removeFromCart = () => {
        dispatch(remove(item.id));
        toast.error("Item removed from Cart");
    }

    return (
        <div className='flex flex-col gap-6 mb-10'>

            <div className='flex gap-10'>

                {/* Left Part */}

                <div className='flex justify-center items-center'>
                    <img src={item.thumbnail} alt="item-pic" className='w-[20rem] object-contain' />
                </div>

                {/* Right Part */}

                <div className='flex flex-col justify-evenly'>

                    <div className='mb-8'>
                        <p className='text-lg font-bold mb-5 font-tinos'>{item.title}</p>
                        <p className='text-sm opacity-50 hidden md:block'>{`${item.description.slice(0, 108)}...`}</p>
                        <p className='text-sm opacity-50 block md:hidden'>{`${item.description.slice(0, 85)}...`}</p>
                    </div>

                    <div className='flex justify-between items-center'>
                        <p className='text-xl font-bold text-green-600 font-tinos'>${item.price}</p>
                        <button onClick={removeFromCart}
                            className='flex justify-center items-center h-8 w-8 bg-pink-400 rounded-full text-white'>
                            <BiTrashAlt />
                        </button>
                    </div>
                </div>

            </div>

            {/* Horizontal Line */}

            <div className='h-[2px] w-full bg-slate-900'></div>

        </div>
    )
}

export default CartItem;