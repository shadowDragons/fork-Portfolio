import React from 'react'

function TextRotator() {
  return (
    <div className='py-4  rounded-md flex flex-col justify-center items-center overflow-hidden'>
      <div className='font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700'>
        我是一个全栈开发工程师 &
        <span className='inline-flex ml-2 flex-col h-[calc(theme(fontSize.lg)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] overflow-hidden'>
          <ul className='block text-left font-rubik text-lg sm:text-3xl leading-tight [&_li]:block animate-text-slide'>
            <li className='text-[#2f7df4]'>自由职业者</li>
            <li className='text-[#2f7df4]'>博主</li>
            <li className='text-[#2f7df4]'>贡献者</li>
            <li className='text-[#2f7df4]'>创造者</li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default TextRotator
