import React from 'react';
import Phone from "../assets/imgs/Mockup-cut.png";

export const DesktopScreen = () => {
    return (
        <section className="desktop-screen">
            <div className="desktop-content">
                <div className="desktop-txt">
                    <p className="title">sprintt<span>crypto</span></p>
                    <p className="subtitle">Please open the app from a mobile device</p>
                </div>
                <div>
                    <img className="phone-img" src={Phone} alt="" />
                </div>
            </div>
        </section>
    )
}