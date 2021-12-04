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
                        Stake your tokens in our eligible farming pools to earn XDAHUs.
Thanks to auto-compounding (accrued interest calculated separately from your invested capital), Dahu Finance gives you the possibility to automatically reinvest your earned interests.

                    </span>

                    </div>
                    <img src="farming-icone.svg" alt="team" className="h-28"></img>
                </div>
            )
        },
        {
            title: 'SWAPPING',
            content: (
                <div className={"flex  flex-col md:flex-row"}>
                    <div className={"flex md:flex-col "}>
                         <span>
                        Exchange your tokens immediately for minimal fees.
Transaction fees: 0.3% (0.25% to the token providers and 0.05% to our stakers).

                    </span>

                    </div>
                    <img src="swapping-icone.svg" alt="team" className=" h-28"></img>
                </div>
            )
        },
        {
            title: 'STAKING with Dahu club',
            content: (
                <div className={"flex  flex-col md:flex-row"}>
                    <div className={"flex md:flex-col "}>
                         <span>
                        Lock your tokens on our platform for the period of time of your choice.
The longer you lock them, the more XDAHU you get from the platform. These XDAHUs will allow you to earn the platform's fees and vote for its development.
                    </span>
                    </div>
                    <img src="staking-icone.svg" alt="team" className="  h-28"></img>
                </div>
            )
        },
        {
            title: 'CHARITY',
            content: (
                <div className={"flex  flex-col md:flex-row"}>
                    <div className={"flex md:flex-col "}>
                         <span>
                        Dahu Finance offers to its users a fund dedicated to solidarity. In order to bring solutions to social and environmental issues, deposit the tokens of your choosing and we will transform and donate them to our partner charities.
To spur our community into action, we will introduce a leaderboard and our top donors will be rewarded with XDAHUs at the standard price.

                    </span>
                    </div>
                    <img src="charity-icone.svg" alt="team" className=" h-28"></img>
                </div>
            )
        }
    ]


    const displayItem = (item, index) => (
        <div key={index} className='border-t-2 p-4 cursor-pointer text-white transition-all duration-300' onClick={() => setOpenIndex(index)}>
            <span className='font-bold text-clearPurple tracking-widest text-2xl'>
                {item.title}
            </span>
            <div className={index !== openedIndex ? 'opacity-0 h-0' : '' + ' transition-all duration-1000 mt-2 leading-8'}>
                { index === openedIndex && item.content}
            </div>
        </div>
    )

    return(

        <div className={"flex bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple md:h-screen"}>
            <div className="flex-col m-auto bg-bg1 bg-cover md:h-screen border-bt-2 align-middle">
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
        </div>
    );
}

