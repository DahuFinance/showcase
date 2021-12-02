interface Props {
    title: string;
}

export const TitleSmall = (props: Props) => {
    return (
        <h1 className="text-center md:text-center px-4 py-4 text-2xl md:text-6xl font-bold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-skyBlue to-white">{props.title}</h1>
    )
}