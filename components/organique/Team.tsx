import Image from 'next/image'
import LayoutBorder from "../layouts/LayoutBorder";
import {SectionWithTitles} from "../layouts/SectionWithTitles";
import {Title} from "../Titles/Title";

const Team = () => {
    return (
        <SectionWithTitles
            className={'bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple'}
            title={'We start with 3 '}
            titleColor={'purple'}
            subtitle={'Join us!'}
        >
            <LayoutBorder className="grid grid-rows-1 lg:grid-rows-none lg:grid-cols-2 lg:items-center space-y-5 lg:space-y-0">
               <div className='flex justify-center items-center'>
                   <Image src="/team.png" width={540} height={500} layout='intrinsic' alt="team"/>
               </div>
                <div className={"text-white tracking-wide text-justify  leading-8"}>
                    <Title size={'small'} title={'Discover our team 🐐'}/>

                    <div className='mt-5'>
                        All three graduated from a programming school and passionate about blockchain and decentralized finance, we have been working and accomplishing projects together for almost 3 years now.
                        It is by choice and conviction that we have all chosen to orient our career in DeFi in order to offer you the best financial tools and specialize ourselves in this domain.
                        After many months of work, we are proud to offer you our first version of our app made with love!
                    </div>

                    <div className=' mt-5'>
                        Do not hesitate to contact us on Telegram to give us ideas for improvements or simply join us.
                        We are starting out with three people but hope to grow quickly and increase our numbers as well as our services.
                    </div>

                </div>
            </LayoutBorder>
        </SectionWithTitles>
    );
}
export default Team;