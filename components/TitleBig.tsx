interface Props {
    title: string;
}

export const TitleBig = (props: Props) => {
    return (
        <h1 className="px-8 py-4 md:pt-12 md:pb-6 text-4xl md:text-7xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-purple to-white text-center"> {props.title}</h1>
    )
}