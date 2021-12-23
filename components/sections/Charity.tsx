import BorderLayout from "../layouts/BorderLayout";

import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";
import {Title} from "../atoms/Titles/Title";

const Charity = () => {
  return (
    <SectionWithTitlesLayout
      title={"Because we are all together"}
      titleColor={'purple'}
      subtitle={"Donate!"}
      bodyClassName={'md:bg-bg1 bg-cover'}
    >
      <BorderLayout
        className={'grid grid-rows-2 justify-items-center lg:grid-rows-none lg:grid-cols-3 lg:items-center space-y-5 lg:space-y-0 lg:gap-5'}>
        <img src={'/together.svg'} alt="charity"/>
        <div className={"lg:col-span-2"}>
          <Title size='small' title={"THE BEST PART OF YOURSELF!"}/>
          <div className={"font-medium tracking-wide text-gray-300 text-lg leading-8"}>
            <div>
              Dahu Finance provides you with a fund dedicated to solidarity.
              In order to bring solutions to social and environmental issues, come deposit the tokens
              of your choosing and we will transform and donate them to our partner charities.
            </div>
            <div className='mt-5'>
              To spur our community into action, we will introduce a
              leaderboard and our top donors will be rewarded with a special and unique NFT.
            </div>
          </div>
        </div>
      </BorderLayout>
    </SectionWithTitlesLayout>
  );
}
export default Charity;