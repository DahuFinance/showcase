import LayoutBorder from "../layouts/LayoutBorder";
import {SectionWithTitles} from "../layouts/SectionWithTitles";

const Token = () => {
    return (
        <SectionWithTitles
            className={'bg-gradient-to-r from-purpledarky via-purple to-skyBlue'}
            bodyClassName={'bg-stars bg-cover'}
            title={'Ours tokens'}
            subTitleColor={'darkBlue'}
            subtitle={'Catch them !'}
        >
            <LayoutBorder>
                <div className=" flex flex-col items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-20 lg:flex-row">
                    <div className="flex flex-col items-center">
                        <img src="/dahu-token.svg" alt="cake" className="h-24 md:h-32 lg:h-44"/>
                        <div className={"text-darkBlue tracking-wide text-3xl font-bold mt-6"}>DAHU</div>
                        <div
                            className="m-6 md:m-2 tracking-wide text-darkBlue text-center font-semibold text-xl ">Catch
                            your DAHU by farming <br/>
                            on Dahu finance
                        </div>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src="/xdahu-token.svg" alt="cake" className="h-24 md:h-32 lg:h-44"/>
                        <div className={"text-darkBlue tracking-wide text-3xl font-bold mt-6"}>XDAHU</div>
                        <div
                            className="m-6 md:m-2 text-darkBlue tracking-wide text-center font-semibold text-xl">
                            Stake your DAHU <br/>
                            and win XDAHU
                        </div>
                    </div>
                </div>
            </LayoutBorder>
        </SectionWithTitles>
    );
}
export default Token;