interface Props {
    title: string;
}

export const SubTitleText = (props: Props) => {
    return (
        <h1 className="text-2xl md:text-5xl font-bold tracking-wide text-skyBlue pb-2 m-6 md:m-0 ">{props.title}</h1>
    )
}