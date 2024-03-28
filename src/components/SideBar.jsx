import React from 'react'

const SideBarAbdulloh = () => {
  return (
    <aside className='h-full min-h-screen glass w-2/6 bg-slate-900'>
      {/* Rating */}
      <div className="p-4">
        <div className="flex text-[10px] p-2 bg-sky-300 gap-5 rounded-lg shadow-sky-400 shadow-md">
          <p className='w-1/3 flex flex-col border-r-sky-100 border-r-2'>
            <span className='font-bold text-sky-700'>ism:</span>
            <span className='font-medium text-white'>Abdulloh Alisherov</span>
          </p>
          <p className='w-1/3 flex flex-col border-r-sky-100 border-r-2'>
            <span className='font-bold text-sky-700'>Group:</span>
            <span className='font-medium text-white'>Front-826</span>
          </p>
          <p className='w-1/3 flex flex-col'>
            <span className='font-bold text-sky-700'>Score:</span>
            <span className='font-medium text-white'>19900MMC</span>
          </p>
        </div>
      </div>
    </aside>
  )
}

export default SideBarAbdulloh