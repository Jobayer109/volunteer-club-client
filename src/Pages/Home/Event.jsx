import React from "react";

const Event = ({ event }) => {
  return (
    <div className="">
      <img
        className="mask mask-squircle h-60 w-60"
        src={event.img}
        alt=""
      />
      <p className="text-center">{event.title}</p>
    </div>
  );
};

export default Event;
