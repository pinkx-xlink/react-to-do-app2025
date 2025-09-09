import React from 'react'

const TodaysDate = () => {
 
  // const currentDate = Date.prototype.toDateString();
  const d = new Date();
  const currentDate = d.toDateString()

  return (
    <div>{currentDate}</div>
  )
}

export default TodaysDate