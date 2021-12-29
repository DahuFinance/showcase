export const InfoHeader = () => {
  return (
    <div className={"flex flex-row justify-center lg:pb-20 "}>
      <img src={"/dahufinance.svg"} alt={"Dahu finance"} className={"hidden md:block w-3/6 sm:w-3/6 md:w-4/6"}/>
      <img src={"/dahufinance-mob.png"} alt={"Dahu finance"} className={"block md:hidden w-3/6 sm:w-3/6 md:w-4/6"}/>
    </div>
  );
}
