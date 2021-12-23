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
    return (
      <div id={card.id} key={index}
           className='w-full border-t-2 p-4  text-white transition-all duration-300'>
            <span
              onClick={(e) => {
                e.preventDefault();
                history.pushState({}, '', `#${card.id}`)
                setOpenIndex(index)
              }}
              className='font-bold cursor-pointer w-full text-clearPurple tracking-widest text-2xl'>
                {card.title}
            </span>
        <div
          className={index !== openedIndex ? 'opacity-0 h-0' : '' + ' transition-all w-full duration-1000 mt-2 leading-8'}>
          {index === openedIndex && card.content}
        </div>
      </div>
    )
  }

  return (
    <div className='border-b-2'>
      {cards.map((card, index) => renderCard(card, index))}
    </div>
  );
}