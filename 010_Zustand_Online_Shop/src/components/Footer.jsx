/* eslint-disable no-unused-vars */
import React from "react";

const Footer = () => {
  return (
    // to work mt-auto Container must be flex
    <footer className="  pt-20">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="sm:flex justify-center">
          <p className="mt-4 text-primary text-center text-sm  lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
