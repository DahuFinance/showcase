import React, {ReactNode, useEffect, useState} from "react";


export interface Card {
  title: string;
  id: string;
  content: ReactNode
}

interface Props {
  cards: Card[]
}

export default function Panel(
  {
    cards
  }: Props
) {

  const [openedIndex, setOpenIndex] = useState(0)

  useEffect(() => {
    const hash = window.location.hash.substring(1);

    if (hash) {
      const featureIndex = cards.findIndex((feature) => feature.id == hash)

      if (featureIndex !== -1) {
        setOpenIndex(featureIndex)
      }
    }
  })

  const renderCard = (card: Card, index) => {
    const isLast = index === (cards.length - 1)

    return (
      <div id={card.id} key={index}
           className={`w-full text-white transition-all duration-300 ${isLast ? 'border-t-2 border-b-2' : 'border-t-2' }`}>
            <div
              onClick={(e) => {
                e.preventDefault();
                history.pushState({}, '', `#${card.id}`)
                setOpenIndex(index)
              }}
              className='p-4 font-bold w-full cursor-pointer text-clearPurple tracking-widest text-xl md:text-2xl'>
                {card.title}
            </div>
        <div
          onClick={e => e.preventDefault()}
          className={index !== openedIndex ? 'opacity-0 h-0' : '' + ' p-2 transition-all w-full duration-1000 mt-2 leading-8'}>
          {index === openedIndex && card.content}
        </div>
      </div>
    )
  }

  return (
    <div className='xl:px-32 2xl:px-40'>
      {cards.map((card, index) => renderCard(card, index))}
    </div>
  );
}