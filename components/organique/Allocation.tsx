import {SectionWithTitles} from "../layouts/SectionWithTitles";
import LayoutBorder from "../layouts/LayoutBorder";
import {SubTitleText} from "../Titles/SubTitleText";
import {Title} from "../Titles/Title";


const Allocation=() => {
    return(
        <SectionWithTitles
            title={'Allocation'}
            titleColor={'purple'}
            bodyClassName={'bg-bg2 bg-cover'}
        >
            <LayoutBorder>
                <div className="grid grid-cols-none lg:grid-cols-2 grid-rows-2 lg:grid-rows-none place-content-center place-items-center lg:gap-5">
                    <img src="/allocation.svg" alt="cake"/>

                    <div>
                        <Title size='small' title={"TON TIRE ICI!"}/>
                        <span className="font-medium tracking-wide text-gray-300 leading-8 text-lg ">
                            We aim to become an all-in-one solution to provide you a set of innovative services around decentralized finance.
                            Our platform aims to be a long-term investment for you, by developing Dahu's staking from the beginning you capitalize on the future by receiving a part of the platform's fees.
                        </span>
                    </div>

                </div>
            </LayoutBorder>
        </SectionWithTitles>
    );
}
export default Allocation;