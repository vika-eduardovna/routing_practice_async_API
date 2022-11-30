import React from 'react'
import s from './style.module.sass'
import { NavLink } from 'react-router-dom'

export default function Nav() {
    const active_style = ({isActive}) => isActive ? s.active : ''
    return (
        <nav className={s.nav}>
            <NavLink
                className={active_style}
                to="/">Home</NavLink>
            <NavLink
                className={active_style}
                to="/about">About us</NavLink>
            <NavLink
                className={active_style}
                to="/categories">Categories</NavLink>
        </nav>
    )
}
