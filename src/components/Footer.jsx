import React from "react";
import { FaMobileAlt } from "react-icons/fa";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
} from "react-icons/fa6";
import logo from "/sologo.png"

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  
];

const Footer = () => {
  return (
    <>
    <div className="">
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 pb-20 pt-5">
          {/* company details */}
          <div className="py-8 px-4">
            <a
              href="#"
              className=" font-semibold tracking-widest text-2xl uppercase sm:text-3xl
"
            >
              <img
              src={logo}
              alt="logo"
              className="w-[150px]"/>
            </a>
            <p className="text-gray-600 dark:text-white/70 font-bold text-sm lg:pr-2 pt-3">
            “The computer programmer is a creator of universes for which he alone is the lawgiver. No playwright, no stage director, no emperor, however powerful, has ever exercised such absolute authority to arrange a stage or field of battle and to command such unswervingly dutiful actors or troops.”
            <p className="mt-1 font-medium text-gray-500">
            ― Joseph Weizenbaum
            </p>

            </p>
    
            
          </div>

          {/* Footer links */}
          <div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10">
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Important Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* second col links */}
            <div className="py-8 px-4">
              <h1 className="text-xl font-bold sm:text-left mb-3">
                Quick Links
              </h1>
              <ul className="space-y-3">
                {FooterLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="text-gray-600 dark:text-gray-400 hover:dark:text-white hover:text-black duration-300"
                    >
                      {data.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Address */}
            <div className="py-8 px-4 col-span-2 sm:col-auto">
              <h1 className="text-xl font-bold sm:text-left mb-3">Address</h1>
              <div>
                <div className="flex items-center gap-3">
                  <FaLocationArrow className="w-[40px]" />
                  <p>Nairobi Garage, Karen (Watermark Business Park, Cove Court, Ground Floor, Ndege Road)</p>
                </div>
                <div className="flex items-center gap-3 mt-6">
                  <FaMobileAlt />
                  <p>+254 723 393 114</p>
                </div>

                {/* social links */}
                <div className="flex items-center gap-3 mt-6">
                  
                  <a href="https://www.linkedin.com/company/solstice-technologies-limited/" target="_blank">
                    <FaLinkedin className="text-3xl hover:text-gray-500 duration-200 duration:500 transition hover:scale-105" />
                  </a>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </> 
  );
};

export default Footer;
