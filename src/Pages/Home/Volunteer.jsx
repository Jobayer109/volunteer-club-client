import React from "react";

const Volunteer = ({volunteer}) => {
  return (
    <div className="border rounded-t-full p-6 mt-12 hover:bg-orange-400 translate duration-700 ease-in">
     
      <div className="avatar">
        <div className="w-full rounded-full">
          <img src={volunteer.img} alt="" />
        </div>
      </div>
      <p className="text-center font-bold text-xl">{volunteer.name}</p>
    </div>
  );
};

export default Volunteer;
