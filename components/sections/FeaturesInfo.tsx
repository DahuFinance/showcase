import React from 'react';
import BorderLayout from "../layouts/BorderLayout";
import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";
import Panel, {Card} from "../atoms/Panel";

export default function FeaturesInfo() {
  const features: Card[] = [
    {

      title: 'FARMING',
      id: 'farming',
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
          <div className={"flex md:flex-col "}>
            <span>
                Stake your tokens in our eligible farming pools to earn XDAHUs.
                Thanks to auto-compounding (accrued interest calculated separately
                from your invested capital), Dahu Finance gives you the possibility
                to automatically reinvest your earned interests.
            </span>
          </div>
          <img src="/icons/farming.svg" alt="team" className="h-28"/>
        </div>
      )
    },
    {
      title: 'SWAPPING',
      id: 'swapping',
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
          <span>
              Exchange your tokens immediately for minimal fees.
              Transaction fees: 0.3% (0.25% to the token providers and 0.05% to our stakers).
          </span>
          <img src="/icons/swapping.svg" alt="team" className=" h-28"/>
        </div>
      )
    },
    {
      title: 'STAKING',
      id: 'staking',
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
           <span>
              Lock your tokens on our platform for the period of time of your choice.
              The longer you lock them, the more XDAHU you get from the platform.
              These XDAHUs will allow you to earn the platform's fees and vote for its development.
          </span>
          <img src="/icons/staking.svg" alt="team" className="  h-28"/>
        </div>
      )
    },
    {
      title: 'CHARITY',
      id: 'charity',
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
           <span>
              Dahu Finance offers to its users a fund dedicated to solidarity.
               In order to bring solutions to social and environmental issues,
               deposit the tokens of your choosing and we will transform and donate
               them to our partner charities.

               To spur our community into action, we will introduce
               a leaderboard and our top donors will be rewarded.
          </span>
          <img src="/icons/charity.svg" alt="team" className=" h-28"/>
        </div>
      )
    }
  ]

  return (
    <SectionWithTitlesLayout
      title={'Launching Features'}
      subtitle={'Discover..'}
      bodyClassName={'md:bg-bg2 bg-cover'}
    >
      <BorderLayout>
        <Panel cards={features}/>
      </BorderLayout>
    </SectionWithTitlesLayout>
  );
}

