import {SectionWithTitles} from "../layouts/SectionWithTitles";
import LayoutBorder from "../layouts/LayoutBorder";
import {SubTitleText} from "../Titles/SubTitleText";


const Allocation=() => {
    return(
        <SectionWithTitles
            title={'Allocation'}
            titleColor={'purple'}
            bodyClassName={'bg-bg2 bg-cover'}
        >
            <LayoutBorder className={"md:px-40"}>
                <div className="flex flex-col md:flex-row justify-center items-center">
                    <img src="/allocation.svg" alt="cake" className= "w-5/6"></img>

                        <div className="m-6 m-6 md:m-2 font-medium tracking-wide text-gray-300 leading-8 text-lg w-2/3 ">We aim to become an all-in-one solution to provide you a set of innovative services around decentralized finance.
                            Our platform aims to be a long-term investment for you, by developing Dahu's staking from the beginning you capitalize on the future by receiving a part of the platform's fees. </div>


                </div>

            </LayoutBorder>
        </SectionWithTitles>
    );
}
export default Allocation;