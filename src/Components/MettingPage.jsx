import { ClockIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

function MettingPage({ time }) {
  return (
    <div className="flex flex-col items-center h-[100vh] w-[100%] bg-[#FBFCFD]">
      <div className="flex w-[70%] h-[80%] mt-20 border-2 rounded-sm shadow">
        <div className="flex-[0.3] flex flex-col items-center border-r-2">
          <h1 className="mt-10">user</h1>
          <h1 className="text-2xl font-bold">30 Minute Meeting</h1>
          <div className="flex mt-8">
            <ClockIcon className="h-5 mx-2 text-gray-500 " />
            <p>30 min</p>
          </div>
        </div>
        <div className="flex-[0.7] p-10">
          <form action="">
            <h1 className="text-2xl ">Enter details</h1>
            <div className="grid gap-6">
              <div className="col-span-12 mt-5">
                <label className="block text-sm font-medium text-gray-700">
                  First name
                </label>
                <input
                  type="text"
                  name="first_name"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-900 rounded-md"
                />
              </div>

              <div className="col-span-12">
                <label className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  name="email_address"
                  className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-10 shadow-sm sm:text-sm border-gray-900 rounded-md"
                />
              </div>
            </div>

            <button className="mt-4 border-2 rounded-lg font-bold bg-blue-700 border-gray-900 p-1">
              Add guest
            </button>
            <div className="mt-4">
              <p className="text-xl">
                Please share anything that will help prepare for our meeting.
              </p>
              <textarea
                type="text"
                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full h-20 shadow-sm sm:text-sm border-gray-900 rounded-md"
              />
            </div>

            <button className="mt-4 border-2 rounded-lg font-bold bg-blue-700 border-gray-900 p-1">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default MettingPage;
