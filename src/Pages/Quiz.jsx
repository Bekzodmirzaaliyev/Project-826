import React from 'react'
import { Link } from 'react-router-dom'

const Quiz = () => {
  return (
    <div className='max-w-[80%] mx-auto'>
      <Link to="/quizreact">
        <div className='border-2 border-slate-900 rounded-xl flex'>
          <div className='px-[30px] flex items-center py-[10px] rounded bg-emerald-500'>
            Navruz
          </div>
          <div className='px-[200px] py-[30px]'>
            Quiz-React
          </div>
        </div></Link>
    </div>
  )
}

export default Quiz