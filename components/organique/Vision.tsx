import LayoutBorder from "../layouts/LayoutBorder";
import {SectionWithTitles} from "../layouts/SectionWithTitles";

const Vision=() => {
    return(
        <SectionWithTitles
            title={'The best is yet to come !'}
            titleColor={'purple'}
        >
            <LayoutBorder className={'grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2'}>
                <div className="flex flex-col items-center text-md">
                    <img src="/cake2.svg" alt="cake" className= "h-44 md:h-80"/>
                    <div className="m-6 text-white text-justify leading-8 ">
                        We aim to become an all-in-one solution to provide you a set of innovative services around decentralized finance.
                        Our platform aims to be a long-term investment for you, by developing Dahu's staking from the beginning you capitalize on the future by receiving a part of the platform's fees.
                    </div>
                </div>
                <div className="flex flex-col items-center">
                    <img src="/dahu-avalanche.svg" alt="cake" className= "h-44 md:h-80"/>
                    <div className="m-6 text-white text-justify leading-8">
                        We didn’t choose Avalanche by chance but by conviction, thanks to its innovative consensus, Avalanche lets us obtain speed and fluidity of execution, allowing the user to enjoy an optimal experience.
                        By choosing Avalanche, we choose a blockchain that requires very little energy to operate, thus respecting the vision of our project and that of our planet.
                    </div>
                </div>
            </LayoutBorder>
        </SectionWithTitles>
    );
}
export default Vision;