import {BigTitleColor, Title} from "../atoms/Titles/Title";
import {SubTitle, SubTitleColor} from "../atoms/Titles/SubTitle";
import {ReactNode} from "react";

interface Props {
  title: string;
  id?: string;
  titleColor?: BigTitleColor;

  subtitle?: string;
  subTitleColor?: SubTitleColor;

  justify?: 'start' | 'end' | 'center';

  children: ReactNode;
  disabledFullScreen?: boolean
  bodyClassName?: string
  className?: string;
}


export function SectionWithTitlesLayout(props: Props) {
  const {
    id,
    title,
    titleColor,

    subtitle,
    subTitleColor,

    justify = 'center',

    children,
    disabledFullScreen = false,
    bodyClassName = '',
    className
  } = props;

  return (
    <div id={id} className={`${className}`}>
      <div
        className={`p-4 flex flex-col justify-${justify} h-full ${disabledFullScreen ? '' : 'min-h-screen'}  ` + bodyClassName}>
        <div className='text-center pb-10'>
          {typeof title === 'string' ? <Title color={titleColor} title={title}/> : title}
          {
            subtitle && (
              <>
                {typeof subtitle === 'string' ?
                  <SubTitle color={subTitleColor} title={subtitle}/> :
                  subtitle
                }
              </>
            )
          }
        </div>

        <div className='flex flex-col items-center'>
          {children}
        </div>
      </div>
    </div>
  )
}