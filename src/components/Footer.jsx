import React from 'react'
import { github, linkedin, twitter } from '../assets/icons'


const Footer = () => {
  return (
    <div className='max-w-4xl mx-auto w-screen max-lg:px-[3rem] max-md:px-[2rem]'>
      <section className='flex flow-row justify-between items-center py-6 w-full'>
        <div><p>Follow me for more.</p></div>
        <div className='flex items-center gap-3'>
          <a href="https://github.com/Jean-Aime-2023" target="_blank">
            <img src={github} alt="github" width={30} height={30} />
          </a>
          <a href="https://x.com/AimeJean43739" target="_blank">
            <img src={twitter} alt="twitter" width={30} height={30} />
          </a>
          <a href="https://www.linkedin.com/in/mugabe-jean-aime-126445256/" target="_blank">
            <img src={linkedin} alt="linkedIn" width={30} height={30} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Footer