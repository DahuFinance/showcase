import LayoutBorder from "../layouts/LayoutBorder";
import {TitleSmall} from "../TitleSmall";
import {TitleBig} from "../TitleBig";
import {Subtitle} from "../Subtitle";

const Token=() => {
    return(
        <div className={"md:min-h-screen"}>
            <div className={"bg-gradient-to-r from-purpledarky via-purple to-skyBlue md:h-screen"}>

                <div className="flex-col m-auto bg-stars bg-cover md:h-screen border-bt-2 align-middle">
                    <LayoutBorder>
                        <div className={"lg:pt-20 md:pt-14 pt-6"}>
                            <TitleSmall title="Ours tokens"/>
                            <Subtitle title={"Catch them !"}/>
                            <div className="md:my-10 flex flex-col items-center lg:flex-row">
                                <div className="flex flex-col items-center  md:w-2/4 mb-4 md:mr-6">
                                    <img src="/dahu-token.svg" alt="cake" className= "w-2/6"></img>
                                    <div className={"text-darkBlue tracking-wide text-3xl font-bold mt-6"}>DAHU</div>
                                    <div className="m-6 md:m-2 tracking-wide text-darkBlue text-center font-semibold text-xl ">Catch your DAHU by farming on Dahu finance </div>
                                </div>
                                <div className="flex flex-col items-center md:w-2/4 mb-4">
                                    <img src="/xdahu-token.svg" alt="cake" className= "w-2/6"></img>
                                    <div className={"text-darkBlue tracking-wide text-3xl font-bold mt-6"}>XDAHU</div>
                                    <div className="m-6 md:m-2 text-darkBlue tracking-wide text-center font-semibold text-xl">Stake your DAHU and win XDAHU</div>
                                </div>

                            </div>
                        </div>
                    </LayoutBorder>
                </div>
            </div>
        </div>


    );
}
export default Token;