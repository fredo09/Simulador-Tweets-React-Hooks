import React from 'react';
import './header.scss';
import TwiterLogo from './../../assest/img/original.png'

export const Header = () =>{
    return(
        <div className="header">
            <img src={TwiterLogo} alt="Twitter_logo" />
            <h1>Twitter Simulador</h1>
        </div>
    );
}