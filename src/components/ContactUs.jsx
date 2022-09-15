import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMail, HiOutlineHome } from "react-icons/hi";

const ContactUs = () => {
  return (
    <section className="py-12 px-4">
    <h2 className="text-3xl mb-8 text-center font-heading">
      Contact the Scranton team
    </h2>
    <div className="w-full max-w-2xl mx-auto mb-12">
      <form>
        <div className="flex mb-4 -mx-2">
          <div className="w-1/2 px-2">
            <input
              className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="w-1/2 px-2">
            {/* input select */}
            {/* <select className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none">
              <option>-- Select product --</option>
              <option>Product 1</option>
              <option>Product 2</option>
              <option>Product 3</option>
            </select> */}
            {/* input name*/}
            <input className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none" type="text" placeholder="Name" />
          </div>
        </div>
        <div className="mb-4">
          <textarea
            className="appearance-none block w-full py-3 px-4 leading-tight text-gray-700 bg-gray-200 focus:bg-white border border-gray-200 focus:border-gray-500 rounded focus:outline-none"
            placeholder="Write something..."
            rows="5"
          ></textarea>
        </div>
        <div>
          <button className="inline-block w-full py-4 px-8 leading-none text-white bg-indigo-500 hover:bg-indigo-600 rounded shadow">
            Submit
          </button>
        </div>
      </form>
    </div>
    <div className="flex flex-col items-center md:flex-row md:justify-center -mx-4">
      <div className="px-4 items-center">
        <HiOutlineHome className="inline-block w-8 h-8 pr-2" />
        <span>1725 Slough Avenue, Scranton</span>
      </div>
      <div className="px-4 items-center">
        <FiPhoneCall className="inline-block w-8 h-8 pr-2" />
        <span>555-111-555</span>
      </div>
      <div className="px-4 items-center">
        <HiOutlineMail className="inline-block w-8 h-8 pr-2" />
        <span>scranton@dundermifflin.com</span>
      </div>
    </div>
  </section>
  )
}

export default ContactUs
