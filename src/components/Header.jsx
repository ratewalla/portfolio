import React from 'react';
import Nav from './Nav';


function Header() {
  

  return (
    <>
    <Nav />
    <section className="hero" id="home">
      <div className="hero-content">
        <h1 className="animate__animated animate__fadeInDown animate__delay-0.5s">Hi, I'm Rizwan</h1>
        <h2 className="animate__animated animate__fadeIn animate__delay-1s">a web developer</h2>
        <a className="hero-button animate__animated animate__bounceIn animate__delay-2s " href="#projects">See my work</a>
      </div>
    </section>
    </>
  );
}

export default Header;
