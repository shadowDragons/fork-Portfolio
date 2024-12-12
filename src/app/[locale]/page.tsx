import SocialLinks from '@/components/SocialLinks'
import HeroTexts from '@/components/HeroTexts'
import HeroImage from '@/components/HeroImage'
import GithubBtn from '@/components/animation/GithubBtn'
import DownLoadResumeBtn from '@/components/DownLoadResumeBtn'
import FramerWrapper from '@/components/animation/FramerWrapper'
import Projects from '@/components/Projects'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'

export default function Home() {
  return (
    <>
      <section className='min-h-[80vh] w-full flex justify-between items-center max-lg:flex-col max-lg:min-h-[60vh] max-lg:justify-center relative'>
        {/* LEFT SIDE  */}
        <FramerWrapper className='h-full w-auto flex flex-col justify-start gap-4 max-lg:gap-2 max-lg:items-center' y={0} x={-100}>
          <HeroTexts />
          <div className='h-fit w-full p-4 flex gap-3 max-lg:justify-center max-lg:p-2'>
            <SocialLinks />
          </div>
        </FramerWrapper>

        {/* RIGHT SIDE image  */}
        <FramerWrapper className='h-full w-[47%] relative block max-lg:hidden' y={0} x={100}>
          <HeroImage />
        </FramerWrapper>

        {/* Scroll Down Button */}
        <Link
          href='#projects'
          className={cn(buttonVariants({ variant: 'ghost', size: 'icon' }), 'absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce max-lg:bottom-4')}
          aria-label='Scroll to projects'
        >
          <ArrowDown className='h-6 w-6' />
        </Link>
      </section>

      <Projects />
    </>
  )
}
