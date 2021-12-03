interface Props {
    title: string;
}

export const TitleSmallWhite = (props: Props) => {
    return (
        <h1 className="text-2xl md:text-4xl font-bold tracking-wide text-white ml-10">{props.title}</h1>
    )
}