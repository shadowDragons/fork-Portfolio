import { cn } from '@/lib/utils'
import { Github, Mail, Twitter } from 'lucide-react'
import { buttonVariants } from './ui/button'
import Link from 'next/link'
import FramerWrapper from './animation/FramerWrapper'

const SocialLinks = () => {
  const links = [
    { name: 'Twitter', link: 'https://x.com/shadow06368306', icon: <Twitter /> },
    { name: 'Email', link: 'mailto:shadowdragon4399@gmail.com', icon: <Mail /> },
    { name: 'Github', link: 'https://github.com/shadowDragons', icon: <Github /> },
  ]
  return (
    <>
      {links.map((itm, indx) => {
        const timing = 0.55 + indx * 0.125

        return (
          <FramerWrapper key={indx} delay={timing} y={50}>
            <Link target='blank' href={itm.link} className={cn(buttonVariants({ variant: 'outline', size: 'icon' }))}>
              {itm.icon}
            </Link>
          </FramerWrapper>
        )
      })}
    </>
  )
}

export default SocialLinks
