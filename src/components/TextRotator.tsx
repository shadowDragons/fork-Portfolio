import React from 'react'
import { useTranslations } from 'next-intl'

function TextRotator() {
  const t = useTranslations('TextRotator')

  return (
    <div className='py-4 rounded-md flex flex-col justify-center items-center'>
      <div className='font-poppins text-base sm:text-2xl [text-wrap:balance] text-gray-700'>
        {t('intro')} &
        <span className='inline-flex ml-2 flex-col h-[2em] overflow-hidden'>
          <ul className='block text-left font-rubik text-2xl sm:text-3xl [&_li]:h-[2em] [&_li]:flex [&_li]:items-center animate-text-slide relative -top-[0.1em]'>
            {t.raw('rotatingTitles').map((title: string, index: number) => (
              <li key={index} className='text-[#2f7df4]'>
                {title}
              </li>
            ))}
            <li className='text-[#2f7df4]'>{t.raw('rotatingTitles')[0]}</li>
          </ul>
        </span>
      </div>
    </div>
  )
}

export default TextRotator
