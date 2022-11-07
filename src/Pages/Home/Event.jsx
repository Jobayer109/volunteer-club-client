import React from "react";
import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <div className=" cursor-pointer mx-auto transform hover:scale-110">
      <Link to={`/subscribe/${event._id}`}>
        <img className="mask mask-squircle h-60 w-60" src={event.img} alt="" />
        <p className="text-center font-bold text-2xl">{event.title}</p>
      </Link>
    </div>
  );
};

export default Event;
