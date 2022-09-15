import React from "react";
import Homeschool from "../assets/Homeschool-sm.jpg";

const About = () => {
  return (
    <div className="w-full px-20 bg-[white] py-16 underlineComp ">
      <div className=" grid md:grid-cols-2 mx-auto  ">
        <img className="w-[380px] hover:scale-105 duration-300 rounded-lg shadow-xl " src={Homeschool} alt="/" />
        <div className="flex flex-col justify-center ">
          <p className="text-[#0c2e51] font-bold ">ABOUT A.C.E. </p>
          <h1 className=" text-[#3f3f3f] md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            THE Learning Tool for Today
          </h1>
          <p>
            Schools and homeschools around the world use the A.C.E. School of
            Tomorrow® program in the training of their children. The A.C.E.
            program consists of Bible-based K–12 curriculum, student programs,
            and professional training. Although other publishers have marketed
            academic curriculum, no one has produced a life-changing character
            package like that of A.C.E. Children’s minds develop best in a
            God-centered environment of absolutes and love. They emerge with a
            sweet attitude and with a greater, richer concept of God and how He
            wants them to live.
          </p>
          <button className="bg-[#0c2e51] text-[white] w-[150px] rounded-md font-medium my-6  md:mx-0 py-3">
            Learn more
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
