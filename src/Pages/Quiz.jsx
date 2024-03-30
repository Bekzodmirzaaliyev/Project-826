
import { Link } from 'react-router-dom'

const Quiz = () => {
  return (
    <div className='max-w-[80%] mx-auto py-[30px]'>
      <div className='flex flex-col gap-[30px]'>
      <Link to="/quiz/react">
        <div className='border border-slate-900 rounded-xl flex transition active:scale-90 hover:shadow-lg hover:shadow-slate-400  hover:border-slate-400'>
          <div className='w-[200px] justify-center font-bold text-[20px] text-white flex items-center py-[10px] rounded-l-xl bg-emerald-500'>
            Navruz
          </div>
          <div className='px-[200px] flex justify-center text-[20px] font-semibold py-[30px]'>
            Quiz-React
          </div>
        </div>
        </Link>

        <Link to="/quiz/cars">
        <div className='border border-slate-900 rounded-xl flex transition active:scale-90 hover:shadow-lg hover:border-slate-400 hover:shadow-slate-400'>
          <div className='w-[200px] justify-center font-bold text-[20px] text-white flex items-center py-[10px] rounded-l-xl bg-emerald-500'>
            Shaxriyor
          </div>
          <div className='px-[200px] text-[20px] font-semibold py-[30px]'>
            Quiz-Cars
          </div>
        </div></Link>

        <Link to="/quiz/js">
        <div className='border border-slate-900 rounded-xl flex transition active:scale-90 hover:shadow-lg hover:border-slate-400 hover:shadow-slate-400'>
          <div className='w-[200px] justify-center font-bold text-[20px] text-white flex items-center py-[10px] rounded-l-xl bg-emerald-500'>
            Yahyo
          </div>
          <div className='px-[200px] text-[20px] font-semibold py-[30px]'>
            Quiz-Javascript
          </div>
        </div></Link>

        <Link to="/quiz/countries">
        <div className='border border-slate-900 rounded-xl flex transition active:scale-90 hover:shadow-lg hover:shadow-slate-400 hover:border-slate-400'>
          <div className='w-[200px] flex justify-center font-bold text-[20px] text-white items-center py-[10px] rounded-l-xl bg-emerald-500'>
            Asilbek
          </div>
          <div className='px-[200px] text-[20px] font-semibold py-[30px]'>
            Quiz-Countries
          </div>
        </div></Link>
      </div>
    </div>
  )
}

export default Quiz