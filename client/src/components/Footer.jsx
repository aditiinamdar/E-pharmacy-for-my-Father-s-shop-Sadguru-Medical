import React from "react";

const Footer = () => {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Brand */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-green-700">
            Sadguru Medical & General Store
          </h2>

          <p className="text-sm text-gray-500 mt-2">
            Trusted medicines • Genuine products • Fast delivery
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-200" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>
            © {new Date().getFullYear()} Sadguru Medical. All rights reserved.
          </p>

          <div className="flex gap-6">
            <span className="hover:text-green-600 cursor-pointer transition">
              Privacy Policy
            </span>
            <span className="hover:text-green-600 cursor-pointer transition">
              Terms & Conditions
            </span>
            <span className="hover:text-green-600 cursor-pointer transition">
              Contact
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
