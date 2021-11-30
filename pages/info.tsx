import Head from "next/head";
import Nav from "../components/Navbar";
import HeaderCards from "../components/organique/HeaderCards";
import Vision from "../components/organique/Vision";
import Features from "../components/organique/Features";
import Token from "../components/organique/Token";
import Team from "../components/organique/Team";
import Footer from "../components/Footer";
import Charity from "../components/organique/Charity";
import FeaturesInfo from "../components/organique/FeaturesInfo";

export default function Info () {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen py-2 bg-gradient-to-br from-darkPurple to-purple">
            <Head>

            </Head>
            <Nav/>
            <main>
                <FeaturesInfo/>
                <Charity/>
                <Token/>
            </main>

            <Footer/>
        </div>
    )
}