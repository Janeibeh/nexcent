import { navBarList } from '@/constants/navBarList'
import React, { useState } from 'react'
import Link from 'next/link';
import { HiOutlineMenuAlt3, HiOutlineMenuAlt2  } from "react-icons/hi";


const Header = () => {
    const [menu, setMenu] = useState(false)
    const ToggleMenu = () => {
        setMenu(!menu)
    }
    return (
    <>
        <header  className='bg-neutral relative z-1000 text-black' >
            <nav className=' container  h-20 mx-auto flex items-center justify-between lg:px-10 px-6'>
                <div className=' flex gap-2.5'>
                    <img src='./media/nexscent-Icon.png' alt=''/>
                    <span className='font-bold text-black '>Nexcent</span>
                </div>
                <ul className={`navfont absolute lg:static w-48 lg:w-auto flex flex-col  lg:flex lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12 text-base top-20 text-textbl bg-black   h-screen lg:h-auto lg:bg-transparent pl-14 lg:pl-0 pt-8 lg:pt-0
                    ${menu ? 'left-0 duration-500' :'-left-full duration-500'}`} >
                                        {navBarList.map((item) => (
                                        <div  className=''>
                                            <li key={item._id} >
                                                <Link  href={item.link}>{item.title}</Link>
                                            </li>
                                        </div>
                                        ))}
                </ul>
                <ul>   
                    <li className='text-sm '>
                        <p className='text-lemon'>Login <span>  <button className='h-9 w-24 rounded bg-lemon  lg:ml-8 ml-4  text-white'> Sign up</button> </span></p> 
                    </li>
                </ul> 
                <div className='lg:hidden '
                    onClick={ToggleMenu}
                    >
                    {menu ? <HiOutlineMenuAlt2 size="22"/>  :  < HiOutlineMenuAlt3  size="22"/> }
                </div>
            </nav>

        </header>
    
    </>
    )
}

export default Header