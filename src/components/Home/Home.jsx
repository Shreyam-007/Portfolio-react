import React from "react";
import { Link } from "react-router-dom";
import IMAGES from "../../Images/Images";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="flex flex-wrap z-10 w-full px-4 mx-auto sm:px-6 lg:px-8 ">
          <div className="w-1/2 max-w-xl sm:mt-1  text-center sm:text-right sm:ml-auto">
            <img className="w-full pl-2" src={IMAGES.image1} alt="image1" />
          </div>
        </div>

        <div className="w-1/2 absolute inset-0 sm:my-20 sm:pt-1 pt-12 h-full ">
          <h2 className="text-2xl font-bold sm:text-2xl text-gray-400 transition">
            Hello! I'm
            <span className="hidden sm:block text-6xl font- text-gray-800 m-5 p-2 ">
              SHREYAM SINGH
            </span>
          </h2>
          <p className="mt-10 mb-10 text-xl font-mono text-gray-500">
            Full Stack Web Developer <img className="w-7 h-7 inline-block m-1" src="https://em-content.zobj.net/source/microsoft-teams/363/technologist-light-skin-tone_1f9d1-1f3fb-200d-1f4bb.png" alt="webtech emoji" /> <br />
            Graphics Designer <img className="w-7 h-7 inline-block m-1" src="https://em-content.zobj.net/source/microsoft-teams/363/man-artist-light-skin-tone_1f468-1f3fb-200d-1f3a8.png" alt="graphics emoji" /> <br />
            AI & ML Enthusiast <img className="w-7 h-7 inline-block m-1" src="https://em-content.zobj.net/source/microsoft-teams/363/robot_1f916.png" alt="emoji" /> <br />
            Pursuing Computer Science Major at VIT <img className="w-7 h-7 inline-block m-1" src="https://em-content.zobj.net/source/microsoft-teams/363/student-light-skin-tone_1f9d1-1f3fb-200d-1f393.png" alt="emoji" /> <br />
            Seeking Opportunities to Learn and Grow <img className="w-7 h-7 inline-block m-1" src="https://em-content.zobj.net/source/microsoft-teams/363/rocket_1f680.png" alt="emoji" />
          </p>

          <Link
            className="inline-flex text-white items-center px-6 py-3 font-medium bg-lime-600 rounded-xl hover:contrast-150 transition duration-300 ease-in-out hover:-translate-y-1"
            to="https://docs.google.com/document/d/12Vvm0k2E74KDJeyOvk-VJTUhuGqVIU-6EWo3lPutamk/edit?pli=1#heading=h.qgi05ozbcf8k"
            target="_blank"
          >
            <svg
              fill="white"
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
            >
              <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
            </svg>
            &nbsp; Check out my Resume
          </Link>
        </div>
      </aside>
    </div>
  );
}
