import React, { useState } from 'react';
import { ReactComponent as ArrowDownIcon } from '../../images/icon-arrow-down.svg'
import { ReactComponent as ArrowUpIcon } from '../../images/icon-arrow-up.svg'
import { NavMenu } from '../nav-menu';

export const NavItem = ({ text = '', children}) => {
  const [ selected, setSelected ] = useState('');

  return (
    <div className='relative'>
      <div className='flex space-x-2 cursor-pointer'>
        <span
          className='text-medium-gray hover:almost-black'
          onClick={() => children && setSelected(text !== selected ? text : '')}
        >
          {text}
        </span>
        { children && selected !== text && <ArrowDownIcon />}
        { children && selected === text && <ArrowUpIcon />}
      </div>
      { selected && children }
    </div>
  )
}
