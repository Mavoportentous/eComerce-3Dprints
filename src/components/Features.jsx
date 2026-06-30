export default function Features() {
  return (
    <section className="features">
      <div className="features-container">
        <h2>Calidad que se ve, seguridad que se siente</h2>
        <p className="features-subtitle">
          Cada pieza está diseñada y probada por pilotos para ofrecer el mejor rendimiento en cada vuelo.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-item">
          <div className="feature-number">01</div>
          <h3>Envíos seguros a todo el país</h3>
          <p>Realizamos envíos rápidos y seguros a toda la república. Tu compra llega en perfectas condiciones.</p>
        </div>

        <div className="feature-item">
          <div className="feature-number">02</div>
          <h3>Páginas protegidas</h3>
          <p>Compra con confianza. Protegemos tu información personal y tus transacciones con encriptación avanzada.</p>
        </div>

        <div className="feature-item">
          <div className="feature-number">03</div>
          <h3>Soporte especializado</h3>
          <p>Nuestro equipo de expertos está disponible para resolver tus dudas sobre instalación y compatibilidad.</p>
        </div>

        <div className="feature-item">
          <div className="feature-number">04</div>
          <h3>Garantía de calidad</h3>
          <p>Todos nuestros accesorios incluyen garantía de reemplazo si llegan con defectos de fabricación.</p>
        </div>
      </div>
    </section>
  )
}
