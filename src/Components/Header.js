import React, {Component} from 'react';
import './Header.css'
import logo from '../logodeltecno.jpg';

class Header extends Component{
    render (){
        return(
            <div className="Header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>

                </p>
            </div>
        );
    }
}

export default Header;