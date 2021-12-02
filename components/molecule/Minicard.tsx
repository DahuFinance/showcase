import {Span} from "next/dist/trace";

const Minicard =() => {
    return(
        <div className="flex flex-col md:flex-col lg:flex-row items-center m-auto px-6">

            <div className="shadow-halo px-4 py-6 m-4 lg:mr-4 lg:my-4 flex flex-row bg-darkBlue w-2/3 lg:w-1/3 color-white text-white rounded-xl justify-around ">
                    <img src="/token-icon.svg" alt="token" className="h-14 text-center align-middle justify-self-center mr-2" />
                <div className="info justify-self-center ">
                    <div className="text-xl md:text-2xl font-semibold text-center "> 360 000 000</div>
                    <div className="text-ml font-semibold text-purple text-center">Total supply</div>
                </div>
            </div>
            <div className="shadow-halo px-4 py-6 m-4 flex flex-row bg-darkBlue w-2/3 lg:w-1/3 color-white text-white rounded-xl  justify-around ">
                    <img src="/network.svg" alt="token" className="h-14 text-center align-middle justify-self-center mr-2" />
                <div className="info justify-self-center ">
                    <div className="text-xl md:text-2xl font-semibold text-center "> Avalanche</div>
                    <div className="text-ml font-semibold text-purple text-center">Network</div>
                </div>
            </div>
            <div className="shadow-halo px-4 py-6 m-4 flex flex-row bg-darkBlue w-2/3 lg:w-1/3 color-white text-white rounded-xl  justify-around ">
                <img src="/wallet.svg" alt="token" className="h-14 text-center align-middle justify-self-center mr-2" />
                <div className="info justify-self-center ">
                    <div className="text-xl md:text-2xl font-semibold text-center "> Metamask + 10...</div>
                    <div className="text-ml font-semibold text-purple text-center">Wallets supported</div>
                </div>
            </div>

        </div>
    );
}

export default Minicard;