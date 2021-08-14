import * as React from 'react'
import Element from '../../Elements'

export interface CommentItemProps {
  avatar?: string
  author?: string
  date?: string
  contents?: string | React.ReactNode
  [key: string]: any
}

export const CommentItem: React.VoidFunctionComponent<CommentItemProps> = ({
  contents,
  el_props
}) => {
  return (
    <Element>
      <span>{contents}</span>
    </Element>
  )
}
