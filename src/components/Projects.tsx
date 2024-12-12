import Heading from './Heading'
import ProjectCards from './ProjectsCard'
import FramerWrapper from './animation/FramerWrapper'
import { useTranslations } from 'next-intl'

const Projects = () => {
  const t = useTranslations('Projects')

  const projects = [
    {
      title: t('text2image.title'),
      description: t('text2image.description'),
      image: '/og-image.png',
      tags: ['Nextjs', 'Tailwindcss', 'Shadcn Ui'],
      link: 'https://github.com/shadowDragons/text2image',
    },
    {
      title: t('text2image.title'),
      description: t('text2image.description'),
      image: '/og-image.png',
      tags: ['Nextjs', 'Tailwindcss', 'Shadcn Ui'],
      link: 'https://github.com/shadowDragons/text2image',
    },
    {
      title: t('text2image.title'),
      description: t('text2image.description'),
      image: '/og-image.png',
      tags: ['Nextjs', 'Tailwindcss', 'Shadcn Ui'],
      link: 'https://github.com/shadowDragons/text2image',
    },
  ]

  return (
    <section id='projects' className='w-full py-10 scroll-mt-28 mt-14'>
      <FramerWrapper y={50} x={0}>
        <Heading>{t('heading')}</Heading>
        <div className='w-full mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
          {projects.map((project, index) => (
            <ProjectCards key={index} value={project} num={index} />
          ))}
        </div>
      </FramerWrapper>
    </section>
  )
}

export default Projects
