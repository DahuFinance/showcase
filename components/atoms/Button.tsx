interface Props {
  title: string;
}

export const Button = (props: Props) => {
  return (
    <button
      className="px-8 py-2 md:py-2 rounded-full bg-purple font-semibold tracking-widest text-white text-center transition ease-in-out duration-200 hover:scale-110 shadow-halo">
      {props.title}
    </button>
  )
}