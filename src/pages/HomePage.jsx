import React, { useEffect, useState } from 'react'
import { DesktopScreen } from "../pages/DesktopScreen"
import { Menu } from "../cmps/Menu"
import { Route, NavLink, Router, Switch } from 'react-router-dom';
import { AllCurrencies } from '../pages/AllCurrencies';
import { TrackedCurrencies } from '../pages/Tracked Currencies';

export const HomePage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    return (
        <React.Fragment>
            {screenWidth > breakpoint ? <DesktopScreen />: <Menu />}
            <Switch>
                <Route component={AllCurrencies} path="/all" />
                <Route component={TrackedCurrencies} path="/tracked" />
            </Switch>

        </React.Fragment>
    )
}