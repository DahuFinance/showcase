import Link from 'next/link'
import { FAQPageJsonLd } from 'next-seo';
import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";
import BorderLayout from "../layouts/BorderLayout";
import Panel, {Card} from "../atoms/Panel";

export default function FAQ() {
  const faq: Card[] = [
    {
      title: 'When the launch is planned?',
      id: 'launch',
      content: 'Very soon! In January of 2022.'
    },
    {
      title: 'Is a private sale is scheduled?',
      id: 'private-sale',
      content: 'No! There will be no private sales, we want to launch the project as fairly as possible.'
    },
    {
      title: 'Are your an DEX or an AMM?',
      id: 'amm',
      content: 'We are more than a simple DEX, more feature will coming soon!',
      render: (card) => (
        <span>
          {card.content}
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
      content: 'At the launch of the platform! In January of 2022.',
      render: (card) => (
        <span>
          {card.content}
          <div className='italic mt-3 opacity-60'>
            All the details will be shared on our Telegram when the app launches.
          </div>
        </span>
      )
    },
    {
      title: 'How do you guarantee the donation to the charity fund?',
      id: 'charity-fund',
      content: 'Each donation will be made on the blockchain and will be fully transparent and verifiable with the charity\'s address.'
    }
  ]

  const seo = faq.map((item) => ({
    questionName: item.title,
    acceptedAnswerText: item.content
  }))

  return (
    <SectionWithTitlesLayout
      className={'bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple'}
      bodyClassName='md:bg-bg2 bg-cover'
      title='FAQ'
    >

      <FAQPageJsonLd
        mainEntity={seo}
      />

      <BorderLayout>
        <Panel cards={faq}/>
      </BorderLayout>
    </SectionWithTitlesLayout>
  )
}