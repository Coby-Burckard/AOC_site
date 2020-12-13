import React from 'react'

const Header = ({ setDay }) => (
  <section className="nav">
    <div className="nav__link" onClick={() => setDay(11)}>Day 11</div>
    <div className="nav__link" onClick={() => setDay(12)}>Day 12</div>
  </section>
)

export default Header