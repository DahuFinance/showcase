import {ButtonExchange} from '../components/ButtonExchange'
import Info from '../pages/info'
import Link from 'next/Link'


const Navbar =() => {
    return(
        <nav className=" md:pr-8 md:py-4 flex self-end items-center space-x-12">
            <Link href="/">
                <a className="text-white text-ml hover:border-b-2 transition-all ease-in-out">Home</a>
            </Link>
                <Link href="/info">
                    <a className="text-white text-ml hover:border-b-2 transition-all ease-in-out">Info</a>
                </Link>
            <ButtonExchange title="Enter App"/>

        </nav>
    );
}
export default Navbar;