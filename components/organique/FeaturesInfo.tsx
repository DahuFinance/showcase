import React, {useState} from 'react';
import LayoutBorder from "../layouts/LayoutBorder";
import { CSSTransition } from 'react-transition-group';

interface Props {
}

export default function FeaturesInfo(props :Props){

    const [openedIndex, setOpenIndex] = useState(0)

    const features = [
        {
            title: 'FARMING',
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
            <span className='fond-bold text-2xl'>
                {item.title}
            </span>
            <div className={index !== openedIndex ? 'opacity-0 h-0' : '' + ' transition-all duration-1000 mt-2'}>
                { index === openedIndex && item.content}
            </div>
        </div>
    )

    return(
        <LayoutBorder>
            <div className='border-b-2'>
                {features.map((item, index) => displayItem(item, index))}
            </div>
        </LayoutBorder>
    );
}

