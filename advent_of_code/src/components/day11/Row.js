import React from 'react'

const RowComp = ({ row, complete }) => (
  <div className="seats__row">
    {row.map((seat) => {
      let newComp
      switch (seat) {
        case ' ':
          newComp = <div className="seat"></div>
          break
        case 'L':
          newComp = <div className="seat--unfilled"></div>
          break
        case '#':
          newComp = <div className={complete ? 'seat--filled-green' : 'seat--filled'}></div>
          break
        default:
          newComp = <div className="seat--unfilled"></div>
          break
      }
      return newComp
    })
    }
  </div>
)

export default RowComp