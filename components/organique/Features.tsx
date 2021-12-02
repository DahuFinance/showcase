import FeaturesCards from "../molecule/FeaturesCards";
import LayoutBorder from "../layouts/LayoutBorder";
import {TitleSmall} from "../TitleSmall";
import {SubtitleDark} from "../SubtitleDark";
import {Button} from "../Button";

const Features = () => {
    return (

        <div className={"bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple md:h-screen"}>
            <LayoutBorder>
                <div className={"lg:pt-20 md:pt-14 py-6"}>
                    <TitleSmall title={"Features"}/>
                    <SubtitleDark title={"This is just the beginning… "}/>
                    <div className="md:my-10 flex flex-col items-center md:flex-row justify-around align-middle">
                        <FeaturesCards title={"Swap"} message={"Swap your token easily"}
                                       image={'/swap.svg'}></FeaturesCards>
                        <FeaturesCards title={"Farm"} message={"Swap your token easily"}
                                       image={'/farm.svg'}></FeaturesCards>
                        <FeaturesCards title={"Stake"} message={"Swap your token easily"}
                                       image={'/club.svg'}></FeaturesCards>
                        <FeaturesCards title={"Donate"} message={"Swap your token easily"}
                                       image={'/charity.svg'}></FeaturesCards>
                    </div>
                    <div className={"flex justify-center md:justify-end lg:pr-6"}>
                        <Button title={"more"}/>
                    </div>

                </div>
            </LayoutBorder>
        </div>

    );

}
export default Features;