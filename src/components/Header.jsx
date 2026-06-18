import React, { useState } from 'react'
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react'

export default function Header({ cartCount }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-banner">
          📦 Envíos seguros a todo el país
        </div>
        <div className="header-banner">
          🎯 Impresión 3D de alta precisión
        </div>
        <div className="header-banner">
          ✅ Calidad garantizada
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-section">
            <div className="logo">🚁 FPV 3D LAB</div>
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
            <li><a href="#categorias">Categorías</a></li>
            <li><a href="#novedades">Novedades</a></li>
            <li><a href="#sobrenosotros">Sobre nosotros</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>

          <div className="nav-icons">
            <button className="icon-btn" title="Buscar">
              <Search size={20} />
            </button>
            <button className="icon-btn" title="Mi cuenta">
              <User size={20} />
            </button>
            <button className="icon-btn cart-btn" title="Carrito">
              <ShoppingCart size={20} />
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}
