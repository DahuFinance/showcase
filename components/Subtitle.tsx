interface Props {
    title: string;
}

export const Subtitle = (props: Props) => {
    return (
        <h2 className="px-8 pb-12 md:pb-12  text-xl md:text-4xl md:text-3xl font-bold text-darkBlue tracking-wide text-center">{props.title}</h2>
    )
}