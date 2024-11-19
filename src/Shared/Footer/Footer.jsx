// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-indigo-900 text-white py-8">
      <div className="container mx-auto px-4 md:flex md:justify-between md:items-center">
        {/* Contact Information */}
        <div className="mb-6 md:mb-0">
          <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
          <p>Email: md286667@gmail.com</p>
          <p>Phone: +8801749746072</p>
          <p>Address: 7830 faridpur, dhaka, Bangladesh</p>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mb-6 md:mb-0">
          <a
            href=""
            className="text-gray-400 hover:text-white transition"
            aria-label="Facebook">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.6c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .1 2.4.1v2.8H14.9c-1.2 0-1.5.6-1.5 1.4v1.9h3l-.5 3h-2.5v7A10 10 0 0 0 22 12z" />
            </svg>
          </a>
          <a
            href=""
            className="text-gray-400 hover:text-white transition"
            aria-label="Twitter">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M22 5.8c-.8.4-1.6.6-2.4.8a4.2 4.2 0 0 0 1.8-2.3c-.8.5-1.7.8-2.6 1A4.3 4.3 0 0 0 11.9 9a12.1 12.1 0 0 1-8.8-4.4 4.3 4.3 0 0 0 1.3 5.7c-.7 0-1.4-.2-2-.5v.1c0 2.1 1.5 3.9 3.4 4.3-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.7 2 3 3.7 3A8.6 8.6 0 0 1 2 18.5a12.2 12.2 0 0 0 6.6 1.9c8 0 12.3-6.6 12.3-12.3 0-.2 0-.4-.1-.6A8.8 8.8 0 0 0 22 5.8z" />
            </svg>
          </a>
          <a
            href=""
            className="text-gray-400 hover:text-white transition"
            aria-label="Instagram">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24">
              <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm8.4 1.6H7.8A6.2 6.2 0 0 0 3.6 7.8v8.4A6.2 6.2 0 0 0 7.8 20.4h8.4a6.2 6.2 0 0 0 4.2-1.8 6.2 6.2 0 0 0 1.8-4.2V7.8a6.2 6.2 0 0 0-1.8-4.2A6.2 6.2 0 0 0 16.2 3.6zm-4.2 2.9a4.6 4.6 0 1 1 0 9.2 4.6 4.6 0 0 1 0-9.2zm0 1.6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm5.8-.7a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2z" />
            </svg>
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Mahim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
