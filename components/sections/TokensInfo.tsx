import BorderLayout from "../layouts/BorderLayout";
import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";

const TokensInfo = () => {
  return (
    <SectionWithTitlesLayout
      className={'bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple'}
      bodyClassName={'md:bg-bg2 bg-cover bg-opacity-5'}
      title={'Ours tokens'}
      subTitleColor={'purple'}
      subtitle={'Catch them!'}
    >
      <BorderLayout>
        <div className=" flex flex-col justify-center items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-20 lg:flex-row">
          <div className="flex flex-col items-center">
            <img src="/tokens/dahu-neon.svg" alt="Dahu Neon" className="h-44 md:h-72 lg:h-80"/>
            <div
              className={"text-2xl sm:text-3xl md:text-4xl md:text-4xl p-2 font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-purple to-skyBlue"}>DAHU
            </div>
            <div
              className="m-6 md:m-2 tracking-wide font-medium tracking-wide text-white text-lg justify-center">
              To start on Dahu Finance catch our DAHU token!<br/>
              This is the fuel of our plateform!
            </div>
          </div>
          <div className="flex flex-col items-center">
            <img src="/tokens/xdahu-neon.svg" alt="XDahu Neon" className="h-44 md:h-72 lg:h-80"/>
            <div
              className={" text-2xl sm:text-3xl md:text-4xl md:text-4xl p-2 font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-yellow to-orange"}>XDAHU
            </div>
            <div
              className="m-6 md:m-2 font-medium tracking-wide text-white text-lg justify-center">
              Stake your DAHU for XDAHU <br/>
              to obtain voting right and earn Dahu rewards
            </div>
          </div>
        </div>
      </BorderLayout>
    </SectionWithTitlesLayout>
  );
}
export default TokensInfo;