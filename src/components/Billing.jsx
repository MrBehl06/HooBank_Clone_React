import React from 'react'
import styles ,{layout} from '../styles'
import {google,apple,bill} from '../assets'
const billing = () =>  (
    <section id='product' className={`${layout.sectionReverse}`}>
      <div className={`${layout.sectionImgReverse}`}>
      <img src={bill} alt="bill" className='w-[100%] h-[100%] relative z-[5]' />
      <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
      <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
      </div>
      <div className={layout.sectionInfo}>
      <h1 className={styles.heading2}>
        Easily control your <br className='sm:block hidden' />
        billing & invoicing. 
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`} >
        We can easily control your billing and invoicing with billing history system embedded in the application.
        </p>
        <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img src={google} alt="google" className='w-[128px h-[42px] cursor-pointer object-contain mr-5'/>
        <img src={apple} alt="apple" className='w-[128px h-[42px] cursor-pointer object-contain '/>
      </div>
      </div>
      
    </section>
  )

export default billing