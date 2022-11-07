import React from "react";

const Banner = () => {
  return (
    <div>
      <div
        className="hero h-96 mt-12 relative border border-orange-600"
        style={{
          backgroundImage: `url("https://cdn1.sph.harvard.edu/wp-content/uploads/sites/21/2016/06/African-kids.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-75"></div>
        <div className="hero-content text-center text-neutral-content rounded-xl">
          <div className="pb-36">
            <form className="flex">
              <input
                type="search"
                name="search"
                placeholder="Search events here"
                className="px-24 py-3 rounded-md w-full input-ghost"
              />

              <input
                type="submit"
                value="Search"
                className="btn btn-outline text-white ml-2 font-mono "
              />
            </form>
          </div>
        </div>
      </div>
      <div className="absolute w-[50%] p-8  px-20 right-80 top-2/3 bg-white border-y border-orange-600 rounded-xl text-center">
        <h1 className="mb-5 text-4xl font-mono  font-bold">Help The Poor in Need</h1>
        <p className="text-gray-400 mt-3 mb-6 text-sm font-mono">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. quae magni eius, sapiente
          voluptas suscipit! Iure accusamus dolorum molestias enim?
        </p>
        <button className="btn btn-md w-44 mb-6 btn-outline translate duration-500 ease-in  hover:bg-orange-600 ">
          Learn more
        </button>
      </div>
    </div>
  );
};

export default Banner;
