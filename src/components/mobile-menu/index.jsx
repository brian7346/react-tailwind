import React from 'react'
import { MenuItem } from '../menu-item';
import { Button } from '../button'
import { NavItem } from '../nav-item';
import { FEATURES, COMPANY } from '../header/constants';


export const MobileMenu = ({ isOpen = false }) => {
  return (
    <>
      <div className={`absolute top-0 left-0 right-0 bg-almost-black opacity-50 z-10 min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`} />
      <div className={`absolute right-0 top-0 w-1/2 bg-white z-20 justify-center min-h-[150vh] ${isOpen ? 'flex' : 'hidden'}`}>
        <nav className="my-20 mx-5 space-y-5 text-lg w-full">
          <NavItem text="Features">
            <div className="mobile-menu-items">
              {FEATURES.map(({ text, icon }) => <MenuItem text={text} icon={icon} key={text} />)}
            </div>
          </NavItem>
          <NavItem text="Company" >
            <div className="mobile-menu-items">
              {COMPANY.map(({ text, icon }) => <MenuItem text={text} icon={icon} key={text} />)}
            </div>
          </NavItem>
          <NavItem text="Careers" />
          <NavItem text="About" />
          <div className="flex flex-col space-y-5">
            <Button> Loggin </Button>
            <Button hasBorder={true}> Register </Button>
          </div>
        </nav>
      </div>
    </>
  )
}
