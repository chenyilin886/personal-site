import { useState, useRef } from 'react'
import './PhotoGallery.css'

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}

function UploadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" y1="3" x2="12" y2="15" />
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

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  )
}

export default function PhotoGallery({ isOpen, onClose, project }) {
  const [photos, setPhotos] = useState({})
  const fileInputRef = useRef(null)

  const handleFileSelect = (e) => {
    const files = e.target.files
    if (files && files.length > 0) {
      const newPhotos = Array.from(files).map(file => ({
        id: Date.now() + Math.random(),
        url: URL.createObjectURL(file),
        name: file.name
      }))

      setPhotos(prev => ({
        ...prev,
        [project?.title]: [...(prev[project?.title] || []), ...newPhotos]
      }))
    }
  }

  const handleUploadClick = () => {
    fileInputRef.current?.click()
  }

  const handleDeletePhoto = (id) => {
    setPhotos(prev => ({
      ...prev,
      [project?.title]: prev[project?.title].filter(photo => photo.id !== id)
    }))
  }

  const currentProjectPhotos = photos[project?.title] || []

  if (!isOpen) return null

  return (
    <div className="gallery-overlay" onClick={onClose}>
      <div className="gallery-modal" onClick={e => e.stopPropagation()}>
        <div className="gallery-header">
          <div className="gallery-title">
            <ImageIcon />
            <span>{project?.title} - 照片展示</span>
          </div>
          <button className="gallery-close" onClick={onClose}>
            <CloseIcon />
          </button>
        </div>

        <div className="gallery-content">
          {currentProjectPhotos.length === 0 ? (
            <div className="gallery-empty">
              <ImageIcon />
              <p>暂无照片</p>
              <p className="gallery-empty-hint">点击下方按钮上传项目照片</p>
            </div>
          ) : (
            <div className="gallery-grid">
              {currentProjectPhotos.map(photo => (
                <div key={photo.id} className="gallery-item">
                  <img
                    src={photo.url}
                    alt={photo.name}
                    onClick={() => window.open(photo.url, '_blank')}
                    style={{ cursor: 'pointer' }}
                  />
                  <button
                    className="gallery-item-delete"
                    onClick={() => handleDeletePhoto(photo.id)}
                    aria-label="删除照片"
                  >
                    <CloseIcon />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="gallery-footer">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            onChange={handleFileSelect}
            className="gallery-hidden-input"
          />
          <button className="gallery-upload-btn" onClick={handleUploadClick}>
            <UploadIcon />
            <PlusIcon />
            上传照片
          </button>
        </div>
      </div>
    </div>
  )
}
