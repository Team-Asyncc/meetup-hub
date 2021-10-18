import { ClockIcon } from "@heroicons/react/solid";
import React, { useState } from "react";
import Calendar from "react-calendar";
import SlotCard from "./SlotCard";
// import "react-calendar/dist/Calendar.css";

function Calander() {
  const [value, onChange] = useState(new Date());
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
        <div className="flex-[0.35] ml-4 ">
          <div className="items-center flex flex-col">
            <h1 className="text-2xl font-bold mt-14">Select a Date & time</h1>
            <Calendar
              className="mt-14 text-blue-800 "
              tileClassName="border-none hover:bg-blue-300 my-2 p-1 rounded-full "
              onChange={onChange}
              value={value}
            />
          </div>
        </div>
        <div className="flex-[0.35] overflow-scroll text-center scrollbar-hide">
          <div className="mt-10 p-2 z-10 bg-[#FBFCFD] w-[100%] relative">
            <h1 className="text-2xl">{value.toDateString()}</h1>
          </div>
          {/* cards */}
          <div className="text-blue-500 ">
            <SlotCard time={"9:30"} />
            <SlotCard time={"9:30"} />
            <SlotCard time={"9:30"} />
            <SlotCard time={"9:30"} />
            <SlotCard time={"9:30"} />
            <SlotCard time={"9:30"} />
            <SlotCard time={"9:30"} />
            <SlotCard time={"9:30"} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calander;
