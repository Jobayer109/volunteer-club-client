import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/AuthProvider";
import Interest from "./Interest";

const Interests = () => {
  const { user } = useContext(AuthContext);
  const [interests, setInterests] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/subscribe?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setInterests(data);
      });
  }, [user?.email]);

   const handleDelete = (_id) => {
     fetch(`http://localhost:5000/subscribe/${_id}`, {
       method: "DELETE",
     })
       .then((res) => res.json())
       .then((data) => {
         if (data.deletedCount) {
           alert("Your interest removed successfully")
           const remaining = interests.filter(intr => intr._id !== _id)
           setInterests(remaining)
         } 
       });
   };

  return (
    <div>
      <h3 className="text-3xl font-mono ml-56 mt-10">
        Your interests:{" "}
        <span className="font-extrabold text-4xl text-orange-600">{interests.length}</span>{" "}
      </h3>
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 w-[65%] mx-auto mt-4 mb-20">
        {interests.map((interest) => (
          <Interest key={interest._id} interest={interest} handleDelete={handleDelete}></Interest>
        ))}
      </div>
    </div>
  );
};

export default Interests;
