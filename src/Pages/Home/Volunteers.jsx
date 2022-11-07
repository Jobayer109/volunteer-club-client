import React, { useEffect, useState } from "react";
import Volunteer from "./Volunteer";

const Volunteers = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/volunteers`)
      .then((res) => res.json())
      .then((data) => setVolunteers(data));
  }, []);

  return (
    <div className="mt-40">
      <div className="text-center rounded-t-full border-y py-4 hover:text-white hover:bg-gray-300 translate duration-500 ease-in">
        <h3 className="text-xl font-bold text-orange-600">Team members</h3>
        <h2 className="text-4xl font-mono font-extrabold">Our Expert Volunteers</h2>
      </div>
      <div className="grid grid-cols-4 gap-6 w-[95%] mx-auto mb-12">
        {volunteers.map((volunteer) => (
          <Volunteer key={volunteer._id} volunteer={volunteer}></Volunteer>
        ))}
      </div>
    </div>
  );
};

export default Volunteers;
