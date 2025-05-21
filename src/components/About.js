import React from "react";

function About() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 bg-clip-text text-transparent">
            Hi, I'm Chitrani Banerjee
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I am currently pursuing my B.Tech in Mechatronics Engineering at
            Banasthali Vidyapith, where I'm exploring the exciting intersection
            of mechanical systems, electronics, and intelligent computing.
          </p>
        </div>

        {/* Professional Background */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Professional Journey
          </h2>
          <div className="space-y-6 text-left max-w-4xl mx-auto">
            <p className="text-lg text-gray-600">
              My interest in robotics and automation drew me to this field, and
              over the past two years, I've developed a strong foundation in
              core subjects like mechanics, electronics, and basic programming.
            </p>
            <p className="text-lg text-gray-600">
              So far, I've worked on small projects such as CAD designs in
              AutoCAD and simulation in Abaqus, which have helped me apply
              classroom concepts to real-world systems. I actively participate
              in workshops to expand my skills in areas like Python and embedded
              systems.
            </p>
            <p className="text-lg text-gray-600">
              I aspire to build a career in teaching and robotics, where I can
              contribute to developing smart, efficient machines. My journey so
              far has been shaped by curiosity, hands-on learning, and a strong
              desire to innovate and grow as a multidisciplinary engineer and
              professor.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-indigo-600 font-semibold mb-4">
              Frontend Development
            </h3>
            <p className="text-lg text-gray-600">
              Creating beautiful and responsive user interfaces with React and
              HTML
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-purple-600 font-semibold mb-4">
              Backend Development
            </h3>
            <p className="text-lg text-gray-600">
              Building robust and scalable server solutions with Node.js and
              Python
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-2xl text-teal-600 font-semibold mb-4">
              UI/UX Design
            </h3>
            <p className="text-lg text-gray-600">
              Designing intuitive and engaging user experiences with a focus on
              accessibility and performance
            </p>
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-white p-8 rounded-xl shadow-lg mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
            Beyond Coding
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Open Source Contributor
              </h3>
              <p className="text-lg text-gray-600">
                Active contributor to various open-source projects, focusing on
                different fields in Python
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-purple-600 font-semibold">
                Tech Community
              </h3>
              <p className="text-lg text-gray-600">
                Attendant of various tech meetups and conferences, gaining
                knowledge about web development
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-teal-600 font-semibold">
                Mentorship
              </h3>
              <p className="text-lg text-gray-600">
                Aim to dedicate in mentoring junior developers and helping them
                grow in their careers
              </p>
            </div>
            <div className="space-y-3">
              <h3 className="text-2xl text-indigo-600 font-semibold">
                Continuous Learning
              </h3>
              <p className="text-lg text-gray-600">
                Always exploring new technologies and methodologies to stay at
                the forefront of web development and robotics
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-teal-500 p-12 rounded-xl text-white text-center">
          <h2 className="text-4xl font-semibold mb-6">Let's Work Together</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your vision.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-colors duration-200"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
