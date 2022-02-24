import Image from 'next/image'
import BorderLayout from "../layouts/BorderLayout";
import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";

const Process = () => {
  return (
    <SectionWithTitlesLayout
      disabledFullScreen
      bodyClassName={'py-20 bg-darkBlue items-center'}
      title={'Rethink investment steps'}
      subTitleColor={'darkBlue'}
      subtitle={'Discover the Dahu process with Farming example'}
    >
      <BorderLayout>
        <div className="flex flex-col items-center space-y-10 lg:space-y-0 space-x-0 lg:space-x-20 lg:flex-row">
          <div className="flex flex-col items-center ">
            <Image src="/ProcessFarming.png" width={1145} height={651} layout={'intrinsic'} alt="Process farming example"/>
          </div>
        </div>
      </BorderLayout>
    </SectionWithTitlesLayout>
  );
}
export default Process;