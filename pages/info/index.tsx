import Charity from "../../components/sections/Charity";
import FeaturesInfo from "../../components/sections/FeaturesInfo";
import OurProgram from "../../components/sections/OurProgram/OurProgram";
import TokensInfo from "../../components/sections/TokensInfo";
import {InfoHeader} from "../../components/sections/InfoHeader";
import Allocation from "../../components/sections/Allocation";
import AppLayout from "../../components/layouts/AppLayout";
import FAQ from "../../components/sections/FAQ";
import Vesting from "../../components/sections/Vesting";

export default function Index() {
  return (
    <AppLayout background={'dark'} title='DahuFinance | Info'>
      <InfoHeader/>
      <OurProgram/>
      <FeaturesInfo/>
      <Charity/>
      <TokensInfo/>
      <Allocation/>
        <Vesting/>
      <FAQ/>
    </AppLayout>
  )
}