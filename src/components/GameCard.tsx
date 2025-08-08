import React from 'react'

interface GameCardProps{
  title: string
  provider: string
  rtp: string
  tag?: string
}

export default function GameCard({title, provider, rtp, tag}: GameCardProps){
  return (
    <div className="game-card">
      <div className="thumb">
        {tag && <div className="badge">{tag}</div>}
        <div className="thumb-placeholder">Preview</div>
      </div>
      <div className="meta">
        <div className="title">{title}</div>
        <div className="sub">
          <span className="provider">{provider}</span>
          <span className="rtp">RTP {rtp}</span>
        </div>
        <div className="actions">
          <button className="btn ghost small">Demo</button>
          <button className="btn primary small">Play</button>
        </div>
      </div>
    </div>
  )
}
