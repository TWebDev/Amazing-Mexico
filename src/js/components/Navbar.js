import React from 'react';
import AMG from '../../media/logos/AM_Logo_Green.png';
import fbimg from '../../media/logos/Icons_fb.png';
import twimg from '../../media/logos/Icons_twr.png';
import inimg from '../../media/logos/Icons_ing.png';

const Navbar = () => {

  //const NavOptions = ['Puerto Vallarta', 'Cancun', 'Cabo', 'Loreto'];
  const gallery = "destinations";
  const form = "form";

  return (
    <React.Fragment>
      <nav className="navbar is-spaced is-primary" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <span className="navbar-item" href="/">
              {/*<img src={AM} alt="Amazing Mexico"/>*/}
              <img src={AMG} alt="Amazing Mexico"/>
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-start">
              <div className="navbar-item is-flex">
                <p className="title has-text-black is-size-5">
                  <a className="navbar-item" href={`#${gallery}`}><span>Destinations</span></a>
                </p>
              </div>
              <div className="navbar-item is-flex">
                <p className="title has-text-black is-size-5">
                  <a className="navbar-item" href={`#${form}`}><span>Contact</span></a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar-media-links">
          <a href="https://www.facebook.com/mexicoisamzing/"><img className="main-img" src={fbimg} alt="Facebook"/></a>
          <a href="https://www.instagram.com/mexicois.amazing/"><img className="main-img" src={twimg} alt="Twitter"/></a>
          <a href="https://twitter.com/amazing_mexico"><img className="main-img" src={inimg} alt="Instagram"/></a>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;