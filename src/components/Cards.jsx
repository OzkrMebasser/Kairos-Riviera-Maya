import React from "react";
import Puzzle from "../assets/puzzle.svg";
import Goals from "../assets/goals.svg";
import Records from "../assets/record.svg";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-24 mx-auto mt-[-3rem] bg-white"
            src={Puzzle}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Innovative Learning
          </h2>
          {/* <p className='text-center text-4xl font-bold'>$149</p> */}
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
          <button className="bg-[#0c2e51] w-[150px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
            Read more
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-transparent"
            src={Goals}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">Goal Setting</h2>
         
          <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
          <button className="bg-[#0c2e51] w-[150px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
          Read more
          </button>
        </div>
        <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            className="w-20 mx-auto mt-[-3rem] bg-white"
            src={Records}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Individualized Learning
          </h2>
      
          <div className="text-center font-medium">
          <p className="py-2 border-b mx-8 mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur
            </p>
          </div>
          <button className="bg-[#0c2e51] w-[150px] text-white rounded-md font-medium my-6 mx-auto px-6 py-3">
          Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
