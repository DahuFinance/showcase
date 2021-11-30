import {TextLeft} from "../TextLeft";
import {TitleBig} from "../TitleBig";
import LayoutBorder from "../layouts/LayoutBorder";

const Charity=() =>{
    return(
        <div>
            <LayoutBorder>
                <TitleBig title={"Because we are all together"}/>
                <TextLeft message={"The Dahu Finance team is setting up a fund dedicated to charity. \n" +
                "Come and deposit any token of your choice, we will take care of transforming them and donating them to partner associations. \n" +
                "Each week we will reward the most generous donor among you, check the top donor table to see in which position you are. "}/>
            </LayoutBorder>

        </div>

    );
}
export default Charity;