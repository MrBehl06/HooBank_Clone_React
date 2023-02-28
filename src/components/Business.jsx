import React from 'react'
import { features } from '../constants'
import styles ,{layout} from '../styles'
import Button from './Button'

const FeatureCard = ({featureCard}) =>  (
    <div className={`flex flex-row p-6 rounded-[20px] "mb-0"} feature-card `} >
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={featureCard.icon} alt="icon" className='w-[50%] h-[50%} object-contain' />
      </div>
      <div className='flex-1 flex flex-col ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px]'>
          {featureCard.title}</h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
          {featureCard.content}</p>
      </div>
    </div>
  )

const business = () => {
  
const featuresList = features.map(feature=> <FeatureCard  key={feature.id} featureCard = {feature}/> )
return (
    <section id='features' className={layout.section} >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2} >You do the Business, <br className='sm:block hidden' /> we'll handle 
          the money.
        </h2>
        <p  className={`${styles.paragraph} max-w-[470px] mt-5 `} >With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
      <Button styles="mt-10"/>
      </div>

      <div className={`${layout.sectionImg} flex-col`} >
        {featuresList}
      </div>
    </section>
  )
}

export default business
