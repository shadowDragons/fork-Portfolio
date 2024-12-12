import TextRotator from './TextRotator'
import { useTranslations } from 'next-intl'

const HeroTexts = () => {
  const t = useTranslations('Hero')

  return (
    <>
      <h3 className='font-poppins text-2xl max-sm:text-xl'>{t('greeting')}</h3>
      <h1 className='font-rubik text-8xl name_underline text-primary max-sm:text-6xl'>{t('name')}</h1>
      <TextRotator />
    </>
  )
}
export default HeroTexts
