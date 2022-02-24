import {ButtonDark} from '../atoms/ButtonDark'
import Link from 'next/link'
import InformationIcon from "../icons/InformationIcon";
import HomeIcon from '../icons/HomeIcon';
import SoonIcon from "../icons/SoonIcon";
import {useRouter} from 'next/router';
import Image from "next/image";

const Header = () => {

  const router = useRouter();

  return (
    <div className='fixed sm:sticky bottom-0 sm:bottom-auto sm:top-0 flex z-10 justify-between items-center  w-full backdrop-blur bg-darkBlue bg-opacity-60'>
      <div className='hidden sm:block ml-10 justify-start items-center'>
        <Image src="/dahufinance-ico.png" width={30} height={30} layout={'intrinsic'} alt="Allocation"/>
      </div>
      <div className='hidden sm:block justify-end'>
        <div className="hidden sm:flex items-center space-x-12 p-4">
          <Link href="/">
            <div
              className={`
            cursor-pointer text-white text-xl active:text-purple hover:border-b-2 transition-all ease-in-out
            ${router.pathname === '/' ? '' : 'opacity-50'}
            `}>
              Home
            </div>
          </Link>
          <Link href="/info">
            <div
              className={`
            cursor-pointer text-white text-xl active:text-purple hover:border-b-2 transition-all ease-in-out
            ${router.pathname === '/info' ? '' : 'opacity-50'}
            `}>
              Info
            </div>
          </Link>
          <a href='#'>
            <ButtonDark>
              Coming soon
            </ButtonDark>
          </a>
        </div>
      </div>
      <div
        className='w-full grid grid-cols-3 justify-items-stretch gap-2 items-center sm:hidden  inset-x-0 h-14'>
        <Link href="/">
          <div className={`
          flex space-y-1 flex-col items-center text-xs justify-center
          ${router.pathname === '/' ? '' : 'opacity-50'}
          `}>
            <HomeIcon/>
            <span>
              Home
            </span>
          </div>
        </Link>
        <Link href="/info">
          <div className={`
          flex space-y-1 flex-col items-center text-xs justify-center
          ${router.pathname === '/info' ? '' : 'opacity-50'}
          `}>
            <InformationIcon/>
            <span>
              Info
            </span>
          </div>
        </Link>
        <a href='#'>
          <div className='flex space-y-1 flex-col items-center text-xs justify-center opacity-50'>
            <SoonIcon/>
            <span>
              Soon...
            </span>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Header;