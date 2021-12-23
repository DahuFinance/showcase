interface Props {
  title: string;
}

export const TitleSmallWhite = (props: Props) => {
  return (
    <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-white">{props.title}</h1>
  )
}