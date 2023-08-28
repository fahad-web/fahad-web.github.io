import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import Meta from './meta'

const inter = Inter({ subsets: ['latin'] })


const Home = () => {
    return (
        <React.Fragment>
            <Meta title="login type Page" keywords="fahad" description="Fahad" />
            <h1 className='mb-24 mt-8 text-lg  font-bold text-size-manuali  text-center text-white top-20'>Welcome travel blogger website</h1>

            <div className='mt-8 text-center '>
                <Link href="#">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white ">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Admin Log
                    </span>
                </button>
                </Link>
            </div>
            <div className='mt-8 text-center '>
                <Link href="#">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                       Manager Log
                    </span>
                </button>
                </Link>
            </div>
            <div className='mt-8 text-center '>
                <Link href="#">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white ">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                       Traveller Log
                    </span>
                </button>
                </Link>
            </div>
            <div className='mt-8 text-center '>
                <Link href="#">
                <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white">
                    <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                        Tour Giud Kog
                    </span>
                </button>
                </Link>
            </div>

        </React.Fragment>
    );
}

export default Home