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
      tags: ['Nextjs', 'Tailwindcss', 'Shadcn Ui'],
      link: 'https://github.com/shadowDragons/text2image',
    },
  ]

  return (
    <section id='projects' className='w-full py-20 scroll-mt-28 mt-20'>
      <FramerWrapper y={50} x={0}>
        <Heading>{t('heading')}</Heading>
        <div className='w-full mt-10 flex flex-wrap gap-6 justify-start max-lg:justify-center'>
          {projects.map((project, index) => (
            <ProjectCards key={index} value={project} num={index} />
          ))}
        </div>
      </FramerWrapper>
    </section>
  )
}

export default Projects
