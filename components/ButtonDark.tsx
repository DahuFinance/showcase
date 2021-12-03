interface Props {
    title: string;
}

export const ButtonDark = (props: Props) => {
    return (
        <h1 className=" disabled:opacity-50 px-8 py-2 md:py-2 rounded-full bg-darkBlue font-semibold tracking-widest text-white text-center transition ease-in-out duration-200 hover:scale-110 shadow-halo" > {props.title}</h1>
    )
}