import Heading from './Heading'
import ProjectCards from './ProjectsCard'
import FramerWrapper from './animation/FramerWrapper'

const Projects = () => {
  const projects = [
    {
      title: '个人作品集网站',
      description: '使用 Next.js 和 Shadcn UI 构建的现代个人作品集网站，具有动画效果和响应式设计。',
      tags: ['Nextjs', 'Typescript', 'Shadcn Ui'],
      link: 'https://github.com/yourusername/portfolio',
    },
    {
      title: '在线商城系统',
      description: '基于 React 和 Node.js 的全栈电商平台，支持用户认证、商品管理和支付功能。',
      tags: ['React', 'Node.js', 'MongoDB'],
      link: 'https://github.com/yourusername/ecommerce',
    },
    {
      title: '社交媒体应用',
      description: '使用 MERN 技术栈开发的社交媒体平台，支持实时聊天和帖子分享。',
      tags: ['MongoDB', 'Express', 'React'],
      link: 'https://github.com/yourusername/social-media',
    },
  ]

  return (
    <section id='projects' className='w-full py-20 scroll-mt-28 mt-20'>
      <FramerWrapper y={50} x={0}>
        <Heading>项目展示</Heading>
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
