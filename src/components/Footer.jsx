import React from 'react';


function Footer() {
  return (
    <section className="text-gray-500 bg-gray-900" id="contact">
      <footer className="text-gray-500 bg-gray-900 body-font">
        <div className="footer container px-5 py-8 mx-auto">
          <p className="text-base text-gray-600 sm:ml-4 sm:pl-4  sm:py-2 sm:mt-0 mt-4">© 2020 Rizwan</p>
          <div>
          <span className="footer-links text-3xl hover:text-white"><a href="https://github.com/ratewalla?tab=repositories"><i className="fab fa-github"></i></a>
          </span>
          <span className="footer-links text-3xl hover:text-white"><a href="https://www.linkedin.com/in/riz-a849941a1/"><i className="fab fa-linkedin"></i></a></span>
          </div>
          </div>
      </footer>
    </section>
  );
}

export default Footer;
