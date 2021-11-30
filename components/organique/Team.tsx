import {TitleBig} from "../TitleBig";
import LayoutBorder from "../layouts/LayoutBorder";


const Team=() => {
    return(
        <div>
        <TitleBig title="We start with 3 !"/>
        <LayoutBorder>
            <div className="flex flex-col md:flex-row">
                <div className="flex flex-col items-center  md:w-3/4 mb-4 md:mr-6">
                    <img src="/leo.png" alt="leo" className= "w-2/6 md:w-3/6"></img>
                    <div className={"text-white text-2xl font-bold mt-6"}>Léo</div>

                </div>
                <div className="flex flex-col items-center md:w-3/4 mb-4">
                    <img src="/remi.png" alt="remi" className= "w-2/6 md:w-3/6"></img>
                    <div className={"text-white text-2xl font-bold mt-6"}>Rémi</div>

                </div>
                <div className="flex flex-col items-center md:w-3/4 mb-4">
                    <img src="/kate.png" alt="kate" className= "w-2/6 md:w-3/6"></img>
                    <div className={"text-white text-2xl font-bold mt-6"}>Kate</div>

                </div>

            </div>
            <div className={" m-auto w-4/6"}>
                <div className={"text-white text-center text-lg leading-8"}>
                    The team is composed of three founding members, 3 developers passionate about blockchain and decentralized finance.
                    We start with three and hope to find our future collaborators among you soon!
                </div>
            </div>

        </LayoutBorder>
        </div>
    );
}
export default Team;