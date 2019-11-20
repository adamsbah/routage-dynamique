import React from 'react'
import {NavLink} from 'react-router-dom'
import './Header.css'

export default function Header() {
    return (
        <header className="Header-header">
            <div>
                <NavLink to='/' activeClassName='selected'>
                Home
                </NavLink>
                <NavLink to='/characters' activeClassName='selected'>
                Characters
                </NavLink>
            </div>
            
      </header>
            
        
    )
}
