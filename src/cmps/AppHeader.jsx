import React, { useState } from 'react'
import { Link, useHistory, useLocation, useParams } from 'react-router-dom'
import { ReactComponent as Menu } from '../assets/svg/menu_black_24dp.svg'
import { ReactComponent as ToggleDark } from '../assets/svg/settings_brightness_white_24dp.svg'
import { toggleDark } from '../actions/CarActions'
import { useDispatch } from 'react-redux'


export function AppHeader() {
    const [isMobile, setIsMobile] = useState(false)
    const dispatch = useDispatch()
    const changeMobile = () => {
        setIsMobile(prev => prev = !prev)
    }

    const onToggle = () => {
        dispatch(toggleDark())
    }
    const history = useHistory()
    // const params = useParams()
    // const location = useLocation()
    return (
        <header className="app-header">
            <nav className="main-nav ">
                {/* {isMobile && <Menu />} */}
                {!isMobile && <div className="left-nav">
                    <Link to='/car'><span>Car</span></Link>
                    <Link to='/about'><span>About</span></Link>
                </div>}
                {isMobile && <div onClick={changeMobile} className="mobile-nav">
                    <Link to='/car'><span>Car</span></Link>
                    <Link to='/about'><span>About</span></Link>
                </div>}
                {isMobile && <div className="background-menu" onClick={changeMobile}></div>}
                <Menu onClick={changeMobile} className="menu-btn" />
                <div className="right-nav">
                    <ToggleDark className="toggle-btn" onClick={() => onToggle()}></ToggleDark>
                    <Link to='/'> <img src="imgs/logo.png" alt="" /></Link>
                </div>
            </nav>
        </header>
    )
}
