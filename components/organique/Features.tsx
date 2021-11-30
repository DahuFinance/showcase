import FeaturesCards from "../molecule/FeaturesCards";
import LayoutBorder from "../layouts/LayoutBorder";
import {TitleSmall} from "../TitleSmall";
const Features=() => {
    return(
     <LayoutBorder>
         <TitleSmall title={"Features"}/>
         <div className="md:my-10 flex flex-col items-center md:flex-row justify-around">
             <FeaturesCards title={"Swap"} message={"Swap your token easily"} image={'/swap.svg'}></FeaturesCards>
             <FeaturesCards title={"Farm"} message={"Swap your token easily"} image={'/farm.svg'}></FeaturesCards>
             <FeaturesCards title={"Stake"} message={"Swap your token easily"} image={'/club.svg'}></FeaturesCards>
             <FeaturesCards title={"Donate"} message={"Swap your token easily"} image={'/charity.svg'}></FeaturesCards>
         </div>

     </LayoutBorder>
    );

}
export default Features;