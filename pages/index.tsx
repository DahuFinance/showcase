import HomeHeader from "../components/sections/HomeHeader";
import Vision from "../components/sections/Vision";
import FeaturesHome from "../components/sections/FeaturesHome";
import Process from "../components/sections/Process";
import Team from "../components/sections/Team";
import Minicard from "../components/sections/Minicard";
import AppLayout from "../components/layouts/AppLayout";

export default function Home() {
  return (
    <AppLayout
      title='DahuFinance | Home'
      meta={
        <>
          {/* Open Graph / Facebook */}
          <meta property="og:type" content="website"/>
          <meta property="og:url" content="https://dahu.finance/"/>
          <meta property="og:title" content="DahuFinance | Home"/>
          <meta property="og:description"
                content="Dahu Finance 🐐 is an all-in-one solution to provide you innovative services around decentralized finance on $AVAX "/>
          <meta property="og:image" content="https://dahu.finance/previews/home.jpg"/>

          {/* Twitter */}
          <meta property="twitter:card" content="summary_large_image"/>
          <meta property="twitter:url" content="https://dahu.finance/"/>
          <meta property="twitter:title" content="DahuFinance | Home"/>
          <meta property="twitter:description"
                content="Dahu Finance 🐐 is an all-in-one solution to provide you innovative services around decentralized finance on $AVAX "/>
          <meta property="twitter:image" content="https://dahu.finance/previews/home.jpg"/>
        </>
      }
    >
      <HomeHeader/>
      <Minicard/>
      <Vision/>
      <FeaturesHome/>
      <Process/>
      <Team/>
    </AppLayout>
  )
}

