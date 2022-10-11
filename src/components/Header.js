import React from "react";
import logo from '../logo.svg';
import { useTheme } from "../context/ThemeProvider";

const Header = () => {
    const {theme, toggleTheme} = useTheme();
    
    return(
    <header className="App-header" style={{ backgroundColor: theme.background, color: theme.textColor }}>
        <img src={logo} className="App-logo" alt="logo" />
        <p>Modo oscuro app</p>
        <button onClick={toggleTheme}>Cambiar</button>
      </header>
    )
}

export default Header;