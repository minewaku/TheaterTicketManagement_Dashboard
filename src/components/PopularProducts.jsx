import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

function PopularProducts() {
    const context = useContext(ThemeContext)

    return (
        <div className='bg-white ox-4 pt-3 pb-4 rounded-sm border border-gray-200 w-[20rem]'>
            <button className='bg-white dark:bg-black' onClick={context.toggleTheme}>Change mode</button>
        </div>
    )
}

export default PopularProducts