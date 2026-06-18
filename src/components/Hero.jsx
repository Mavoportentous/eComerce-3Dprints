export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-label">ACCESORIOS IMPRESOS EN 3D</span>
          <h1 className="hero-title">Diseñados para volar mejor.</h1>
          <p className="hero-description">
            Accesorios premium para drones DJI. Impresos en 3D con precisión milimétrica para una experiencia de vuelo superior.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">Ver accesorios</button>
            <button className="btn btn-secondary">Explorar por dron</button>
          </div>
        </div>
        <div className="hero-image">
          <div className="drone-image">
            <span className="text-4xl">🚁</span>
          </div>
        </div>
      </div>

      <div className="hero-features">
        <div className="hero-feature">
          <div className="feature-icon">📏</div>
          <div className="feature-text">
            <h3>Precisión milimétrica</h3>
          </div>
        </div>
        <div className="hero-feature">
          <div className="feature-icon">🔧</div>
          <div className="feature-text">
            <h3>Materiales de alta calidad</h3>
          </div>
        </div>
        <div className="hero-feature">
          <div className="feature-icon">⚙️</div>
          <div className="feature-text">
            <h3>Compatibilidad garantizada</h3>
          </div>
        </div>
        <div className="hero-feature">
          <div className="feature-icon">✅</div>
          <div className="feature-text">
            <h3>Garantía de calidad</h3>
          </div>
        </div>
      </div>
    </section>
  )
}
