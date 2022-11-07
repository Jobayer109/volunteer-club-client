import React from "react";

const Interest = ({ interest, handleDelete }) => {
  return (
    <div className="card w-80 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={interest.img} alt="" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-yellow-400">{interest.event}</h2>
        <p className="text-gray-300 font-thin">
          If you think you are a man. So, please help another.
        </p>
        <div className="card-actions justify-end">
          <button
            onClick={() => handleDelete(interest._id)}
            className="btn btn-sm btn-outline btn-warning hover:bg-orange-600"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Interest;
