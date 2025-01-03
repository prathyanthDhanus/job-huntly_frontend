
import React from 'react'

const CommonLoader = () => {
  return (
    <div className="flex-col gap-4 w-full flex items-center justify-center h-screen">
    <div className="w-20 h-20 border-4 border-transparent text-blue-400 text-4xl animate-spin flex items-center justify-center border-t-blue-600 rounded-full">
      <div className="w-16 h-16 border-4 border-transparent text-red-400 text-2xl animate-spin flex items-center justify-center border-t-red-600 rounded-full"></div>
    </div>
  </div>
  )
}

export default CommonLoader
