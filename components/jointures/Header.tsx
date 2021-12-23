import {ButtonDark} from '../atoms/ButtonDark'
import Link from 'next/link'
import QuestionIcon from "../icons/QuestionIcon";
import InformationIcon from "../icons/InformationIcon";
import HomeIcon from '../icons/HomeIcon';
import SoonIcon from "../icons/SoonIcon";

const Header = () => {
  return (
    <div className='flex w-full justify-end'>
      <div className="hidden sm:flex items-center space-x-12 p-4">
        <Link href="/">
          <div
            className="cursor-pointer text-white text-xl active:text-purple hover:border-b-2 transition-all ease-in-out">
            Home
          </div>
        </Link>
        <Link href="/info">
          <div
            className="cursor-pointer text-white text-xl active:text-purple hover:border-b-2 transition-all ease-in-out">
            Info
          </div>
        </Link>
        <Link href="/faq">
          <div
            className="cursor-pointer text-white text-xl active:text-purple hover:border-b-2 transition-all ease-in-out">
            FAQ
          </div>
        </Link>
        <a href='#'>
          <ButtonDark>
            Coming soon
          </ButtonDark>
        </a>
      </div>
      <div
        className='fixed z-20 bg-darkPurple bg-opacity-80 backdrop-filter backdrop-blur grid grid-cols-4 justify-items-stretch gap-2 items-center sm:hidden bottom-0 inset-x-0 h-14'>
        <Link href="/">
          <div className='flex space-y-1 flex-col items-center text-xs justify-center'>
            <HomeIcon/>
            <span>
              Home
            </span>
          </div>
        </Link>
        <Link href="/info">
          <div className='flex space-y-1 flex-col items-center text-xs justify-center'>
            <InformationIcon/>
            <span>
              Info
            </span>
          </div>
        </Link>
        <Link href="/faq">
          <div className='flex space-y-1 flex-col items-center text-xs justify-center'>
            <QuestionIcon/>
            <span>
              FAQ
            </span>
          </div>
        </Link>
        <a href='#'>
          <div className='flex space-y-1 flex-col items-center text-xs justify-center'>
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