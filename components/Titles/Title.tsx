

export type BigTitleColor = 'purple' | 'skyBlue';

interface Props {
    title: string;
    color?: BigTitleColor;
    size?: 'big' | 'small';
    className?: string;
}

export const Title = (props: Props) => {
    const {
        title,
        color = 'skyBlue',
        size = 'big',
        className = ''
    } = props;

    const sizeClassName = size === 'big' ? 'text-4xl md:text-7xl' : 'text-2xl md:text-5xl'

    return (
        <h1 className={`${className} ${sizeClassName} py-3 font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-${color} to-white`}>
            {title}
        </h1>
    )
}