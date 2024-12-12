import React from 'react'

function TextRotator() {
  return (
    <div className='py-4 rounded-md flex flex-col justify-center items-center'>
      <div className='font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700'>
        我是一个全栈开发工程师 &
        <span className='inline-flex ml-2 flex-col h-[2em] overflow-hidden'>
          <ul className='block text-left font-rubik text-2xl sm:text-3xl [&_li]:h-[2em] [&_li]:flex [&_li]:items-center animate-text-slide relative -top-[0.1em]'>
            <li className='text-[#2f7df4]'>开发者</li>
            <li className='text-[#2f7df4]'>Developer</li>
            <li className='text-[#2f7df4]'>创造者</li>
            <li className='text-[#2f7df4]'>Creator</li>
            <li className='text-[#2f7df4]'>开发者</li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default TextRotator
