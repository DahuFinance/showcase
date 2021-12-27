import {ReactNode} from "react";

interface Props {
  children: ReactNode;
  className?: string
}

export const ButtonDark = (props: Props) => {
  const {
    className = '',
    children
  } = props;

  return (
    <button className={`relative disabled:opacity-50 px-8 py-2 md:py-2 rounded-full bg-darkBlue font-semibold
        tracking-widest text-white text-center transition ease-in-out duration-200 hover:scale-110 shadow-halo
        border-2 border-purple border-opacity-50 ${className}`}>
      {children}
    </button>
  )
}