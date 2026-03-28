import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black relative w-full flex flex-col justify-center items-center z-10">
      <div className="-mt-36">
        <div className="max-w-300 mx-auto px-4 lg:px-0">
          <div className="border-2 border-white/80 p-4 rounded-2xl">
            <div className="bg-white flex flex-col justify-center items-center gap-3 px-4 py-10 rounded-2xl relative overflow-hidden">
              <img
                className="absolute bottom-0 left-0 object-cover select-none pointer-events-none"
                src="https://i.ibb.co.com/CKjY0gmR/blur3.png"
                alt=""
              />
              <img
                className="absolute top-0 right-0 object-cover select-none pointer-events-none"
                src="https://i.ibb.co.com/5XmCZGv2/blur4.png"
                alt=""
              />
              <h1 className="font-bold text-[24px] lg:text-[32px] text-[#131313]">
                Subscribe to our Newsletter
              </h1>
              <p className="text-[#131313] text-base md:text-xl mb-2">
                Get the latest updates and news right in your inbox!
              </p>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className=" py-1.5 focus:outline-none rounded-l-md pl-4 border-2 bg-white text-gray-400"
                  placeholder="Enter your email"
                />
                <button
                  className={` cursor-pointer py-2 px-5 rounded-r-md transition-all text-black bg-[#E7FE29] font-semibold `}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          <div className="my-10">
            <img
              className="mx-auto"
              src="https://i.ibb.co.com/rR9Tz6bb/logo-footer.png"
              alt=""
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 text-white mb-10 gap-4">
            <div className="space-y-2">
              <p className="text-base md:text-[18px] text-white font-semibold">
                About Us
              </p>
              <span className="text-sm text-white/60">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </span>
            </div>
            <div className="space-y-2">
              <p className="text-base md:text-[18px] text-white font-semibold">
                Quick Links
              </p>
              <div className="space-y-1">
                <li className="text-sm text-white/60 list-none">
                  <a href="">Home</a>
                </li>
                <li className="text-sm text-white/60 list-none">
                  <a href="">Services</a>
                </li>
                <li className="text-sm text-white/60 list-none">
                  <a href="">About</a>
                </li>
                <li className="text-sm text-white/60 list-none">
                  <a href="">Contact</a>
                </li>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-base md:text-[18px] text-white font-semibold">
                Subscribe
              </p>
              <span className="text-sm text-white/60">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </span>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  className=" py-2 focus:outline-none rounded-l-md pl-4 bg-white text-gray-400"
                  placeholder="Enter your email"
                />
                <button
                  className={` cursor-pointer py-2 px-5 rounded-r-md transition-all text-black bg-[#E7FE29] font-semibold `}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="text-center border-t mt-10 py-6 w-full">
          <span className="text-sm text-white/60">
            @2024 Your Company All Rights Reserved.
          </span>
        </div>
    </footer>
  );
};

export default Footer;
