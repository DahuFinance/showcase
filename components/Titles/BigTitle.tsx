

export type BigTitleColor = 'purple' | 'skyBlue';

interface Props {
    title: string;
    color?: BigTitleColor
}

export const BigTitle = (props: Props) => {
    const {
        title,
        color = 'skyBlue'
    } = props;

    return (
        <h1 className={`text-4xl md:text-7xl p-2 font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-${color} to-white`}>
            {title}
        </h1>
    )
}