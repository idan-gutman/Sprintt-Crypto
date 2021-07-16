import React, { useEffect, useState } from 'react'
import Phone from "../assets/imgs/Mockup-cut.png";
import Logo from "../assets/imgs/logo.png";

export const DesktopScreen = () => {
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    useEffect(() => {
        setScreenWidth(screenWidth);
        console.log(screenWidth);
    })

    return (
        <React.Fragment>
            {screenWidth > 768 && <section className="desktop-screen">
                <div className="desktop-content">
                    <div className="desktop-txt">
                        <p className="title">sprintt<span>crypto</span></p>
                        <p className="subtitle">Please open the app from a mobile device</p>
                    </div>
                    <div>
                        <img className="phone-img" src={Phone} alt="" />
                    </div>
                </div>
            </section>}
            {screenWidth < 768 && <div className="mobile-content">
                <img className="logo" src={Logo} alt="" />
            </div>}
        </React.Fragment>
    )
}