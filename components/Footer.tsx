import LayoutBorder from "./layouts/LayoutBorder";

const Footer = () => {
    return (
        <LayoutBorder className="flex justify-center md:justify-start space-x-20 md:space-x-52 xl:space-x-52 bg-darkBlue text-white py-10 h-44">
            <a href='#' className={'flex space-x-2 items-center self-start'}>
                <img src={"/twitter.svg"} alt={"icone-twitter"} className={"h-10 w-10 rounded-full shadow-halo transition hover:scale-105 ease-in-out"}/>
                <span className={'hidden md:block'}>Twitter</span>
            </a>
            <a href='#' className={'flex space-x-2 items-center self-start'}>
                <img src={"/medium.svg"} alt={"icone-twitter"} className={"h-10 w-10 rounded-full shadow-halo transition hover:scale-105 ease-in-out"}/>
                <span className={'hidden md:block'}>Medium</span>
            </a>
            <a href='#' className={'flex space-x-2 items-center self-start'}>
                <img src={"/telegram.svg"} alt={"icone-twitter"} className={"h-10 w-10 rounded-full shadow-halo transition hover:scale-105 ease-in-out"}/>
                <span className={'hidden md:block'}>Telegram</span>
            </a>
        </LayoutBorder>
    );
}
export default Footer;