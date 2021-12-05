import FeaturesCards from "../molecule/FeaturesCards";
import LayoutBorder from "../layouts/LayoutBorder";
import {Button} from "../Button";
import {SectionWithTitles} from "../layouts/SectionWithTitles";

const Features = () => {
    return (
        <SectionWithTitles
            className={'bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple '}
            title={'Features'}
            subtitle={'This is just the beginning… '}
        >
            <LayoutBorder>
                <div className={'-m-4 flex flex-col flex-wrap justify-center items-center lg:flex-row'}>
                    <FeaturesCards
                        title={"Swap"}
                        message={"Swap your token easily"}
                        image={'/swap.svg'}
                    />
                    <FeaturesCards
                        title={"Farm"}
                        message={"Swap your token easily"}
                        image={'/farm.svg'}
                    />
                    <FeaturesCards
                        title={"Stake"}
                        message={"Swap your token easily"}
                        image={'/club.svg'}
                    />
                    <FeaturesCards
                        title={"Donate"}
                        message={"Swap your token easily"}
                        image={'/charity.svg'}
                    />
                </div>
                <div className={"flex justify-center md:justify-end mt-5"}>
                    <Button title={"more"}/>
                </div>
            </LayoutBorder>
        </SectionWithTitles>

    );

}
export default Features;