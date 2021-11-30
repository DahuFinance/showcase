import React from 'react';
import LayoutBorder from "../layouts/LayoutBorder";
import {TitleSmall} from "../TitleSmall";

interface Props {
    title: string;
    message: string;
}

export default function FeaturesInfo({title, message}:Props){
    return(
        <div>
            <LayoutBorder>
                <TitleSmall title={"Features"}/>
                <div className={"flex flex-col w-full border-t-2 "}>
                    <div className={"text-white text-2xl md:mt-4 pl-20"}>FARMING</div>

                </div>
            </LayoutBorder>
        </div>
    );
}

