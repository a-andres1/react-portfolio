import React from 'react';
import profileImage from '../../assets/images/me2.jpg'

function Intro() {
    return (
        <section className="hero is-link is-fullheight-with-navbar has-background-danger-light">
            <div className="hero-body">
                <p className="title has-text-grey">
                    Welcome!<br />
                    I'm Alyssa,<br />
                    Professional Puzzle Solver.<br />
                </p>

                <div className="column has-text-right is-hidden-mobile">
                    <img id="me" src={profileImage} alt="my face" />
                </div>
            </div>
        </section>
    )
}

export default Intro;