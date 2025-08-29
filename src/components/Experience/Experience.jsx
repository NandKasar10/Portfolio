import React from 'react';
import Lottie from 'lottie-react';
import noExperienceAnimation from '../../assets/noExperience.json';

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* No Experience Animation */}
      <div className="flex flex-col items-center justify-center text-center">
        <div className="w-[300px] md:w-[400px]">
          <Lottie animationData={noExperienceAnimation} loop={true} />
        </div>
        <p className="mt-6 text-white text-lg font-medium">
          Sorry, no experience yet — but I’m building mine one commit at a time 🚀
        </p>
      </div>
    </section>
  );
}

export default Experience;