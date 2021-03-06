import React, { useState, useEffect } from "react";
require("isomorphic-fetch");

function About() {
  const [quote, setQuote] = useState({
    text: "",
    author: "",
  });

  // quotes api

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        const randomQuote = Math.round(Math.random() * data.length - 1);
        const quoteText = data[randomQuote];
        setQuote(quoteText);
      });
  }, []);

  return (
    <section className="text-gray-500 bg-gray-900 body-font" id="about">
      <div className="container px-5 py-24 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
          <h1 className="text-5xl text-center">About me</h1>
          <div className="flex flex-col sm:flex-row mt-10">
            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
              <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-800 text-gray-600">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex flex-col items-center text-center justify-center">
                <h2 className="font-medium title-font mt-4 text-white text-2xl">
                  Rizwan Atewalla
                </h2>
                <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
                <p className="text-base text-gray-600 text-lg pb-5">
                  Web Developer
                </p>
                <p className="italic text-sm">
                  "{quote.text}" - {quote.author}
                </p>
              </div>
            </div>
            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-center">
              <p className="leading-relaxed text-lg mb-4">
                A web developer with a passion for writing clean, concise, and
                reusable code.
              </p>
              <p className="leading-relaxed text-lg mb-4">
                Always looking for new opportunities to better his skills, and
                has been learning ReactJs along with, NodeJs, MongoDB, HTML5,
                and CSS3.
              </p>
              <a
                href="#cv"
                className="text-indigo-500 inline-flex items-center"
              >
                <a href="./files/Rizwan-Atewalla-CV.pdf">View my CV</a>
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
          <div class="container px-5 py-24 mx-auto" id="contact">
          <h1 className="text-5xl text-center py-5">Contact me</h1>
            <div class="flex flex-wrap -m-3 text-center">
              <div class="p-4 sm:w-1/3 w-1/2">
              <span className="footer-links text-5xl hover:text-white"><a href="https://github.com/ratewalla?tab=repositories"><i className="fab fa-github"></i></a>
          </span>
                <p class="leading-relaxed">GitHub</p>
              </div>
              <div class="p-4 sm:w-1/3 w-1/2">
              <span className="footer-links text-5xl hover:text-white"><a href="https://www.linkedin.com/in/riz-a849941a1/"><i className="fab fa-linkedin"></i></a></span>

                <p class="leading-relaxed">LinkedIn</p>
              </div>
              <div class="p-4 sm:w-1/3 w-1/2">
              <span className="footer-links text-5xl hover:text-white"><a href="mailto:rizatewalla@gmail.com"><i class="far fa-envelope"></i></a></span>
                <p class="leading-relaxed">Email</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
