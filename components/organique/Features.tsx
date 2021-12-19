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
                <div className={'-m-4 flex flex-col items-stretch flex-wrap flex-grow justify-center items-center lg:flex-row'}>
                    <FeatureCard
                        title={"Swap"}
                        href='/info#swaping'
                        message={"Instantly exchange your cryptocurrencies for other currencies"}
                        image={'/features/swapping.png'}
                    />
                    <FeatureCard
                        title={"Farm"}
                        href='/info#farming'
                        message={"Deposit your tokens in our farming pool and earn rewards."}
                        image={'/features/farming.png'}
                    />
                    <FeatureCard
                        title={"Stake"}
                        href='/info#staking'
                        message={"Join the Dahu club and recover part of the platform’s fees."}
                        image={'/features/stacking.png'}
                    />
                    <FeatureCard
                        title={"Donate"}
                        href='/info#charity'
                        message={"Because it is not always a personal matter, join the solidarity fund!"}
                        image={'/features/charity.png'}
                    />
                </div>
            </LayoutBorder>
        </SectionWithTitles>

    );

}
export default Features;