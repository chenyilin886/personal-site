export default function About() {
  return (
    <section id="about" className="section">
      <p className="section-label">关于我</p>
      <h2 className="section-title">了解更多</h2>
      <div className="about-grid">
        <div className="about-text">
          <p>
            我是深圳职业技术大学的一名大一新生，目前正在软件技术的代码世界里努力探索。虽然还是个初出茅庐的“软件小白”，但我对编程充满热情，期待着有一天能用自己敲出的代码解决真实的痛点。
          </p>
          <p>
            在课余时间，我喜欢折腾各种新技术，也乐于尝试动手写一些有趣的小项目。我深知通往优秀开发者的路还很长，但我已经准备好享受这段充满挑战与成就感的“打怪升级”之旅。
          </p>
        </div>
        <div className="about-details">
          <div className="about-detail-item">
            <span className="about-detail-label">位置</span>
            <span className="about-detail-value">中国，深圳</span>
          </div>
          <div className="about-detail-item">
            <span className="about-detail-label">学习方向</span>
            <span className="about-detail-value">软件技术</span>
          </div>
          <div className="about-detail-item">
            <span className="about-detail-label">技术栈</span>
            <span className="about-detail-value"> C,C++ (持续扩充中)</span>
          </div>
          <div className="about-detail-item">
            <span className="about-detail-label">兴趣</span>
            <span className="about-detail-value">台球 / 健身 / 了解最新AI技术</span>
          </div>
        </div>
      </div>
    </section>
  )
}