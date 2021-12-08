interface Props {
    className?: string
    children: any
}

export default function LayoutBorder(props: Props) {

    const {
        className,
        children
    } = props

    return (
        <div className={className + ' px-4 md:px-40 w-full '}>
            {children}
        </div>
    )
}