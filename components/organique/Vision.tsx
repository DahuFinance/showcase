import {TitleBig} from "../TitleBig";
import LayoutBorder from "../layouts/LayoutBorder";
import {SubtitleDark} from "../SubtitleDark";

const Vision=() => {
    return(
        <div className=" md:h-screen">
            <LayoutBorder>
            <TitleBig title="The best is yet to come !"/>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center  md:w-3/4 mb-4 md:mr-6">
                    <img src="/cake2.svg" alt="cake" className= "w-3/6"></img>
                    <div className="m-6 text-white text-center leading-8 ">We aim to become an all-in-one solution to provide you a set of innovative services around decentralized finance.
                        Our platform aims to be a long-term investment for you, by developing Dahu's staking from the beginning you capitalize on the future by receiving a part of the platform's fees. </div>
                </div>
                <div className="flex flex-col items-center md:w-3/4 mb-4">
                    <img src="/dahu-avalanche.svg" alt="cake" className= "w-3/6"></img>
                    <div className="m-6 text-white text-center leading-8">We didn’t choose Avalanche by chance but by conviction, thanks to its innovative consensus, Avalanche allows us to obtain speed and fluidity of execution making the user enjoy an optimal experience.
                        By choosing Avalanche, we choose a blockchain that requires very little energy to operate, thus respecting the vision of our project and that of our planet.</div>
                </div>

            </div>
            </LayoutBorder>
        </div>

    );
}
export default Vision;