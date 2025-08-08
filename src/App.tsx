import React from 'react'
import Header from './components/Header'
import PromoStrip from './components/PromoStrip'
import Lobby from './components/Lobby'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main className="main">
        <PromoStrip />
        <Lobby />
        <section className="details-preview">
          <h2>Game detail preview</h2>
          <div className="game-preview">
            <div className="iframe-placeholder">GAME IFRAME</div>
            <div className="game-tabs">
              <div className="tab">Rules</div>
              <div className="tab">Statistics</div>
              <div className="tab active">Bet History</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
