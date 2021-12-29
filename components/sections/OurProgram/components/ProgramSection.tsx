import React from "react";

interface Props {
  program: any;
  first: boolean;
  last: boolean;
}

export default class ProgramSection extends React.Component<Props, any> {

  render() {
    const {
      program,
      first,
      last
    } = this.props

    return (
      <div
        className={
          "grid grid-cols-none md:grid-cols-12 md:grid-rows-none items-center md:pt-0 "
        }
      >

        {this.showTop(program.year)}

        <span className="text-clearPurple font-bold text-4xl md:text-2xl text-center  ">
                    {program.year}
                </span>

        <div className="md:col-span-3 flex flex-col md:flex-row justify-center items-center h-full">

          {program.year ?
            <div className="flex-1 hidden md:block border border-purple"/>
            :
            <div className="flex-1"/>
          }

          <div className="flex flex-col justify-center items-center h-full ">

            {first ? <div className={'flex-1'}/> : <div className="hidden md:block border border-purple flex-1 w-0"/>}

            <div
              className="flex items-center justify-center border-2 border-purple w-20 h-20 font-bold rounded-full text-3xl">
              <span className='text-transparent bg-clip-text bg-gradient-to-br from-purple via-clearPurple to-white'>
                {program.quarter}
              </span>
            </div>

            {last ? <div className={'flex-1'}/> : <div className="hidden md:block border border-purple flex-1 w-0"/>}
          </div>
        </div>

        <div className={"md:col-span-8 min-h-[10rem] px-10 py-4 flex flex-col justify-center"}>
          <span className="text-white  text-lg w-full font-semibold">
            {program.title}
          </span>
          <span className="block text-white leading-8 mt-2">
            {program.description}
          </span>
        </div>
      </div>
    );
  }

  private showTop(hasYear: boolean) {
    const {first} = this.props;

    if (!first && hasYear) {
      return (
        <div className="md:mt-10 md:hidden">

        </div>
      )
    } else {
      return null
    }
  }
}