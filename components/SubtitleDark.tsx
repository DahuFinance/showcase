interface Props {
    title: string;
}

export const SubtitleDark = (props: Props) => {
    return (
        <h2 className="px-8 pb-2 md:pb-8 text-xl md:text-4xl md:text-3xl font-bold text-purple tracking-wide text-center">{props.title}</h2>
    )
}