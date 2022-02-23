import Link from 'next/link'
import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";
import BorderLayout from "../layouts/BorderLayout";
import Panel, {Card} from "../atoms/Panel";

export const faq: Card[] = [
  {
    title: 'When the launch is planned?',
    id: 'launch',
    content: 'The initially planned launch has been postponed. \n' +
        'We will launch the project at the end of the public sale. Stay tuned!'
  },
  {
    title: 'Is a private sale is scheduled?',
    id: 'private-sale',
    content: 'YES! Really soon.'
  },
  {
    title: 'Are your an DEX or an AMM?',
    id: 'amm',
    content: 'We are more than a simple DEX, DahuFinance is a one stop solution!',
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

export default function FAQ() {

  return (
    <SectionWithTitlesLayout
      className={'bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple'}
      bodyClassName='md:bg-bg2 bg-cover'
      title='FAQ'
    >


      <BorderLayout>
        <Panel cards={faq}/>
      </BorderLayout>
    </SectionWithTitlesLayout>
  )
}