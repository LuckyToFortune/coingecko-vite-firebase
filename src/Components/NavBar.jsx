import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai"

const NavBar = () => {

    const [showNav, setShowNav] = useState(false)
    const handleNav = () => {
        setShowNav(!showNav)
    }
  return (
    <div className='rounded-div flex items-center justify-between h-20 mx-auto font-semibold mt-2'>
        <Link to = "/"> <h1 className='text-xl font-bold'>Satoshi Check</h1> </Link>

        <div className='hidden md:flex'>
            <ThemeToggle/>
        </div>

        <div className='hidden md:block'>
            <Link className= "p-4 hover:text-accent" to = "/signIn">Sign In</Link>
            <Link className= "bg-button text-buttonText px-5 py-2 ml-2 rounded-2xl shadow-lg hover:shadow-2xl" to = "/signUp">Sign Up</Link>
        </div>

        {/*mobile menu icon */}
        <div className='flex md:hidden cursor-pointer z-10' onClick={handleNav}>
            {
                showNav ? <AiOutlineClose size={25}/> :  <AiOutlineMenu size={25}/>
            }
        </div>

        {/*mobile menu*/}
        <div className={
            showNav ? 'flex flex-col md:hidden fixed left-0 top-20 items-center justify-between w-full h-[90%] bg-primary ease-in duration-300 z-10 '
            :
            'fixed left-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in'
        }>
            <ul className='w-full p-4'>
                <li className='border-b py-6'> <Link to = "/">Home</Link> </li>
                <li className='border-b py-6'> <Link to = "/account">Account</Link> </li>
                <li className='border-b py-6'> <ThemeToggle/> </li>
            </ul>
            <div className='flex flex-col w-full p-4 '>
                <Link to="/signIn"> <button className='w-full my-2 p-3 bg-primary border border-secondary rounded-2xl shadow-2xl'>Sign In</button> </Link>
                <Link to="/signUp"> <button className='w-full my-2 p-3 bg-button text-buttonText border border-secondary rounded-2xl shadow-2xl'>Sign Up</button> </Link>
            </div>
        </div>

    </div>
  )
}

export default NavBar