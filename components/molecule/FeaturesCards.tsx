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
        <div className="w-80 h-96 bg-red-200 flex flex-col rounded-xl overflow-hidden shadow-halo mb-4">
            <div
                className="w-full flex-1 bg-cover"
                style={{backgroundImage: `url('${image}')`}}
            />
            <div className="flex flex-col w-full p-6 space-y-3 bg-darkPurple">
        <span className="text-white font-semibold">
          {title}
        </span>
                <span className="text-white">
          {message}
        </span>
            </div>
        </div>
    );
}

