import React from "react";

interface Props {
    program: any;
    first: boolean;
    last: boolean;
}

export default class ProgramSection extends React.Component<Props, any> {

    private showTop(hasYear: boolean)
    {
        const {first} = this.props;

        if (!first && hasYear) {
            return (
                <div className="block md:hidden md:row-span-1">

                </div>
            )
        } else {
            return null
        }
    }

    render() {
        const {
            program,
            first,
            last
        } = this.props

        return (
            <div
                className={
                    "grid grid-cols-none md:grid-cols-12 md:grid-rows-none items-center md:pt-0 " +
                    (program.year ?  (first ? "grid-rows-3" : "grid-rows-4") : 'grid-rows-2')
                }
            >

                {this.showTop(program.year)}

                <div
                    className={
                        "row-span-1 md:row-span-none md:col-span-1 md:flex mt-auto mb-5 md:mt-0 md:mb-0 justify-center " +
                        (program.year ? 'flex' : 'hidden') +
                        (first ? ' pb-0 md:pb-40 lg:pb-20' : '') +
                        (last ? ' pt-0 md:pt-40 lg:pt-20' : '')
                    }
                >
                    <span className="text-white font-bold text-4xl md:text-2xl">
                        {program.year}
                    </span>
                </div>

                <div className="md:col-span-3  flex items-center">

                    {program.year ?
                        <div
                            className={
                                "w-auto md:w-2/3 " +
                                (first ? ' mb-0 md:mb-40 lg:mb-20' : '') +
                                (last ? ' mt-0 md:mt-40 lg:mt-20 ' : '')
                            }
                        >
                            <div className="hidden md:block transform mx-2 md:mx-0 lg:translate-x-3  h-0 border border-white"/>
                        </div>
                        :
                        <div className="w-auto md:w-2/3"/>
                    }

                    <div className="flex flex-col justify-center items-center w-full md:w-1/3 h-full">

                        {first ? null : <div className="hidden md:block border border-white h-40 lg:h-20 w-0"/>}

                        <div className="flex flex-col items-center justify-center">
                            <div
                                className="flex items-center justify-center bg-white w-20 h-20 font-bold rounded-full text-real-purple-superdark text-3xl">
                                Q{program.quarter}
                            </div>
                        </div>

                        {last ? null : <div className="hidden md:block border border-white h-40 lg:h-20 w-0"/>}
                    </div>
                </div>

                <div
                    className={"md:h-56 lg:h-40 md:col-span-8 md:pl-10 mt-1 md:mt-0"}>
                    <div className={
                        "flex h-full" +
                        (first ? ' items-start' : '') +
                        (last ? ' items-end' : '')
                    }>
                        <div className="flex flex-col text-center items-start justify-center md:text-left">
                            <span className="text-white w-full font-semibold">
                                {program.title}
                            </span>
                            <span className="text-white mt-2">
                                {program.description}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}