
export type SubTitleColor = 'darkBlue' | 'purple';

interface Props {
    title: string;
    color?: SubTitleColor;
}

export const SubTitle = (props: Props) => {
    const {
        title,
        color = 'purple'
    } = props;

    return (
        <h2 className={`text-xl md:text-5xl md:text-3xl font-bold text-${color} tracking-wide text-center`}>
            {title}
        </h2>
    )
}