import { useState } from "react";
import { BrowserRouter as Router, Route, useHistory } from "react-router-dom";
import MettingPage from "./MettingPage";
function SlotCard({ time }) {
  const [clicked, setclicked] = useState(false);
  const history = useHistory();
  const changeUrl = () => {
    history.push({ pathname: "/MettingPage", state: { time } });
  };
  return clicked ? (
    <div className="flex">
      <div className="m-4 font-bold w-[50%] cursor-pointer border-2 p-2 rounded-md bg-black">
        {time}
      </div>
      <div
        className="m-4 w-[50%] font-bold cursor-pointer border-2 p-2 rounded-md hover:border-blue-800"
        onClick={changeUrl}
      >
        Confirm
      </div>
    </div>
  ) : (
    <div
      className="m-7 w-auto cursor-pointer border-2 p-2 rounded-md hover:border-blue-800"
      onClick={() => setclicked(true)}
    >
      <h1 className="text-3xl">{time}</h1>
    </div>
  );
}

export default SlotCard;
