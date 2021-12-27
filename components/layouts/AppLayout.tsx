import Head from 'next/head'
import {ReactNode} from "react";
import Header from "../jointures/Header";
import Footer from "../jointures/Footer";
import SEO from "../SEO";

interface Props {
  title: string;
  children: ReactNode;

  background?: 'purple' | 'dark';
  meta?: ReactNode;
}

export default function AppLayout(
  {
    title,
    meta,
    background = 'purple',
    children
  }: Props
) {

  const backgroundClassName = {
    'purple': 'bg-gradient-to-br from-darkBlue to-purple lg:from-darkBlue lg:via-purpledarky lg:to-darkBlue',
    'dark': 'bg-gradient-to-r from-darkPurple via-darkBlue to-darkPurple'
  }[background]

  return (
    <div
      className={`flex flex-col min-h-screen ${backgroundClassName}`}>
      <Head>

        <title>{title}</title>

        {/* Primary */}
        <meta name="description"
              content="Dahu Finance 🐐 is an all-in-one solution to provide you innovative services around decentralized finance on $AVAX"/>
        <meta name="keywords"
              content="Dahu, DAHU, DahuFinance, Dahu Finance, Finance, Defi, AMM, DEX, Avax, AVAX, Avalanche, Swap, Farm, Stake, Compound"/>
        <meta name="author" content="DahuFinance"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

        {meta}
      </Head>

      <Header/>
      <main>
        <SEO/>
        {children}
      </main>
      <Footer/>
    </div>
  )
}