import Image from 'next/image'
import BorderLayout from "../layouts/BorderLayout";
import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";

const Vesting = () => {
  return (
    <SectionWithTitlesLayout
      disabledFullScreen
      title={''}
      titleColor={'purple'}
      bodyClassName={'md:bg-bg1 bg-cover items-center'}
      subTitleColor={'darkBlue'}
      subtitle={'Vesting'}
    >
      <BorderLayout>
        <div className="flex flex-col items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-20 lg:flex-row">
          <div className="flex flex-col items-center ">
            <Image src="/vesting.png" width={1138} height={540} layout={'intrinsic'}
                   alt="Process farming example"/>
          </div>
        </div>
      </BorderLayout>
    </SectionWithTitlesLayout>
  );
}
export default Vesting;