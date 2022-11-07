import React, { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Subscribe = () => {
  const { user } = useContext(AuthContext);
  const event = useLoaderData();
  const { img, title, _id } = event;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const comment = form.comment.value;

    const subscribe = {
      eventId: _id,
      img,
      event: title,
      comment,
    };

    fetch(`http://localhost:5000/subscribe`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(subscribe),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          form.reset();
          alert("Event subscribed");
        }
        console.log(data);
      });
  };

  return (
    <div className="w-[65%] mx-auto mb-44 bg-gray-300 p-8 rounded-lg mt-20">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-6 ">
          <input
            type="text"
            name="event"
            className="border rounded-lg p-3  font-bold"
            placeholder="event name"
            defaultValue={title}
            readOnly
            required
          />

          <input
            type="email"
            name="email"
            className="border rounded-lg p-3"
            placeholder="email"
            defaultValue={user?.email}
            readOnly
            required
          />
          <div className="avatar">
            <div className="w-full h-36 rounded-xl">
              <img src={img} alt="" />
            </div>
          </div>
          <div className="mb-8">
            <textarea
              name="comment"
              className="textarea textarea-bordered w-full h-36"
              placeholder="Write something about your interest..."
            ></textarea>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className=" text-center mr-3">
            <input
              type="submit"
              className="btn btn-outline w-36 hover:bg-orange-500   "
              value="Subscribe"
            />
          </div>
          <div>
            <Link to="/events">
              <button className="btn btn-outline w-24">Back</button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Subscribe;
