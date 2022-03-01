import React from 'react';
import BorderLayout from "../layouts/BorderLayout";
import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";
import Panel, {Card} from "../atoms/Panel";

export default function FeaturesInfo() {
  const features: Card[] = [
    {

      title: 'FARMING',
      subtitle: '',
      id: 'farming',
      locked: false,
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
      subtitle: '',
      id: 'swapping',
      locked: false,
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
      subtitle: '',
      id: 'staking',
      locked: false,
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
      title: 'NOTIFICATION SERVICES',
      subtitle: 'Coming soon',
      id: 'notification_services',
      locked: true,
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
          <span>
              Coming soon
          </span>
        </div>
      )
    },
    {
      title: 'BONDS',
      subtitle: 'Coming soon',
      id: 'bonds',
      locked: true,
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
          <span>
              Coming soon
          </span>
        </div>
      )
    },
    {
      title: 'LENDING BORROWING',
      subtitle: 'Coming soon',
      id: 'lending',
      locked: true,
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
          <span>
              Coming soon
          </span>

        </div>
      )
    },
    {
      title: 'OPTIMIZED STABLE POOL',
      subtitle: 'Coming soon',
      id: 'stable',
      locked: true,
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
          <span>
              Coming soon
          </span>

        </div>
      )
    },
      {
          title: 'ETF, FARMING ETF',
          subtitle: 'Coming soon',
          id: 'ETF',
          locked: true,
          render: () => (
              <div className={"flex flex-col md:flex-row"}>
          <span>
              Coming soon
          </span>

              </div>
          )
      },
    {
      title: 'GOVERNANCE',
      subtitle: 'Coming soon',
      id: 'governance',
      locked: true,
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
          <span>
              Coming soon
          </span>

        </div>
      )
    },
    {
      title: 'HUB INNOVATION',
      subtitle: 'Coming soon',
      id: 'hub',
      locked: true,
      render: () => (
        <div className={"flex flex-col md:flex-row"}>
          <span>
              Coming soon
          </span>

        </div>
      )
    },
    {
      title: 'CHARITY',
      subtitle: '',
      id: 'charity',
      locked: false,
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
      title={'Features'}
      subtitle={'Discover..'}
      bodyClassName={'md:bg-bg2 bg-cover'}
    >
      <BorderLayout>
        <Panel cards={features}/>
      </BorderLayout>
    </SectionWithTitlesLayout>
  );
}

