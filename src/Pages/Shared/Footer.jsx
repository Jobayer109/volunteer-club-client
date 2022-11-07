import React from 'react';
import { FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
      <footer className="footer footer-center p-20 bg-black text-white rounded">
        <div className="grid grid-flow-col gap-4">
          <a href='/' className="link link-hover">About us</a>
          <a href='/' className="link link-hover">Contact</a>
          <a href='/' className="link link-hover">Jobs</a>
          <a href='/' className="link link-hover">Press kit</a>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <Link>
              <FaFacebook className='text-3xl text-blue-500'></FaFacebook>
            </Link>
            <Link>
              <FaTwitter className='text-3xl text-cyan-400'></FaTwitter>
            </Link>
            <Link>
              <FaYoutube className='text-3xl text-red-600'></FaYoutube>
            </Link>
          </div>
        </div>
        <div>
          <p>Copyright © 2022 - All right reserved by Volunteer club</p>
        </div>
      </footer>
    );
};

export default Footer;