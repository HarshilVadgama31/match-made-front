import React from 'react'

function MatchList({children}) {
  return (
    <ul className='flex flex-col gap-2 w-full overflow-scroll max-h-[70vh]'>{children}</ul>
  )
}

export default MatchList