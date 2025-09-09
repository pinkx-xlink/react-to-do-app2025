import React, { useState } from 'react'

const DateSidebar = () => {

  const [days] = useState(['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']);
  const today = new Date();

  return (
    <>
    <div className='days__container'>
        {days.map((day, index) => {
            const date = new Date(today);
            date.setDate(today.getDate() + index);
            return (
                <button key={day}>
                    {day} - {date.toLocaleDateString()}
                </button>
            );
        })}
    </div>
    </>
  )
}

export default DateSidebar