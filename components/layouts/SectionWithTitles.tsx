import {Title, BigTitleColor} from "../Titles/Title";
import {SubTitle, SubTitleColor} from "../Titles/SubTitle";

interface Props {
    title: string;
    titleColor?: BigTitleColor;

    subtitle?: string;
    subTitleColor?: SubTitleColor;

    children: any;
    disabledFullScreen?:boolean
    bodyClassName?: string
    className?: string;
}


export function SectionWithTitles(props: Props) {
    const {
        title,
        titleColor,

        subtitle,
        subTitleColor,

        children,
        disabledFullScreen = false,
        bodyClassName = '',
        className
    } = props;

    return (
        <div className={className + ''}>
            <div className={`p-4 flex flex-col justify-center items-center h-full ${disabledFullScreen ? '' : 'min-h-screen'}  ` + bodyClassName }>
                <div className='text-center pb-10'>
                    { typeof title === 'string' ? <Title color={titleColor} title={title}/> : title}
                    {
                        subtitle && (
                            <>
                                { typeof subtitle === 'string' ?
                                    <SubTitle color={subTitleColor} title={subtitle}/> :
                                    subtitle
                                }
                            </>
                        )
                    }
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}