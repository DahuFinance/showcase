import React from "react";

interface Props {
    title: string;
    href: string;
    message: string;
    image: string;
}

export default function FeatureCard(
    {
        title,
        href,
        message,
        image
    }: Props
) {
    return (
      <a href={href}>
          <div
              className="m-4 w-64 h-72 md:w-72 md:h-80 mb-4 flex flex-col rounded-xl cursor-pointer overflow-hidden
             shadow-halo md:hover:scale-105 md:transition md:ease-in-out md:duration-200 lg:hover:scale-110
              lg:transition lg:ease-in-out lg:duration-200">
              <div
                  className="w-full flex-1 bg-cover"
                  style={{backgroundImage: `url('${image}')`}}
              />
              <div className="flex flex-col w-full p-4 space-y-3 bg-darkBlue">
                <span className="text-purple font-semibold text-xl tracking-widest">
                  {title}
                </span>
                  <span className="text-white tracking-wide text-sm">
                    {message}
                </span>
              </div>
          </div>
      </a>
    );
}

