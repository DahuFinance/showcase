import React from "react";
import Image from 'next/image'

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
    <div
      onClick={() => location.href = href}
      className="bg-darkBlue m-4 w-64 md:w-72 bg-green rounded-xl cursor-pointer overflow-hidden
         shadow-halo md:hover:scale-105 md:transition md:ease-in-out md:duration-200 lg:hover:scale-110
          lg:transition lg:ease-in-out lg:duration-200">
      <div className="flex-1">
        <Image alt='Feature' src={image} width={500} height={400} layout='intrinsic'/>
      </div>
      <div className="flex flex-col px-4 pb-4 ">
        <div className="text-purple font-semibold text-xl tracking-widest">
          {title}
        </div>
        <div className="mt-5 text-white tracking-wide text-sm">
          {message}
        </div>
      </div>
    </div>
  );
}

