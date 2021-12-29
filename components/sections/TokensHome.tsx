import Image from 'next/image'
import BorderLayout from "../layouts/BorderLayout";
import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";

const TokensHome = () => {
  return (
    <SectionWithTitlesLayout
      disabledFullScreen
      bodyClassName={'py-20 md:bg-stars bg-cover'}
      title={'Ours tokens'}
      subTitleColor={'darkBlue'}
      subtitle={'Catch them!'}
    >
      <BorderLayout>
        <div className="flex flex-col items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-20 lg:flex-row">
          <div className="flex flex-col items-center">
            <Image src="/tokens/dahu.svg" alt="Dahu Token" width='150' height='150'/>
            <div className={"tracking-wide text-3xl font-bold mt-6"}>DAHU</div>
            <div className="m-6 md:m-2 tracking-wide text-center font-semibold text-lg ">
              To start on Dahu Finance catch our DAHU token!<br/>
              This is the fuel of our plateform!
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/tokens/xdahu.svg" alt="XDahu Token" width='150' height='150'/>
            <div className={"tracking-wide text-3xl font-bold mt-6"}>XDAHU</div>
            <div className="m-6 md:m-2 tracking-wide text-center font-semibold text-lg">
              Stake your DAHU for XDAHU <br/>
              to obtain voting right and earn Dahu rewards
            </div>
          </div>
        </div>
      </BorderLayout>
    </SectionWithTitlesLayout>
  );
}
export default TokensHome;