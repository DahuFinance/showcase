import LayoutBorder from "../layouts/LayoutBorder";
import {SectionWithTitles} from "../layouts/SectionWithTitles";

const Team = () => {
    return (
        <SectionWithTitles
            className={'bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple'}
            title={'We start with 3 '}
            titleColor={'purple'}
            subtitle={'Join us!'}
        >
            <LayoutBorder className="grid grid-rows-2 lg:grid-rows-none lg:grid-cols-2 lg:items-center space-y-5 lg:space-y-0">
                <img src="Team.svg" alt="team" ></img>
                <div className={"text-white tracking-wide text-center text-xl leading-8"}>
                    The team is composed of three founding members, 3 developers passionate about blockchain
                    and decentralized finance.
                    We start with three and hope to find our future collaborators among you soon!
                </div>
            </LayoutBorder>
        </SectionWithTitles>
    );
}
export default Team;