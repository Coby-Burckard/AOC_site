import React, { useState } from 'react'
import Header from './components/Header'
import Seats from './components/day11/Seats'
import Day12 from './components/day12/Day12'

function App() {
  const [day, setDay] = useState(11)

  return (
    <div className="App">
      <Header setDay={setDay} />
      <h1>Day {day}</h1>
      <p>Animated solution to <a href="https://adventofcode.com/2020/">Advent of Code</a>'s Day {day} challenge</p>
      {day === 11 && <Seats />}
      {day === 12 && <Day12 />}
    </div>
  );
}

export default App;
