import React, { useEffect, useState } from 'react'
import { DesktopScreen } from "../pages/DesktopScreen"
import { Menu } from "../cmps/Menu"
import { Route, NavLink, Router, Switch } from 'react-router-dom';
import { AllCoins } from './AllCoins';
import { TrackedCoins } from './TrackedCoins';

export const HomePage = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const breakpoint = 768;

    // useEffect(() => {
    //     const handleResize = () => {
    //         setScreenWidth(window.innerWidth);
    //     }
    //     window.addEventListener('resize', handleResize);

    //     return () => {
    //         window.removeEventListener("resize", handleResize);
    //     }
    // }, [screenWidth])

    return (
        <React.Fragment>
            {/* {screenWidth > breakpoint ? <DesktopScreen />: <Menu />} */}
           <Menu />
            <Switch>
                <Route component={AllCoins} path="/home/all" />
                <Route component={TrackedCoins} path="/home/tracked" />
            </Switch>
        </React.Fragment>
    )
}