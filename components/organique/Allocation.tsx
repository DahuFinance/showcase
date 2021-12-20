import {SectionWithTitles} from "../layouts/SectionWithTitles";
import LayoutBorder from "../layouts/LayoutBorder";
import {Title} from "../Titles/Title";


const Allocation=() => {
    return(
        <SectionWithTitles
            title={'Allocation'}
            titleColor={'purple'}
            bodyClassName={'md:bg-bg2 bg-cover'}
        >
            <LayoutBorder>
                <div className="grid grid-cols-none lg:grid-cols-2 grid-rows-1 lg:grid-rows-none place-content-center place-items-center lg:gap-5">
                    <img src="/allocation.png" alt="cake"/>

                    <div>
                        <Title size='extra-small' title={" Dahu Finance plans its token distribution as follows:"}/>
                        <div className="font-medium tracking-wide text-gray-300 leading-8 text-lg ">
                            <ul className='list-disc mt-5 space-y-5'>
                                <li>
                                    15% for the foundation with which the salaries of our full-time team on the project are included, but also the salaries of our contributors, such as translators and moderators.
                                    Also planned for is the budget allocated to upcoming security audits.
                                </li>
                                <li>
                                    To launch Dahu Finance, we are planning a 5% airdrop budget over
                                    a one-month period from launch.
                                    Unrecovered airdrops will be sent back to the community through a
                                    fund and governed by the community.
                                </li>
                                <li>
                                    Regarding the 80% of tokens planned for liquidity mining and bonds,
                                    we address them to all of you, our future contributors!
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </LayoutBorder>
        </SectionWithTitles>
    );
}
export default Allocation;