import { useState } from 'react'
import PhotoGallery from './PhotoGallery'

const projects = [
  {
    title: '路测项目',
    description: '一款基于 RoboMaster C 型开发板的车载微型震动采集黑匣子，提供 100Hz 高频三轴加速度采集与离线持久化功能，支持 Python 频谱分析，以数据驱动指导机甲物流防震材料选型与走线装配优化。',
    tags: ['Python', 'C', 'C++'],
    github: 'https://github.com/SZPU-RoboMaster-Embedded-Team/Traffic-condition-tesk',
  },
  {
    title: '底盘',
    description: '一款基于 RoboMaster C 型开发板的舵轮步兵底盘，支持多种控制模式，适用于各种机器人竞赛和应用场景。',
    tags: ['C', 'C++'],
    github: 'https://github.com/henyilin886/HelmswheelKingFirst',
  },
  {
    title: '云台',
    description: '一款基于 RoboMaster C 型开发板的小型云台，支持俯仰和偏航控制，适用于各种机器人竞赛和应用场景。',
    tags: ['C'],
    github: 'https://github.com/henyilin886/DIANJI2',
  },
]

function ExternalLinkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  )
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isGalleryOpen, setIsGalleryOpen] = useState(false)

  const openGallery = (project) => {
    setSelectedProject(project)
    setIsGalleryOpen(true)
  }

  const closeGallery = () => {
    setIsGalleryOpen(false)
    setSelectedProject(null)
  }

  return (
    <section id="projects" className="section">
      <p className="section-label">项目</p>
      <h2 className="section-title">精选作品</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.title} className="project-card">
            <div className="project-header">
              <h3 className="project-title">{project.title}</h3>
              <div className="project-links">
                <button
                  className="project-photo-btn"
                  onClick={() => openGallery(project)}
                  aria-label="照片展示"
                >
                  <ImageIcon />
                  <span>照片展示</span>
                </button>
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" className="project-link" aria-label="GitHub">
                    <GitHubIcon />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project-link" aria-label="Demo">
                    <ExternalLinkIcon />
                  </a>
                )}
              </div>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag} className="project-tag">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <PhotoGallery
        isOpen={isGalleryOpen}
        onClose={closeGallery}
        project={selectedProject}
      />
    </section>
  )
}
