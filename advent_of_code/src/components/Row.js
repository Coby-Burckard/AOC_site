import React from 'react'

const RowComp = ({ row, complete }) => (
  <div className="seats__row">
    {row.map((seat) => {
      switch (seat) {
        case ' ':
          return <div className="seat"></div>
        case 'L':
          return <div className="seat--unfilled"></div>
        case '#':
          return <div className={complete ? 'seat--filled-green' : 'seat--filled'}></div>
        default:
          return
      }
    })
    }
  </div>
)

export default RowComp