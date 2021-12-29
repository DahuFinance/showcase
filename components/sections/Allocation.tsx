import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";
import BorderLayout from "../layouts/BorderLayout";
import {Title} from "../atoms/Titles/Title";
import Image from 'next/image'

const Allocation = () => {
  return (
    <SectionWithTitlesLayout
      title={'Allocation'}
      titleColor={'purple'}
      bodyClassName={'md:bg-bg1 bg-cover'}
    >
      <BorderLayout>
        <div
          className="grid grid-cols-none lg:grid-cols-2 grid-rows-1 lg:grid-rows-none place-content-center place-items-center lg:gap-5">
          <Image src="/allocation.png" width={600} height={368} layout={'intrinsic'} alt="Allocation"/>

          <div>
            <Title size='extra-small' title={" Dahu Finance plans its token distribution as follows:"}/>
            <div className="font-medium tracking-wide text-gray-300 leading-8 text-lg ">
              <ul className='list-disc mt-5 space-y-5'>
                <li>
                  15% for the foundation in which the salaries of our full-time team on the project are included, but
                  also the salaries of our contributors, such as translators and moderators.
                  Also planned for is the budget allocated to upcoming security audits.
                </li>
                <li>
                  To launch Dahu Finance, we are planning a 5% airdrop budget over
                  a one-month period from launch.
                  Unrecovered airdrops will be sent back to the community through a
                  fund and governed by the community.
                </li>
                <li>
                  Regarding the 80% of tokens planned for liquidity mining and bonds,
                  we address them to all of you, our future contributors!
                </li>
              </ul>
            </div>
          </div>

        </div>
      </BorderLayout>
    </SectionWithTitlesLayout>
  );
}
export default Allocation;