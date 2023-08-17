import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cartItems = useSelector((state) => state.Cart);

    return (
        <nav className='bg-slate-900 w-[100vw] h-20 flex items-center justify-center fixed top-0 z-10'>
            <div className='flex justify-between w-[85%] mx-auto items-center relative'>

                {/* Left Part */}
                <div>
                    <NavLink to={"/"}>
                        <img src={logo} alt="logo" className="h-14" onClick={() => window.scrollTo(0, 0)} />
                    </NavLink>
                </div>

                {/* Right Part */}
                <div>
                    <NavLink to={"/cart"}>
                        <FaShoppingCart
                            className='text-white text-[1.75rem]' onClick={() => window.scrollTo(0, 0)} />
                    </NavLink>
                    {
                        cartItems.length > 0 ?
                            <p
                                className='text-white absolute animate-bounce top-[4px] right-[-3px] h-6 w-6 rounded-full bg-green-600 flex items-center justify-center'
                            >{cartItems.length}</p> : ""
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar;