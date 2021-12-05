import React from "react";
import ProgramSection from "./components/ProgramSection";

export default class OurProgram extends React.Component<any, any> {

    programs = [
        {
            year: 2021,
            quarter: 2,
            title: 'Launch AMM,  Yield farming, auto compouding',
            description: 'Lorem Ipsum is simply'
        },
        {
            year: null,
            quarter: 3,
            title: 'NFT marketplace',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has'
        },
        {
            year: null,
            quarter: 4,
            title: 'Governance , donner le droit de vote a Léo hubert il a perdu sa carte électorale et est frustré de ne pas pouvoir voté ',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        },
        {
            year: 2022,
            quarter: 1,
            title: 'Snowflake pool, lottery',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        },
        {
            year: null,
            quarter: 1,
            title: 'ITO /  DAO',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
        }
    ]

    render() {
        return (
            <div className={"px-4 md:px-20 lg:px-30 xl:px-52 py-10 bg-real-purple-superdark"}>
                <div className="flex flex-col">
                    {this.programs.map((program, i) => {
                        return (
                            <ProgramSection
                                key={'program-' + i}
                                program={program}
                                first={i === 0}
                                last={i === this.programs.length - 1}
                            />
                        )
                    })
                    }
                </div>
            </div>
        );
    }
}