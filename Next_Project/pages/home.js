import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import React from 'react'
import Meta from './meta'

const inter = Inter({ subsets: ['latin'] })


const Home = () => {
  return (
    <React.Fragment>
      <Meta title="Home Page" keywords="fahad" description="Fahad" />
      <h1 className=' text-lg  font-bold text-size-manuali absolute left-0 right-0 text-center text-white top-20'>Welcome trip connect website</h1>

      <div className='flex justify-center space-x-10 absolute left-0 right-0 top-40'>

        <div className='relative hh'>
          <Link href="#"><Image src="/download (2).jpg" height={200} width={220} />
            <h1 className='absolute left-20 hh2 right-0 top-16 bottom-0 font-bold text-white text-lg'>
              Sajek
            </h1></Link>
        </div>

        <div className='relative hh'>
          <Link href="#"><Image src="/download (1).jpg" height={200} width={220} />
            <h1 className='absolute left-14 hh2 right-0 top-16 bottom-0 font-bold text-white text-lg'>
              Bangladesh
            </h1></Link>
        </div>

        <div className='relative hh'>
          <Link className='' href="#"><Image src="/fff.jpg" height={200} width={220} />
            <h1 className='absolute left-16 right-0 top-16 bottom-0 font-bold hh2  text-white text-lg'>
              Sentmartin
            </h1></Link>
        </div>

        <div className='relative hh'>
          <Link href="#"><Image src="/ff.jpg" height={200} width={220} />
            <h1 className='absolute left-16 right-0 top-16 bottom-0 hh2 font-bold text-white text-lg'>
              Cox Bazar
            </h1></Link>
        </div>

      </div>


      <div className='flex justify-center space-x-10 absolute left-0 right-0 top-96'>

        <div className='relative hh'>
          <Link href="#"><Image src="/download (2).jpg" height={200} width={220} />
            <h1 className='absolute left-20 hh2 right-0 top-16 bottom-0 font-bold text-white text-lg'>
              Sajek
            </h1></Link>
        </div>

        <div className='relative hh'>
          <Link href="#"><Image src="/download (1).jpg" height={200} width={220} />
            <h1 className='absolute left-14 hh2 right-0 top-16 bottom-0 font-bold text-white text-lg'>
              Bangladesh
            </h1></Link>
        </div>

        <div className='relative hh'>
          <Link className='' href="#"><Image src="/fff.jpg" height={200} width={220} />
            <h1 className='absolute left-16 right-0 top-16 bottom-0 font-bold hh2  text-white text-lg'>
              Sentmartin
            </h1></Link>
        </div>

        <div className='relative hh'>
          <Link href="#"><Image src="/ff.jpg" height={200} width={220} />
            <h1 className='absolute left-16 right-0 top-16 bottom-0 hh2 font-bold text-white text-lg'>
              Cox Bazar
            </h1></Link>
        </div>

      </div>

    </React.Fragment>



  );
}

export default Home