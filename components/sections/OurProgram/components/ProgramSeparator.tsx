import React from "react";

export default class ProgramSeparator extends React.Component<any, any> {
  render() {
    return (
      <div className="hidden md:grid grid-cols-12 items-center">
        <div className="col-span-1"/>
        <div className="hidden md:flex justify-center md:col-span-5 lg:col-span-3 ">
          <div className="md:w-2/3"/>
          <div className="md:w-1/3 flex justify-center">
            <div className="border border-white h-24 w-0"/>
          </div>
        </div>
      </div>
    );
  }
}