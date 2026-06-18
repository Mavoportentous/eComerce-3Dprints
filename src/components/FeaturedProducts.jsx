import React from 'react'

export default function FeaturedProducts({ onAddToCart }) {
  const products = [
    {
      id: 1,
      name: 'Set de Filtros ND (ND8/16/32/64)',
      price: '$49.990',
      compatible: 'Compatible con Mini 4 Pro',
      emoji: '📸',
      color: '#fff0e6'
    },
    {
      id: 2,
      name: 'Tren de aterrizaje elevado',
      price: '$15.990',
      compatible: 'Compatible con Mini 4 Pro',
      emoji: '🦵',
      color: '#e6f0ff'
    },
    {
      id: 3,
      name: 'Protector de gimbal',
      price: '$9.990',
      compatible: 'Compatible con Mavic 3 Pro',
      emoji: '🛡️',
      color: '#e6ffe6'
    },
    {
      id: 4,
      name: 'Sujeta hélices',
      price: '$6.990',
      compatible: 'Compatible con Mini 4 Pro',
      emoji: '🔧',
      color: '#ffe6f0'
    },
    {
      id: 5,
      name: 'Maletín de transporte',
      price: '$39.990',
      compatible: 'Compatible con Mini 4 Pro',
      emoji: '💼',
      color: '#f0e6ff'
    },
    {
      id: 6,
      name: 'Protector de lentes',
      price: '$12.990',
      compatible: 'Compatible con todos los modelos',
      emoji: '👓',
      color: '#fff5e6'
    }
  ]

  return (
    <section id="productos" className="featured-products">
      <div className="section-header">
        <h2>Productos destacados</h2>
        <a href="#" className="see-all">Ver todos los productos →</a>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card" style={{ backgroundColor: product.color }}>
            <div className="product-image">{product.emoji}</div>
            <h3>{product.name}</h3>
            <p className="compatible">{product.compatible}</p>
            <div className="product-footer">
              <span className="price">{product.price}</span>
              <button 
                className="btn-small"
                onClick={onAddToCart}
              >
                Agregar
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
