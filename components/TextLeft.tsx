interface Props {
    message: string;
}

export const TextLeft = (props: Props) => {
    return (

        <div className="my-4 text-white text-center md:text-left text-lg w-2/3 m-auto leading-8">{props.message}</div>
    )
}