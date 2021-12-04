import {TextLeft} from "../TextLeft";
import {TitleBig} from "../TitleBig";
import LayoutBorder from "../layouts/LayoutBorder";
import {Subtitle} from "../Subtitle";
import {SubtitleDark} from "../SubtitleDark";

const Charity=() =>{
    return(
        <div className={"flex bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple md:h-screen"}>
            <div className="flex-col m-auto bg-bg2 bg-cover md:h-screen border-bt-2 align-middle">
            <LayoutBorder>
                <TitleBig title={"Because we are all together"}/>
                <SubtitleDark title={"Donate !"}/>
                <div className="flex flex-col flex-wrap sm:flex-row  items-center  align-center">
                    <img src="together.svg" alt="charity" className="h-4/6 sm:h-4/6 md:h-full"/>
                    <div className={" m-auto w-1/2 pb-6 "}>
                    <div className={"text-white tracking-wide text-center text-xl leading-8"}>
                        The Dahu Finance team is setting up a fund dedicated to solidarity.
                        Come and deposit any token of your choice, we will take care of transforming them and donating them to partner charities.
                        Each week we will reward the most generous donor among you, check the top donor table to see in which position you are.

                    </div>
                    </div>
                </div>
            </LayoutBorder>
            </div>
        </div>


    );
}
export default Charity;