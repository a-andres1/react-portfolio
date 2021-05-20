import React from 'react';
import navImage from '../../assets/images/A.png'

function Header() {

    return (
        < >
            <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img id="navimg" src={navImage} alt="My initails"></img>
                    </a>
                    <a className="navbar-item" href="#projects">
                        Projects
                    </a>
                    <a className="navbar-item" href="#contact">
                        Contact
                    </a>
                </div>
            </nav>
        </>
    )
}

export default Header;