import React from "react";

interface Props {
    title: string;
    message: string;
    image: string;
}

export default function FeaturesCards({
                                     title,
                                     message,
                                     image
                                 }: Props) {

    return (
        <div className="w-80 h-96 bg-red-200 flex flex-col rounded-sm overflow-hidden shadow-halo md:hover:scale-105 md:transition md:ease-in-out md:duration-200 mb-4 lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-200">
            <div
                className="w-full flex-1 bg-cover"
                style={{backgroundImage: `url('${image}')`}}
            />
            <div className="flex flex-col w-full p-6 space-y-3 bg-darkBlue">
        <span className="text-purple font-semibold text-xl tracking-widest">
          {title}
        </span>
                <span className="text-white tracking-wide">
          {message}
        </span>
            </div>
        </div>
    );
}

