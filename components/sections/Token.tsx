import Image from 'next/image'
import LayoutBorder from "../layouts/LayoutBorder";
import {SectionWithTitles} from "../layouts/SectionWithTitles";

const Token = () => {
    return (
        <SectionWithTitles
            disabledFullScreen
            bodyClassName={'py-20 md:bg-stars bg-cover'}
            title={'Ours tokens'}
            subTitleColor={'darkBlue'}
            subtitle={'Catch them !'}
        >
            <LayoutBorder>
                <div className="flex flex-col items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-20 lg:flex-row">
                    <div className="flex flex-col items-center">
                        <Image src="/dahu-token.svg" alt="cake" width='150' height='150' />
                        <div className={"tracking-wide text-3xl font-bold mt-6"}>DAHU</div>
                        <div className="m-6 md:m-2 tracking-wide text-center font-semibold text-lg ">
                            To start on Dahu Finance catch our DAHU token !<br/>
                            This is the fuel of our plateform !
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/xdahu-token.svg" alt="cake" width='150' height='150' />
                        <div className={"tracking-wide text-3xl font-bold mt-6"}>XDAHU</div>
                        <div className="m-6 md:m-2 tracking-wide text-center font-semibold text-lg">
                            Stake your DAHU for XDAHU <br/>
                            to obtain voting right and earn Dahu rewards
                        </div>
                    </div>
                </div>
            </LayoutBorder>
        </SectionWithTitles>
    );
}
export default Token;