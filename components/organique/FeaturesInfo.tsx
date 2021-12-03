import React, {useState} from 'react';
import LayoutBorder from "../layouts/LayoutBorder";
import {TitleSmall} from "../TitleSmall";
import {SubtitleDark} from "../SubtitleDark";

interface Props {
}

export default function FeaturesInfo(props :Props){

    const [openedIndex, setOpenIndex] = useState(0)

    const features = [
        {

            title: 'FARMING',
            content: (
                <div className={"flex  flex-col md:flex-row"}>
                    <div className={"flex md:flex-col "}>
                         <span>
                        Lock your tokens on our platform for the period of your choice.
                        The longer you lock them, the more XDAHU you get from the platform. These XDAHUs will allow you to touch the platform's fees and vote for its development.
                    </span>
                        <span className='lg:mt-5 italic block'>
                        Example : You can vote lock 1,000 CRV for a year to have a 250 veCRV weight. Each CRV locked for four years is equal to 1 veCRV.
                    </span>
                    </div>
                    <img src="Team.svg" alt="team" className=" hide w-2/6"></img>
                </div>
            )
        },
        {
            title: 'SWAPPING',
            content: (
                <>
                    <span>
                        Lock your tokens on our platform for the period of your choice.
                        The longer you lock them, the more XDAHU you get from the platform. These XDAHUs will allow you to touch the platform's fees and vote for its development.
                    </span>
                    <span className='mt-5 italic block'>
                        Example : You can vote lock 1,000 CRV for a year to have a 250 veCRV weight. Each CRV locked for four years is equal to 1 veCRV.
                    </span>
                </>
            )
        },
        {
            title: 'STAKING with Dahu club',
            content: (
                <>
                    <span>
                        Lock your tokens on our platform for the period of your choice.
                        The longer you lock them, the more XDAHU you get from the platform. These XDAHUs will allow you to touch the platform's fees and vote for its development.
                    </span>
                    <span className='mt-5 italic block'>
                        Example : You can vote lock 1,000 CRV for a year to have a 250 veCRV weight. Each CRV locked for four years is equal to 1 veCRV.
                    </span>
                </>
            )
        },
        {
            title: 'CHARITY',
            content: (
                <>
                    <span>
                        Lock your tokens on our platform for the period of your choice.
                        The longer you lock them, the more XDAHU you get from the platform. These XDAHUs will allow you to touch the platform's fees and vote for its development.
                    </span>
                    <span className='mt-5 italic block'>
                        Example : You can vote lock 1,000 CRV for a year to have a 250 veCRV weight. Each CRV locked for four years is equal to 1 veCRV.
                    </span>
                </>
            )
        }
    ]


    const displayItem = (item, index) => (
        <div key={index} className='border-t-2 p-4 cursor-pointer text-white transition-all duration-300' onClick={() => setOpenIndex(index)}>
            <span className='font-bold tracking-widest text-2xl'>
                {item.title}
            </span>
            <div className={index !== openedIndex ? 'opacity-0 h-0' : '' + ' transition-all duration-1000 mt-2 leading-8'}>
                { index === openedIndex && item.content}
            </div>
        </div>
    )

    return(
        <div className={"flex bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple md:h-screen py-8 md:py-14 lg:py-28"}>
        <LayoutBorder>
            <div className={"flex flex-col align-center items-center"}>
                <TitleSmall title={"Launching Features"}/>
                <SubtitleDark title={"Discover..."}/>
                <div className='border-b-2  w-3/3 lg:w-2/3'>
                    {features.map((item, index) => displayItem(item, index))}
                </div>
            </div>

        </LayoutBorder>
        </div>
    );
}

