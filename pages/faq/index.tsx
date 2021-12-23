import AppLayout from "../../components/layouts/AppLayout";
import {SectionWithTitlesLayout} from "../../components/layouts/SectionWithTitlesLayout";
import BorderLayout from "../../components/layouts/BorderLayout";
import Panel, {Card} from "../../components/atoms/Panel";
import React from "react";
import Link from 'next/link'

export default function Faq() {

  const faq: Card[] = [
    {
      title: 'When the launch is planned?',
      id: 'launch',
      content: (
        <span>
            Very soon! In January of 2022.
        </span>
      )
    },
    {
      title: 'Is a private sale is scheduled?',
      id: 'private-sale',
      content: (
        <span>
          No! There will be no private sales, we want to launch the project as fairly as possible.
        </span>
      )
    },
    {
      title: 'Are your an DEX or an AMM?',
      id: 'amm',
      content: (
        <span>
          We are more than a simple DEX, more feature will coming soon!
          <Link href='/info'>
            <div className='block underline text-blue-500 cursor-pointer'>
              (See our roadmap for more information)
            </div>
          </Link>
        </span>
      )
    },
    {
      title: 'Is an airdrop planned, if so when?',
      id: 'airdrop',
      content: (
        <span>
          At the launch of the platform! In January of 2022.
          <div className='italic mt-3 opacity-60'>
            All the details will be shared on our Telegram when the app launches.
          </div>
        </span>
      )
    },
    {
      title: 'How do you guarantee the donation to the charity fund?',
      id: 'charity-fund',
      content: (
        <span>
           Each donation will be made on the blockchain and will be
           fully transparent and verifiable with the charity's address.
        </span>
      )
    }
  ]

  return (
    <AppLayout background={'dark'} title='Dahu Finance | FAQ'>
      <SectionWithTitlesLayout
        bodyClassName='md:bg-bg1 bg-cover'
        justify='start'
        title='FAQ'
      >
        <BorderLayout>
          <Panel cards={faq}/>
        </BorderLayout>
      </SectionWithTitlesLayout>
    </AppLayout>
  )
}