import React from "react";

const Footer = () => {
  return (
    <footer className="w-screen h-28 relative inset-x-0 bottom-0 mt-4 bg-zinc-800 border-black">
      <div className="flex-col w-full mx-auto px-5 md:flex md:items-center md:justify-between">
        <span className="m-4 text-l text-white sm:text-center">
          © 2023{" "}
          <a href="http://localhost:3000/" className="hover:underline">
            BroTrition™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="m-4 flex flex-wrap items-center mt-3 text-xl font-medium text-white sm:mt-0">
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline me-4 md:me-6">
              Licensing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
