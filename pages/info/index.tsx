import Head from "next/head";
import Nav from "../../components/Navbar";
import Token from "../../components/sections/Token";
import Footer from "../../components/Footer";
import Charity from "../../components/sections/Charity";
import FeaturesInfo from "../../components/sections/FeaturesInfo";
import OurProgram from "../../components/molecule/OurProgram/OurProgram";
import {SectionWithTitles} from "../../components/layouts/SectionWithTitles";

export default function Index () {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple"
        >
            <Head>
                <title>Dahu Finance | Info</title>
            </Head>
            <Nav/>
            <main>
                <SectionWithTitles
                    title={'Our Program'}
                    bodyClassName={'bg-bg2 bg-cover'}
                >
                    <OurProgram/>
                </SectionWithTitles>


                <FeaturesInfo/>
                <Charity/>
                <Token/>
            </main>
            <Footer/>
        </div>
    )
}