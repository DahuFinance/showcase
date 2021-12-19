import {ButtonDark} from './ButtonDark'
import Link from 'next/Link'

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
                <a href='#'>
                    <ButtonDark>
                        Coming soon
                    </ButtonDark>
                </a>
            </div>
            <div
                className='fixed z-20 bg-darkPurple bg-opacity-80 backdrop-filter backdrop-blur grid grid-cols-3 gap-2 items-center sm:hidden bottom-0 inset-x-0 h-14'>
                <Link href="/">
                    <div className='flex space-y-1 flex-col items-center text-xs justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path
                                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
                        </svg>
                        <span>
                          Home
                      </span>
                    </div>
                </Link>
                <Link  href="/info">
                    <div className='flex space-y-1 flex-col items-center text-xs justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span>
                          Info
                      </span>
                    </div>
                </Link>
                <a href='#'>
                    <div className='flex space-y-1 flex-col items-center text-xs justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20"
                             fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M3 3a1 1 0 011 1v12a1 1 0 11-2 0V4a1 1 0 011-1zm7.707 3.293a1 1 0 010 1.414L9.414 9H17a1 1 0 110 2H9.414l1.293 1.293a1 1 0 01-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0z"
                                  clipRule="evenodd"/>
                        </svg>
                        <span>
                          Coming Soon
                      </span>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default Header;