const Minicard = () => {
    return (
        <div className="flex flex-wrap items-center justify-center whitespace-nowrap flex-col md:flex-row space-y-5 md:space-y-0">
            <div
                className="md:m-5 w-[20rem] shadow-halo h-20 md:h-28 flex items-center flex-row bg-darkBlue text-white rounded-xl justify-around p-4">
                <img src="/minicards/supply.svg" alt="Total supply" className="h-2/3"/>
                <div className="info justify-self-center ">
                    <div className="text-md md:text-2xl font-semibold text-center "> 360 000 000</div>
                    <div className="text-xs md:text-lg font-semibold text-purple text-center">Total supply</div>
                </div>
            </div>
            <div
                className="md:m-5 w-[20rem] shadow-halo h-20 md:h-28 flex items-center flex-row bg-darkBlue text-white rounded-xl justify-around p-4">
                <img src="/minicards/network.svg" alt="Our Network" className="h-2/3"/>
                <div className="info justify-self-center ">
                    <div className="text-md md:text-2xl font-semibold text-center "> Avalanche</div>
                    <div className="text-xs md:text-lg font-semibold text-purple text-center">Network</div>
                </div>
            </div>
            <div
                className="md:m-5 w-[20rem] shadow-halo h-20 md:h-28 flex items-center flex-row bg-darkBlue text-white rounded-xl justify-around p-4">
                <img src="/minicards/wallet.svg" alt="Wallets supported"  className="h-2/3"/>
                <div className="info justify-self-center ">
                    <div className="text-md md:text-2xl font-semibold text-center "> Metamask ...</div>
                    <div className="text-xs md:text-lg font-semibold text-purple text-center">Wallets supported</div>
                </div>
            </div>

        </div>
    );
}

export default Minicard;