'use client'

import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from './ui/button'

const Navbar = () => {
  const links = [
    { name: '你好👋', link: '#' },
    { name: '项目', link: '#projects' },
  ]

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()

    // 获取目标元素
    const targetElement = href === '#' ? document.documentElement : document.querySelector(href)

    if (targetElement) {
      // 使用 scrollIntoView 代替直接设置 scrollTo
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: href === '#' ? 'start' : 'start',
      })
    }
  }

  return (
    <nav className='fixed top-0 z-50 w-full h-14 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
      <div className='flex h-14 items-center justify-between px-40 max-md:px-4'>
        <Link href='#' onClick={e => handleScroll(e, '#')} className='font-rubik text-xl'>
          Junexus
        </Link>
        <div className='flex gap-2'>
          {links.map((item, index) => (
            <Link key={index} href={item.link} onClick={e => handleScroll(e, item.link)} className={cn(buttonVariants({ variant: 'ghost', size: 'sm' }))}>
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
