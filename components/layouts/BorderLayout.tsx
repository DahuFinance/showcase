interface Props {
  className?: string
  children: any
}

export default function BorderLayout(props: Props) {

  const {
    className = '',
    children
  } = props

  return (
    <div className={`px-4 md:px-20 lg:px-40 w-full ${className}`}>
      {children}
    </div>
  )
}