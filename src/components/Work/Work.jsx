import React from 'react'
import Lottie from 'lottie-react';
import comingSoon from '../../assets/coming_soon.json';

function Work() {
  return (
    <section
      id="work"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* No Experience Animation */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-[300px] md:w-[400px] bg-slate-500 rounded-4xl">
          <Lottie animationData={comingSoon} loop={true} />
        </div>
        <p className="mt-6 text-white text-lg font-medium">
          will update this section btw you can check my github for direct access to my projects 🚀
        </p>
      </div>
    </section>
  )
}

export default Work