import React from 'react';

function Projects() {


  return (
  <section className="text-black bg-white body-font projects" id="projects">
  <h1 className="text-5xl text-center">Projects</h1>
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Below are some of the projects I am working on. a full list can be found on my <a className="text-blue-500" href="https://github.com/ratewalla?tab=repositories" target="_blank" rel="noopener noreferrer">GitHub</a> profile.</p>
    </div>

    <div className="flex flex-wrap -m-4">
    <div className="lg:w-1/3 sm:w-1/2 p-4 project-card text-center">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="./images/blog-project.png"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-75">
            <h1 className="title-font text-lg font-medium text-white mb-3">Personal Blog</h1>
            <p className="leading-relaxed text-white">A personal blog I'm creating using React(NextJS) and NodeJs(Express) with MongoDB storage.</p>
          </div>
        </div>
        <p>Personal Blog (WIP)</p>
        <button className="m-3 cursor-not-allowed bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow hover:bg-blue-500">Live Demo</button>
        <div class="inline-flex">
        <a href="https://github.com/ratewalla/blog-frontend-nextjs" target="_blank" rel="noopener noreferrer"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow hover:bg-green-500 rounded-l-full">
          Frontend
        </button></a>
        <a href="https://github.com/ratewalla/blog-backend-node-mongodb" target="_blank" rel="noopener noreferrer"><button class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 shadow hover:bg-green-500 rounded-r-full">
          Backend
        </button></a>
      </div>
      </div>


      <div className="lg:w-1/3 sm:w-1/2 p-4 project-card text-center">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="./images/newsletter-project.png"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-75">
            <h1 className="title-font text-lg font-medium text-white mb-3">Newsletter Signup App</h1>
            <p className="leading-relaxed text-white">This app uses the mailchimp api to signup users for a newsletter.</p>
          </div>
        </div>
        <p className="py-3">Newsletter Signup App</p>
        <a href="https://riz-newsletter-signup.herokuapp.com" target="_blank" rel="noopener noreferrer"><button className="m-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow hover:bg-blue-500">Live Demo</button></a>
        <a href="https://github.com/ratewalla/js-nodejs-express-newsletter-signup" target="_blank" rel="noopener noreferrer"><button className="m-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow hover:bg-green-500">Source</button></a>
      </div>


    <div className="lg:w-1/3 sm:w-1/2 p-4 project-card text-center">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="./images/secrets-project.png"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-75">
            <h1 className="title-font text-lg font-medium text-white mb-3">Secret sharing App</h1>
            <p className="leading-relaxed text-white">A primitive clone of the Whisper app, in which users can register or login with Google to share secrets anonymously.</p>
          </div>
        </div>
        <p>Secret sharing App</p>
        <a href="https://riz-secrets-app.herokuapp.com/" target="_blank" rel="noopener noreferrer"><button className="m-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow hover:bg-blue-500">Live Demo</button></a>
        <a href="https://github.com/ratewalla/node-express-registerlogin" target="_blank" rel="noopener noreferrer"><button className="m-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded-full shadow hover:bg-green-500">Source</button></a>
      </div>

      
    </div>
  </div>

  </section>
  );
}

export default Projects;
