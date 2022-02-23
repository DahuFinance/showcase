import {SectionWithTitlesLayout} from "../layouts/SectionWithTitlesLayout";
import BorderLayout from "../layouts/BorderLayout";
import {Title} from "../atoms/Titles/Title";
import Image from 'next/image'

const Allocation = () => {
  return (
    <SectionWithTitlesLayout
      title={'Tokenomics'}
      titleColor={'purple'}
      bodyClassName={'md:bg-bg1 bg-cover'}
    >
      <BorderLayout>
        <div
          className="grid grid-cols-none lg:grid-cols-2 grid-rows-1 lg:grid-rows-none place-content-center place-items-center lg:gap-5">
          <Image src="/tokenomics.png" width={1065} height={607} layout={'intrinsic'} alt="Allocation"/>

          <div>
            <Title size='extra-small' title={" Dahu Finance plans its token distribution as follows:"}/>
            <div className="font-medium tracking-wide text-gray-300 leading-8 text-lg ">
              <ul className='list-disc mt-5 space-y-5'>
                <li>
                  <b>15%</b> for the team. We want to grow fast, that's why this part of our supply
                  will go to the salaries of the team.
                </li>
                <li>
                  Having good advisors is important. We reserve  <b>1%</b>  for them.
                </li>
                <li>
                  The  <b>4%</b>  for cash flow will go towards all marketing and security expenses.
                </li>
                <li>
                  We offer a <b>3%</b> airdrop when the platform is launched. The conditions have been developed on medium.
                  Eligible are: Joe's Holders from 5Joe and delegators / validators of the network. The airdrop is variable depending on the number of tokens you have and the length of time you have locked them up.
                </li>
                <li>
                  To finance the rapid evolution of our platform and audit our code before launch we allocate <b>4.5%</b>  for a private sale and  <b>5.5%</b>  for a public sale.
                </li>
                <li>
                  Regarding the 67% of tokens planned for liquidity mining and bonds,
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