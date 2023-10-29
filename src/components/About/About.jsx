import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Me: A Tech Enthusiast and Lifelong Learner
            </h2>
            <div className="text-lg ">
              <p className="mt-6 text-gray-600 mb-3">
                Hello, I'm Shreyam Singh, a passionate and dedicated college
                student currently pursuing a Bachelor of Technology (B.Tech)
                degree in Computer Science with a specialization in Artificial
                Intelligence and Machine Learning.
              </p>
              <h3 className="text-2xl font-bold my-5 text-lime-500">Technical Proficiency :-</h3>
              <ul className="my-2 list-disc">
                <li className="font-bold">
                  Full Stack Web Development:{" "}
                  <span className="font-normal">
                    Skilled in HTML, CSS, JavaScript, MERN and many related web
                    development frameworks.
                  </span>
                </li> <br />
                <li className="font-bold">
                  Graphics Designing:{" "}
                  <span className="font-normal">
                    Proficient in creating visually appealing graphics and user
                    interfaces.
                  </span>
                </li> <br />
                <li className="font-bold">
                  AI and ML Enthusiast:{" "}
                  <span className="font-normal">
                    Passionate about advancing AI and ML technologies, including
                    neural networks and algorithms.
                  </span>{" "}
                </li> <br />
              </ul>
              <h3 className="text-2xl font-bold mb-5 text-lime-500">
                Extracurricular Involvement :-
              </h3>
              <p>
                Actively engage in coding competitions, and open-source
                projects.
              </p>
              <br />
              <p>
                I'm a lifelong learner, eager to explore technology's endless
                possibilities and make a meaningful impact in the tech world.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
