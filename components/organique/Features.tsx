import FeatureCard from "../molecule/FeatureCard";
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
            <LayoutBorder className={'md:px-0'}>
                <div className={'-m-4 flex flex-col flex-wrap justify-center items-center lg:flex-row'}>
                    <FeatureCard
                        title={"Swap"}
                        href='/info#swap'
                        message={"Instantly exchange your cryptocurrencies for other currencies"}
                        image={'/swap.svg'}
                    />
                    <FeatureCard
                        title={"Farm"}
                        href='/info#farm'
                        message={"Deposit your tokens in our farming pool and earn rewards."}
                        image={'/farm.svg'}
                    />
                    <FeatureCard
                        title={"Stake"}
                        href='/info#stake'
                        message={"Join the Dahu club and recover part of the platform’s fees."}
                        image={'/club.svg'}
                    />
                    <FeatureCard
                        title={"Donate"}
                        href='/info#donate'
                        message={"Because it is not always a personal matter, join the solidarity fund!"}
                        image={'/charity.svg'}
                    />
                </div>
            </LayoutBorder>
        </SectionWithTitles>

    );

}
export default Features;