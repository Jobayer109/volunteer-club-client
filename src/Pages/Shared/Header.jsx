import React, { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  

  const handleSignOut = () => {
    logOut().then(result => {}).then(error=> console.log(error.message))
  }

  return (
    <div className="navbar bg-orange-600 px-24">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <FaBars className="text-white text-xl"></FaBars>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link className="btn btn-ghost normal-case font-bold text-white text-2xl">
          Volunteer Club
        </Link>
      </div>
      <div className="navbar-end">
        <div className="avatar online mr-2">
          <div className="w-12 rounded-full">
            <img src={ user?.photoURL} alt="" />
          </div>
        </div>
        {user?.email ? (
          <button onClick={handleSignOut} className="btn btn-outline w-28 btn-sm ml-2 text-white ">
            Sign out
          </button>
        ) : (
          <Link to="/login">
            <button className="btn btn-outline w-20 text-white btn-primary btn-sm ">Sign in</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
