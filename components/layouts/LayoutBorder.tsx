export default function LayoutBorder(props: any) {

    const {children} = props

    return (
        <div className={'px-4 md:px-40 w-full'}>
            {children}
        </div>
    )
}