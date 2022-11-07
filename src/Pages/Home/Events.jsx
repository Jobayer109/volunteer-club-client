import React, { useEffect, useState } from "react";
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/events`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data);
      });
  }, []);
  return (
    <div className="grid grid-cols-3 gap-10  mt-96 w-[80%] mx-auto ">
      {events.map((event) => (
        <Event key={event._id} event={event}></Event>
      ))}
    </div>
  );
};

export default Events;
