import React, { useEffect, useState } from "react";
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [page, setPage] = useState(0);
  const [count, setCount] = useState(0);
  const [size, setSize] = useState(6);

  const pages = Math.ceil(count / size);

  useEffect(() => {
    fetch(`http://localhost:5000/events?page=${page}&size=${size}`)
      .then((res) => res.json())
      .then((data) => {
        setEvents(data.events);
        setCount(data.count);
      });
  }, [page, size]);

  return (
    <div>
      <div className="grid grid-cols-3 gap-10  mt-20 mb-20 w-[80%] mx-auto ">
        {events.map((event) => (
          <Event key={event._id} event={event}></Event>
        ))}
      </div>
      <div>
        <div className="w-[20%] mx-auto mb-28">
          <h3>
            Currently selected page:{" "}
            <span className="font-bold text-orange-600 text-xl">{page + 1}</span>
          </h3>
          {[...Array(pages).keys()].map((number) => (
            <button onClick={() => setPage(number)} key={number}>
              {page === number ? (
                <p className="btn btn-xs btn-outline bg-primary text-white mr-3"> {number + 1}</p>
              ) : (
                <p className="btn btn-xs btn-outline mr-3"> {number + 1}</p>
              )}
            </button>
          ))}
          <select
            defaultValue={size}
            onChange={(e) => setSize(e.target.value)}
            className="font-bold text-xl text-orange-500"
          >
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="15">15</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Events;
