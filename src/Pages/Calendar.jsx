import React, { useState } from 'react';
import moment from 'moment';

function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(moment());

  const daysInMonth = currentMonth.daysInMonth();
  const firstDayOfMonth = moment(currentMonth).startOf('month').format('d');
  const blankDays = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    blankDays.push(<div key={i} className="p-5 border rounded-xl"></div>);
  }

  const handleDateClick = (day) => {
    console.log(`Clicked on: ${currentMonth.format('MMMM')} ${day}`);
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center flex-col">
      <div className="mt-4 flex justify-between items-center w-64 text-xl font-semibold">
        <button onClick={() => setCurrentMonth(currentMonth.clone().subtract(1, 'month'))} className='hover:text-gray-600'>Previous</button>
        <button onClick={() => setCurrentMonth(moment())} className='hover:text-gray-600'>Today</button>
        <button onClick={() => setCurrentMonth(currentMonth.clone().add(1, 'month'))} className='hover:text-gray-600'>Next</button>
      </div>
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-semibold mb-4">{currentMonth.format('MMMM YYYY')}</h1>
        <div className="grid grid-cols-7 gap-2">
          <div className="text-center font-semibold">Sun</div>
          <div className="text-center font-semibold">Mon</div>
          <div className="text-center font-semibold">Tue</div>
          <div className="text-center font-semibold">Wed</div>
          <div className="text-center font-semibold">Thu</div>
          <div className="text-center font-semibold">Fri</div>
          <div className="text-center font-semibold">Sat</div>
          {blankDays}
          {[...Array(daysInMonth)].map((_, index) => {
            const day = index + 1;
            return (
              <div
                key={day}
                className="p-5 text-center border rounded-xl cursor-pointer text-xl"
                onClick={() => handleDateClick(day)}
              >
                {day}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Calendar;
