import React from 'react'
import { MenuItem } from '../menu-item';


export const NavMenu = ({ items }) => {
  return (
    <div className='hidden xl:flex flex-col px-4 py-2 bg-almost-white drop-shadow-lg rounded-lg absolute top-10 right-0 w-36 space-y-2 z-30'>
        { items.map(({ text, icon }) => <MenuItem text={ text } icon={ icon } key={ text } />) }
    </div>
  )
}
