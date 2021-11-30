interface Props {
    title: string;
}

export const TitleSmallWhite = (props: Props) => {
    return (
        <h1 className="text-center text-2xl md:text-4xl font-bold tracking-wide text-white m-4">{props.title}</h1>
    )
}