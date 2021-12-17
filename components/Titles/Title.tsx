export type BigTitleColor = 'purple' | 'skyBlue';

export type TitleSize = 'big' | 'small' | 'extra-small';

interface Props {
    title: string;
    color?: BigTitleColor;
    size?: TitleSize;
    className?: string;
}

export const Title = (props: Props) => {
    const {
        title,
        color = 'skyBlue',
        size = 'big',
        className = ''
    } = props;

    const sizeClassName = {
        'big': 'text-4xl md:text-7xl',
        'small': 'text-2xl md:text-5xl',
        'extra-small': 'text-xl md:text-2xl'
    }[size]

    return (
        <h1 className={`${className} ${sizeClassName} py-3 font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-br from-${color} to-white`}>
            {title}
        </h1>
    )
}