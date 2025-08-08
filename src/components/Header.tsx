import React from 'react'

export default function Header(){
  return (
    <header className="header">
      <div className="logo">
        <img src="/assets/logo.png" alt="Hell Casino logo" />
      </div>
      <nav className="nav">
        <a>Games</a><a>Live</a><a>Providers</a><a>Promotions</a><a>About</a>
      </nav>
      <div className="auth">
        <button className="btn ghost">Log in</button>
        <button className="btn primary">Sign up</button>
      </div>
    </header>
  )
}
