import React from "react";
import Heading from "./Heading";

// import images
import { cloud, cyber, hack, rightArrow } from "../assets";
import { styles } from "../styles";

const BlogData = [
  {
    title: "Protect Your Workspace from Cyber Attack",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Dilshad",
    image: cloud,
  },
  {
    title: "The Security Risks of Changing Package Owners",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Satya",
    image: cyber,
  },
  {
    title: "Avoid Mistakes in Your Social Media Post",
    subtitle:
      "minima facere deserunt vero illo beatae deleniti eius dolores consequuntur, eligendi corporis maiores molestiae laudantium. Porro?",
    published: "Jan 20, 2024 by Sabir",
    image: hack,
  },
];
const Blogs = () => {
  return (
    <div className="pt-20 text-white">
      <div className="">
        {/* Header section */}
        <Heading title="Recent News" subtitle={"Explore Our Blogs"} />

        {/* Blog section */}
        <div className={`${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-7 flex items-center justify-center pt-20 max-w-7xl mx-auto`}>
          {/* Blog card */}
          {BlogData.map((data) => (
            <div
              className=""
            >
              {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2">
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-[220px] object-cover rounded-2xl hover:scale-105 duration-500"
                />
              </div>
              {/* content section */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1 text-white">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600">
                  {data.subtitle}
                </p>
                <img
                src={rightArrow}
                alt="rightarrow"
                className="bg-primary px-2 py-3 rounded-full w-[30px] hover:bg-gray-500 hover:scale-105 duration-500"/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blogs;
