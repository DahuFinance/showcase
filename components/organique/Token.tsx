import LayoutBorder from "../layouts/LayoutBorder";
import {TitleSmall} from "../TitleSmall";

const Token=() => {
    return(
        <div className="m-auto">
            <LayoutBorder>
                <TitleSmall title="Ours tokens"/>
                <div className="md:my-10 flex flex-col md:flex-row">
                    <div className="flex flex-col items-center  md:w-3/4 mb-4 md:mr-6">
                        <img src="/dahu-token.svg" alt="cake" className= "w-2/6"></img>
                        <div className={"text-white text-2xl font-bold mt-6"}>DAHU</div>
                        <div className="m-6 md:m-2 text-white text-center font-semibold text-xl ">Catch your DAHU by farming on Dahu finance </div>
                    </div>
                    <div className="flex flex-col items-center md:w-3/4 mb-4">
                        <img src="/xdahu-token.svg" alt="cake" className= "w-2/6"></img>
                        <div className={"text-white text-2xl font-bold mt-6"}>XDAHU</div>
                        <div className="m-6 md:m-2 text-white text-center font-semibold text-xl">Stake your DAHU and win XDAHU</div>
                    </div>

                </div>
            </LayoutBorder>
        </div>

    );
}
export default Token;