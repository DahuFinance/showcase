import Head from 'next/head'
import Nav from '../components/Navbar'
import Footer from '../components/Footer'
import {TitleBig} from '../components/TitleBig'
import {TitleSmall} from '../components/TitleSmall'
import {TitleSmallWhite} from '../components/TitleSmallWhite'
import {TextLeft} from '../components/TextLeft'
import LayoutColonneTwo from "../components/LayoutColonneTwo";

import HeaderCards from "../components/organique/HeaderCards";
import Minicard from "../components/molecule/Minicard";
import Vision from "../components/organique/Vision";
import Features from "../components/organique/Features";
import Token from "../components/organique/Token";
import Team from "../components/organique/Team";


export default function Home() {
    return (
        <div
            className="flex flex-col min-h-screen py-2 bg-gradient-to-br from-darkBlue via-purpledarky to-darkBlue">
            <Head>
                <title>Dahu Finance | Home</title>
            </Head>
            <Nav/>
            <main>
                <HeaderCards/>
                <Vision/>
                <Features/>
                <Token/>
                <Team/>
            </main>
            <Footer/>
        </div>
    )
}

