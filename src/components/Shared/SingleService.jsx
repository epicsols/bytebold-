import React, { useState } from 'react'

const SingleService = ({Icon, title, desc}) => {
    const [bg, setBg] = useState('#22405C')
    return (
        <div className='border overflow-hidden hover:bg-[#042E58] group border-[#22405c2f] p-8 rounded-3xl'  onMouseLeave={()=> setBg('#22405C')} onMouseEnter={() => setBg('#fff')}>
            <Icon bg={bg}  />
            <h3 className='text-[#22405C] group-hover:text-white font-soehne mt-7 text-xl font-bold leading-6 tracking-[0.22px]'>
                {title}
            </h3>
            <p className='mt-4 text-[#22405ca9] group-hover:text-white text-base font-light font-Outfit leading-6'>
                {desc}
            </p>
        </div>
    )
}

export default SingleService
