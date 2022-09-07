import React, { useState } from 'react';
import { ReactComponent as LogoIcon } from '../../images/logo.svg'; 
import { ReactComponent as MenuIcon } from '../../images/icon-menu.svg'; 
import { ReactComponent as CloseMenuIcon } from '../../images/icon-close-menu.svg'; 
import { Button } from '../button';
import { NavItem } from '../nav-item';
import { MobileMenu } from '../mobile-menu';
import { NavMenu } from '../nav-menu';
import { COMPANY, FEATURES } from './constants';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  return (
    <header className="flex">
        <LogoIcon />
        <nav className="hidden xl:flex space-x-6 ml-8 items-center">
            <NavItem text="Features">
              <NavMenu items={ FEATURES }/>
            </NavItem>
            <NavItem text="Company">
              <NavMenu items={ COMPANY } />
            </NavItem>
            <NavItem text="Careers" />
            <NavItem text="About" />
        </nav>
        <div
          className="flex xl:hidden ml-auto cursor-pointer z-30"
          onClick={ () => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          { isMobileMenuOpen ? <CloseMenuIcon /> : <MenuIcon /> }
        </div>
        <div className="hidden ml-auto xl:flex space-x-5">
          <Button > Loggin </Button>
          <Button hasBorder={ true }> Register </Button>
        </div>
        <MobileMenu isOpen={ isMobileMenuOpen }/>
    </header>
  )
}
