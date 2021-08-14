import React from 'react'

export interface ControlProps {
  children?: JSX.Element | ''
}
export const Control: React.VoidFunctionComponent<ControlProps> = ({
  children
}) => {
  return <div className='editor-controll'>{children}</div>
}
