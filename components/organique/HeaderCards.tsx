import {TitleSmallWhite} from "../TitleSmallWhite";
import LayoutBorder from "../layouts/LayoutBorder";

const HeaderCards = () => {
    return (

        <div className="bg-dahuMobile md:bg-dahu bg-cover md:h-screen">
            <LayoutBorder>
                <div className="flex flex-col mt-6 ">
                    <img src="/dahu-finance.svg" alt="Logo" className="md:h-28 h-20 self-center lg:self-start"/>
                    <div className={"flex flex-col lg:flex-row text-white"}>
                        <div className={"self-center"}>
                            <TitleSmallWhite title="Everyone can catch a DAHU"/>
                        </div>
                        <div className={"flex md:flex-row lg:ml-10 self-center gap-10 mt-4"}>
                            <a target='_blank' href='#'>
                                <img src={"/medium.svg"} alt={"icone-twitter"} className={"h-16 shadow-halo md:hover:scale-105 md:transition md:ease-in-out md:duration-200 mb-4 lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-200"}/>
                            </a>
                            <a target='_blank' href='https://twitter.com/dahufinance' className={'flex space-x-2 items-center self-start'}>
                                <img src={"/twitter.svg"} alt={"icone-twitter"} className={"h-16 shadow-halo md:hover:scale-105 md:transition md:ease-in-out md:duration-200 mb-4 lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-200"}/>
                            </a>
                            <a target='_blank' href='https://t.me/dahufinance' className={'flex space-x-2 items-center self-start'}>
                                <img src={"/telegram.svg"} alt={"icone-twitter"} className={"h-16 shadow-halo md:hover:scale-105 md:transition md:ease-in-out md:duration-200 mb-4 lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-200"}/>
                            </a>
                            <a target='_blank' href='https://github.com/dahufinance' className={'flex space-x-2 items-center self-start'}>
                                <img src={"/github.svg"} alt={"icone-twitter"} className={"h-16 shadow-halo md:hover:scale-105 md:transition md:ease-in-out md:duration-200 mb-4 lg:hover:scale-110 lg:transition lg:ease-in-out lg:duration-200"}/>
                            </a>
                        </div>
                    </div>
                </div>
            </LayoutBorder>
        </div>

    );
}
export default HeaderCards;