import {Title, BigTitleColor} from "../Titles/Title";
import {SubTitle, SubTitleColor} from "../Titles/SubTitle";

interface Props {
    title: string;
    titleColor?: BigTitleColor;

    subtitle?: string;
    subTitleColor?: SubTitleColor;

    children: any;
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
        bodyClassName,
        className
    } = props;

    return (
        <div className={className + ''}>
            <div className={bodyClassName + ' p-4 min-h-screen flex flex-col justify-center items-center h-full'}>
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