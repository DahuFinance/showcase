import React from "react";
import ProgramSection from "./components/ProgramSection";
import {SectionWithTitles} from "../../layouts/SectionWithTitles";
import LayoutBorder from "../../layouts/LayoutBorder";

export default class OurProgram extends React.Component<any, any> {

    programs = [
        {
            year: 2022,
            quarter: 1,
            title: 'Bonds',
            description: 'Sell assets to the DahuFinance protocol in exchange for Dahu at a discounted rate'
        },
        {
            year: null,
            quarter: 2,
            title: 'Lending borrowing',
            description: 'Securely lend and borrow tokens with one click'
        },
        {
            year: null,
            quarter: '?',
            title: 'Stable pools',
            description: 'Use a stable pool with low fees and low slippage to exchange your stablecoins'
        },
        {
            year: null,
            quarter: '?',
            title: 'Governance',
            description: 'Vote or make a proposal with your xDahu to control the DahuFinance protocol '
        }
    ]

    render() {
        return (
            <SectionWithTitles
                title={'Our Program'}
                subtitle={"Check the program !"}
                bodyClassName={'md:bg-bg1 bg-cover'}
            >
                <LayoutBorder>
                    <div className='px-4 lg:px-20 xl:px-52 2xl:px-72 text-justify tracking-wide leading-8'>
                        Dahu is proud to present its full program for the upcoming months.
                        Of course, we planned this program by taking into consideration our workforce.
                        We are however on the lookout for new and motivated people to join the team and contribute
                        to the faster growth of our program! Do not hesitate to take a look at our Github to follow our
                        progress!
                    </div>
                </LayoutBorder>

                <div className={"px-4 md:px-20 lg:px-30 xl:px-52 py-10 bg-real-purple-superdark"}>
                    {this.programs.map((program, i) => {
                        return (
                            <ProgramSection
                                key={'program-' + i}
                                program={program}
                                first={i === 0}
                                last={i === this.programs.length - 1}
                            />
                        )
                    })}
                </div>
            </SectionWithTitles>
        );
    }
}