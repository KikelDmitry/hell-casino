import React from 'react'
import GameCard from './GameCard'

export default function Lobby(){
  const demoGames = new Array(8).fill(0).map((_,i)=> ({
    title: "Inferno Slot " + (i+1),
    provider: ["RedDev","BlackFire","ReignV"][i%3],
    rtp: (95 + i%4*0.5).toFixed(1),
    tag: i===0 ? "HOT" : (i<3 ? "NEW" : undefined)
  }));
  return (
    <section className="lobby">
      <h2>Top Games</h2>
      <div className="games-grid">
        {demoGames.map((g,idx)=>(<GameCard key={idx} {...g}/>))}
      </div>
    </section>
  )
}
