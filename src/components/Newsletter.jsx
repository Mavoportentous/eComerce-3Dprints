import React, { useState } from 'react'
import { Mail } from 'lucide-react'

export default function Newsletter() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert(`Gracias por suscribirse: ${email}`)
    setEmail('')
  }

  return (
    <section className="newsletter">
      <div className="newsletter-container">
        <div className="newsletter-content">
          <h2>Mantente actualizado</h2>
          <p>Recibe ofertas exclusivas, nuevos productos y tips de mantenimiento directamente en tu correo.</p>
        </div>
        <form className="newsletter-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <Mail size={20} />
            <input 
              type="email" 
              placeholder="tu@correo.com" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Suscribirse</button>
        </form>
      </div>
    </section>
  )
}
