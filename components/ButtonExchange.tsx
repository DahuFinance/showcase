interface Props {
    title: string;
}

export const ButtonExchange = (props: Props) => {
    return (
        <h1 className="px-8 md:py-2 rounded-full bg-purple font-semibold tracking-widest text-white text-center transition ease-in-out duration-200 hover:scale-110"> {props.title}</h1>
    )
}