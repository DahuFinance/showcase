const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div
      className="w-full p-4 pb-20 sm:pb-4 flex flex-col md:flex-row justify-center md:justify-around items-center space-y-5 md:space-y-0 md:space-x-5 bg-darkBlue text-white">
      <div className={'flex space-x-5 md:space-x-10'}>
        <a rel="noopener" target='_blank' href='https://medium.com/@DahuFinance' className={'flex space-x-2 items-center self-start'}>
          <img src={"/socials/medium.svg"} alt={"icone-twitter"}
               className={"h-10 w-10 shadow-halo transition hover:scale-105 ease-in-out"}/>
        </a>
        <a rel="noopener" target='_blank' href='https://twitter.com/dahufinance' className={'flex space-x-2 items-center self-start'}>
          <img src={"/socials/twitter.svg"} alt={"icone-twitter"}
               className={"h-10 w-10 shadow-halo transition hover:scale-105 ease-in-out"}/>
        </a>
        <a rel="noopener" target='_blank' href='https://t.me/dahufinance' className={'flex space-x-2 items-center self-start'}>
          <img src={"/socials/telegram.svg"} alt={"icone-twitter"}
               className={"h-10 w-10 shadow-halo transition hover:scale-105 ease-in-out"}/>
        </a>
        <a rel="noopener" target='_blank' href='https://github.com/dahufinance' className={'flex space-x-2 items-center self-start'}>
          <img src={"/socials/github.svg"} alt={"icone-githut"}
               className={"h-10 w-10 shadow-halo transition hover:scale-105 ease-in-out"}/>
        </a>
      </div>
      <div>
        Copyright © 2021-{currentYear === 2021 ? '2022' : currentYear} Dahu finance
      </div>
      <div className='hidden xl:block'>
        Developped by Dahu finance
      </div>
    </div>
  );
}
export default Footer;