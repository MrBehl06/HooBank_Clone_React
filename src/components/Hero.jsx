import React from 'react'
import{discount,robot} from '../assets'
import styles from '../styles'
import GetStarted from './GetStarted'
const Hero = () => (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} px-0`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-16`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt='discount' className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph}`}>
          <span className='text-white'>30% </span>
          Discount For {" "} 
          <span className='text-white'>2 Month </span> Account
          </p>
      </div>
      <div className='flex flex-row justify-betwen items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading[-100px] leading-[75px]' >
          The Next <br className='sm:block 
          hidden' />{" "}
          <span 
          className='text-gradient'>Generation
          </span>{" "} <br />
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>
          <GetStarted/>
        </div>
      </div>
      <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading[-100px] leading-[75px] w-full ' >
        Payment Method
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology 
      to identify the credit cards most likely to fit your needs. 
      We examine annual percentage rates, annual fees.</p>
    </div>
    
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`} >
      <img  src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'></div>
      <div className='absolute z-[1] w-[80%] h-[80%] top-2 white__gradient rounded-full bottom-40'></div>
      <div className='absolute z-[0] w-[50%] h-[50%] right-2- bottom-20 top-2 blue__gradient'></div>
    </div>
    <div className={`ss:hidden ${styles.flexCenter}`}>
    <GetStarted/>
    </div>

    </section>
)

export default Hero
