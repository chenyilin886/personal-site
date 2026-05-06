export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#home" className="navbar-logo">Portfolio</a>
        <div className="navbar-links">
          <a href="#about">关于</a>
          <a href="#projects">项目</a>
          <a href="#contact">联系</a>
        </div>
      </div>
    </nav>
  )
}
