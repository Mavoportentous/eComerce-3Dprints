export default function DroneCategories() {
  const drones = [
    {
      id: 1,
      name: 'Mini 4 Pro',
      emoji: '🚁',
      accessoryCount: 12,
      color: '#e8f4f8'
    },
    {
      id: 2,
      name: 'Mini 3 / 3 Pro',
      emoji: '✈️',
      accessoryCount: 8,
      color: '#f0e8f8'
    },
    {
      id: 3,
      name: 'Mavic 3 / 3 Pro',
      emoji: '🛸',
      accessoryCount: 15,
      color: '#e8f8f0'
    },
    {
      id: 4,
      name: 'Avata 2',
      emoji: '🎮',
      accessoryCount: 10,
      color: '#f8f0e8'
    }
  ]

  return (
    <section id="categorias" className="drone-categories">
      <div className="section-header">
        <h2>Explorar por dron</h2>
        <a href="#" className="see-all">Ver todos los modelos →</a>
      </div>

      <div className="categories-grid">
        {drones.map(drone => (
          <div key={drone.id} className="category-card" style={{ backgroundColor: drone.color }}>
            <div className="drone-emoji">{drone.emoji}</div>
            <h3>{drone.name}</h3>
            <p>Ver accesorios →</p>
          </div>
        ))}
      </div>
    </section>
  )
}
