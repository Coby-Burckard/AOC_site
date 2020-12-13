import React, { useState } from 'react'
import { complex } from 'mathjs'
import useInterval from '@use-it/interval';
import { getNextPosition, convertToPercent } from '../../utils/day_12_logic'
import input from '../../utils/day_12_input'
import boat from './images/boat.svg'

const Day12 = () => {
  const [completed, setCompleted] = useState(false)
  const [index, setIndex] = useState(0)
  const [position, setPosition] = useState(complex(0, 0))
  const [direction, setDirection] = useState(complex(1, 0))
  const [bottom, setBottom] = useState(convertToPercent(position.im))
  const [left, setLeft] = useState(convertToPercent(position.re))
  const [mDist, setMDist] = useState(0)

  useInterval(() => {
    if (!completed) {
      //updating position and direction
      const { newPosition, newDirection } = getNextPosition(position, direction, index)
      setPosition(newPosition)
      setDirection(newDirection)

      //updating absolute positioning %s and manhattan distance
      setBottom(convertToPercent(newPosition.im))
      setLeft(convertToPercent(newPosition.re))
      setMDist(Math.abs(newPosition.im) + Math.abs(newPosition.re))
      console.log(bottom, left)

      //ending the animation
      if (index === input.length - 1) {
        setCompleted(true)
      }
      setIndex(index + 1)
    }
  }, 100)

  //turn green on finish logic
  const solutionClass = completed ? 'solution--green' : 'solution'
  const oceanClass = completed ? 'ocean--green' : 'ocean'

  return (
    <section className={solutionClass}>
      <div className="summary">
        <div>Steps: {index}</div>
        <div>Manhattan distance: {mDist}</div>
      </div>
      <div className={oceanClass}>
        <img className="ship" style={{ bottom: `${ bottom }%`, left: `${ left }%` }} alt="anchor" src={boat}></img>
      </div>
    </section>
  )
}

export default Day12