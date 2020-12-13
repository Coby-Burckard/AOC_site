import input from './day_11_input'

const findVisibleSeat = (seats, row, column, rowInc, colInc) => {
  const seat = seats[row] === undefined ? undefined : seats[row][column]

  switch (seat) {
    case undefined:
      return 0
    case 'L':
      return 0
    case '#':
      return 1
    default:
      return findVisibleSeat(seats, row + rowInc, column + colInc, rowInc, colInc)
  }
}

const lifeFindsAWay = (row, column, seats) => {
  const center = seats[row][column]

  if (center === '.') {
    return center
  }

  let occupied = 0

  for (let rMod = -1; rMod <= 1; rMod++) {
    for (let cMod = -1; cMod <= 1; cMod++) {
      if (!(rMod === 0 && cMod === 0)) {
        occupied += findVisibleSeat(seats, row + rMod, column + cMod, rMod, cMod)
      }
    }
  }

  if (center === 'L' && occupied === 0) {
    return '#'
  } else if (center === '#' && occupied >= 5) {
    return 'L'
  }

  return center
}

const oneStep = (input) => {
  return input.map((rowArray, row) => rowArray.map((seat, column) => lifeFindsAWay(row, column, input)))
}

const condenseArrangement = (seats) => {
  return seats.map((rowArray) => rowArray.join('')).join('')
}

const areSeatsSame = (one, two) => {
  return condenseArrangement(one) === condenseArrangement(two)
}

const countOccupied = (seats) => {
  return seats.reduce((count, rowArray) => {
    rowArray.forEach((seat) => {
      if (seat === '#') {
        count++
      }
    })
    return count
  }, 0)
}

export { input, oneStep, areSeatsSame, countOccupied }