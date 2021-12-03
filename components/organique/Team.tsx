import {TitleBig} from "../TitleBig";
import LayoutBorder from "../layouts/LayoutBorder";
import {SubtitleDark} from "../SubtitleDark";


const Team = () => {
    return (
        <div className={"flex bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple md:h-screen"}>
            <LayoutBorder>
                    <TitleBig title="We start with 3 "/>
                    <SubtitleDark title={"Join us!"}/>
                    <div className="flex flex-col md:flex-col items-center lg:flex-row align-center">
                        <img src="Team.svg" alt="team" className="w-4/6"></img>

                        <div className={" m-auto w-4/6 pb-6 "}>
                            <div className={"text-white tracking-wide text-center text-xl leading-8"}>
                                The team is composed of three founding members, 3 developers passionate about blockchain
                                and decentralized finance.
                                We start with three and hope to find our future collaborators among you soon!
                            </div>
                        </div>
                    </div>

            </LayoutBorder>
        </div>
    );
}
export default Team;