import React, { useState } from 'react'
import useInterval from '@use-it/interval';

import { input, oneStep, areSeatsSame, countOccupied } from '../utils/day_11_logic'
import Row from './Row'

const SeatsComp = () => {

  const [seats, setSeats] = useState(input)
  const [steps, setSteps] = useState(0)
  const [occupiedSeats, setoccupiedSeats] = useState(0)
  const [complete, setComplete] = useState(false)

  const topClassName = complete ? 'seats--green' : 'seats'

  useInterval(() => {
    if (!complete) {
      const nextSeats = oneStep(seats)
      if (areSeatsSame(seats, nextSeats)) {
        setComplete(true)
      }
      setoccupiedSeats(countOccupied(nextSeats))
      setSeats(oneStep(seats))
      setSteps(steps + 1)
    }
  }, 250)

  return (
    <div className={topClassName}>
      <div className="summary">
        <div>Steps: {steps}</div>
        <div>Occupied Seats: {occupiedSeats}</div>
      </div>
      {seats.map((row) => <Row row={row} complete={complete} />)}
    </div>
  )
}

export default SeatsComp