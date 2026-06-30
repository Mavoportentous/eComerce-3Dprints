import React from 'react'
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>🚁 FPV 3D LAB</h3>
          <p>Accesorios premium para drones, impresos en 3D con precisión milimétrica.</p>
          <div className="social-links">
            <a href="#" title="Facebook"><Facebook size={20} /></a>
            <a href="#" title="Instagram"><Instagram size={20} /></a>
            <a href="#" title="Twitter"><Twitter size={20} /></a>
            <a href="#" title="Email"><Mail size={20} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Categorías</h4>
          <ul>
            <li><a href="#">Mini 4 Pro</a></li>
            <li><a href="#">Mini 3 / 3 Pro</a></li>
            <li><a href="#">Mavic 3 / 3 Pro</a></li>
            <li><a href="#">Avata 2</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Información</h4>
          <ul>
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Contacto</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Términos de servicio</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Soporte</h4>
          <ul>
            <li><a href="#">Preguntas frecuentes</a></li>
            <li><a href="#">Guía de compra</a></li>
            <li><a href="#">Estado de pedido</a></li>
            <li><a href="#">Devoluciones</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 FPV 3D LAB. Todos los derechos reservados.</p>
        <div className="payment-methods">
          <span>Medios de pago: 💳 💰 🏦</span>
        </div>
      </div>
    </footer>
  )
}
