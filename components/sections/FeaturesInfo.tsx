import React, {useEffect, useState} from 'react';
import LayoutBorder from "../layouts/LayoutBorder";
import {SectionWithTitles} from "../layouts/SectionWithTitles";

interface Props {
}

export default function FeaturesInfo(props: Props) {

    const [openedIndex, setOpenIndex] = useState(0)

    const features = [
        {

            title: 'FARMING',
            id: 'farming',
            content: (
                <div className={"flex flex-col md:flex-row"}>
                    <div className={"flex md:flex-col "}>
                        <span>
                            Stake your tokens in our eligible farming pools to earn XDAHUs.
                            Thanks to auto-compounding (accrued interest calculated separately
                            from your invested capital), Dahu Finance gives you the possibility
                            to automatically reinvest your earned interests.
                        </span>

                    </div>
                    <img src="/farming-icone.svg" alt="team" className="h-28"/>
                </div>
            )
        },
        {
            title: 'SWAPPING',
            id: 'swapping',
            content: (
                <div className={"flex flex-col md:flex-row"}>
                    <span>
                        Exchange your tokens immediately for minimal fees.
                        Transaction fees: 0.3% (0.25% to the token providers and 0.05% to our stakers).
                    </span>
                    <img src="/swapping-icone.svg" alt="team" className=" h-28"/>
                </div>
            )
        },
        {
            title: 'STAKING',
            id: 'staking',
            content: (
                <div className={"flex flex-col md:flex-row"}>
                     <span>
                        Lock your tokens on our platform for the period of time of your choice.
                        The longer you lock them, the more XDAHU you get from the platform.
                        These XDAHUs will allow you to earn the platform's fees and vote for its development.
                    </span>
                    <img src="/staking-icone.svg" alt="team" className="  h-28"/>
                </div>
            )
        },
        {
            title: 'CHARITY',
            id: 'charity',
            content: (
                <div  className={"flex flex-col md:flex-row"}>
                     <span>
                        Dahu Finance offers to its users a fund dedicated to solidarity.
                         In order to bring solutions to social and environmental issues,
                         deposit the tokens of your choosing and we will transform and donate
                         them to our partner charities.

                         To spur our community into action, we will introduce
                         a leaderboard and our top donors will be rewarded.
                    </span>
                    <img src="/charity-icone.svg" alt="team" className=" h-28"/>
                </div>
            )
        }
    ]

    useEffect(() => {
        const hash = window.location.hash.substring(1);

        if (hash) {
            const featureIndex = features.findIndex((feature) => feature.id == hash)

            if (featureIndex !== -1) {
                setOpenIndex(featureIndex)
            }
        }
    })

    const displayItem = (item, index) => (
        <div id={item.id} key={index} className='border-t-2 p-4 cursor-pointer text-white transition-all duration-300'
             onClick={(e) => {
                 e.preventDefault();
                 history.pushState({}, '', `#${item.id}`)
                 setOpenIndex(index)
             }}>
            <span className='font-bold text-clearPurple tracking-widest text-2xl'>
                {item.title}
            </span>
            <div
                className={index !== openedIndex ? 'opacity-0 h-0' : '' + ' transition-all duration-1000 mt-2 leading-8'}>
                {index === openedIndex && item.content}
            </div>
        </div>
    )

    return (
        <SectionWithTitles
            title={'Launching Features'}
            subtitle={'Discover..'}
            bodyClassName={'md:bg-bg2 bg-cover'}
        >
            <LayoutBorder>
                <div className='border-b-2 max-w-[60rem]'>
                    {features.map((item, index) => displayItem(item, index))}
                </div>
            </LayoutBorder>
        </SectionWithTitles>
    );
}

