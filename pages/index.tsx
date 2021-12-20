import Head from 'next/head'
import Nav from '../components/Header'
import Footer from '../components/Footer'

import HeaderCards from "../components/organique/HeaderCards";
import Vision from "../components/organique/Vision";
import Features from "../components/organique/Features";
import Token from "../components/sections/Token";
import Team from "../components/organique/Team";
import Minicard from "../components/molecule/Minicard";

export default function Home() {
    return (
        <div
            className="flex flex-col min-h-screen bg-gradient-to-br from-darkBlue to-purple lg:from-darkBlue lg:via-purpledarky lg:to-darkBlue">
            <Head>
                <title>Dahu Finance | Home</title>
                <meta name="description" content="Dahu Finance 🐐 is an all-in-one solution to provide you innovative services around decentralized finance on $AVAX "/>
                <meta name="keywords" content="DahuFinance, Dahu, Defi, AMM, DEX, Avax, Avalanche, Swap, Farm, Stake, Compound"/>
                <meta name="author" content="DahuFinance"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <Nav/>
            <main>
                <HeaderCards/>
                <Minicard/>
                <Vision/>
                <Features/>
                <Token/>
                <Team/>
            </main>
            <Footer/>
        </div>
    )
}

