import input from './day_12_input'
import { complex, add, multiply, dotPow } from 'mathjs'

const updateShip = (position, dir, line) => {
  let inst = line.charAt(0)
  let amount = line.slice(1)

  switch (inst) {
    case 'E':
      position = add(position, complex(amount, 0))
      break
    case 'S':
      position = add(position, complex(0, -amount))
      break
    case 'W':
      position = add(position, complex(-amount, 0))
      break
    case 'N':
      position = add(position, complex(0, amount))
      break
    case 'L':
      amount /= 90
      dir = multiply(dir, dotPow(complex(0, 1), amount))
      break
    case 'R':
      amount /= 90
      dir = multiply(dir, dotPow(complex(0, -1), amount))
      break
    case 'F':
      position = add(position, multiply(dir, amount * 1))
      break
    default:
  }

  return { newPosition: position, newDirection: dir }
}

const convertToPercent = (num) => {
  const [min, max] = [-634, 1502]
  const range = max - min
  return (num - min) / range * 100
}

const getNextPosition = (pos, dir, index) => {
  return updateShip(pos, dir, input[index])
}

export { convertToPercent, getNextPosition }