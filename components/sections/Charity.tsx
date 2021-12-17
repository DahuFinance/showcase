import Image from 'next/image'
import LayoutBorder from "../layouts/LayoutBorder";

import together from '../../public/together.svg'
import {SectionWithTitles} from "../layouts/SectionWithTitles";
import {Title} from "../Titles/Title";

const Charity = () => {
    return (
        <SectionWithTitles
            title={"Because we are all together"}
            titleColor={'purple'}
            subtitle={"Donate !"}
            bodyClassName={'bg-bg2 bg-cover'}
        >
            <LayoutBorder className={'grid grid-rows-2 lg:grid-rows-none lg:grid-cols-3 lg:items-center space-y-5 lg:space-y-0 lg:gap-5'}>
                <Image src={together} alt="charity"/>
                <div className={"lg:col-span-2"}>
                    <Title size='small' title={"THE BEST PART OF YOURSELF!"}/>
                    <div className={"font-medium tracking-wide text-gray-300 text-lg leading-8"}>
                        <div>
                            The Dahu Finance team is setting up a fund dedicated to solidarity.
                            Come and deposit any token of your choice, we will take care of
                            transforming them and donating them to partner charities.
                        </div>
                        <div className='mt-5'>
                            Each week we will reward the most generous donor among you,
                            check the top donor table to see in which position you are.
                        </div>
                    </div>
                </div>
            </LayoutBorder>
        </SectionWithTitles>
    );
}
export default Charity;