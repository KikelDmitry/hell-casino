import React from 'react'

export default function PromoStrip(){
  return (
    <section className="promo-strip">
      <div className="promo">
        <h3>Play Now</h3>
        <p className="subhead">Get 20 free spins — demo available</p>
        <div className="promo-actions">
          <button className="btn primary large">Play Now</button>
          <button className="btn ghost large">Details</button>
        </div>
      </div>
      <div className="providers-row">
        <div className="provider-chip">RedDev</div>
        <div className="provider-chip">ReignV</div>
        <div className="provider-chip">LiveHouse</div>
        <div className="provider-chip">BlackFire</div>
      </div>
    </section>
  )
}
