import Minicard from "../molecule/Minicard";
import {TitleSmallWhite} from "../TitleSmallWhite";
import LayoutBorder from "../layouts/LayoutBorder";

const HeaderCards = () => {
    return (

        <div className=" bg-dahuMobile md:bg-dahu bg-cover md:h-screen">
            <div className="flex flex-col justify-center mt-6">
                <img src="/dahu-finance.svg" alt="Logo" className="md:h-28 h-20"/>
                <TitleSmallWhite title="Everyone can catch a DAHU"/>
            </div>
            <LayoutBorder>
                <Minicard/>
            </LayoutBorder>
        </div>

    );
}
export default HeaderCards;