import React from "react";
import { Link } from "react-router-dom";

function Card({
  imgSource = "https://images.pexels.com/photos/57007/pexels-photo-57007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  projectName = "name",
  tag1 = "photography",
  tag2 = "travel",
  tag3 = "winter",
  projectDescription = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
    quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
    nihil.`,
  link = "/",
}) {
  return (
    <div class="max-w-sm rounded-lg overflow-hidden shadow-xl cursor-pointer">
      <Link to={link} target="_blank">
        <img class="w-full h-64" src={imgSource} alt="Image" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{projectName}</div>
          <p class="text-gray-700 text-base">{projectDescription}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-indigo-500">
            #{tag1}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-indigo-500">
            #{tag2}
          </span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2 hover:text-indigo-500">
            #{tag3}
          </span>
        </div>
      </Link>
    </div>
  );
}

export default Card;
