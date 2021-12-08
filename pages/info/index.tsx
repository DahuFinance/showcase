import Head from "next/head";
import Nav from "../../components/Navbar";
import Token from "../../components/sections/Token";
import Footer from "../../components/Footer";
import Charity from "../../components/sections/Charity";
import FeaturesInfo from "../../components/sections/FeaturesInfo";
import OurProgram from "../../components/molecule/OurProgram/OurProgram";
import {SectionWithTitles} from "../../components/layouts/SectionWithTitles";
import TokensInfo from "../../components/sections/TokensInfo";
import {HeaderImage} from "../../components/layouts/HeaderImage";
import Allocation from "../../components/organique/Allocation";

export default function Index () {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple"
        >
            <Head>
                <title>Dahu Finance | Info</title>
            </Head>
            <Nav/>
            <main>
                <HeaderImage/>
                <SectionWithTitles
                    title={'Our Program'}
                    subtitle={"Check the program !"}
                    bodyClassName={'bg-bg1 bg-cover'}
                >
                    <OurProgram/>
                </SectionWithTitles>
                <FeaturesInfo/>
                <Charity/>
                <TokensInfo/>
                <Allocation/>
            </main>
            <Footer/>
        </div>
    )
}