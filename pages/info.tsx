import Head from "next/head";
import Nav from "../components/Navbar";
import Token from "../components/organique/Token";
import Footer from "../components/Footer";
import Charity from "../components/organique/Charity";
import FeaturesInfo from "../components/organique/FeaturesInfo";
import OurProgram from "../components/molecule/OurProgram/OurProgram";

export default function Info () {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple">
            <Head>
                <title>Dahu Finance | Info</title>
            </Head>
            <Nav/>
            <main>
                <OurProgram/>
                <FeaturesInfo/>
                <Charity/>
                <Token/>
            </main>

            <Footer/>
        </div>
    )
}