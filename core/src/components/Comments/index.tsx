import * as React from 'react'
import { CommentItem, CommentItemProps } from './CommentItem'
import { EditorProps } from '../Editor'
import Element, { ElProps } from '../Elements'
import { PaginationProps } from './Pagination'

interface CommentsConfigs {
  thread?: boolean
  maxDisplay?: number
  typeDisplay?: 'infinity' | 'pagination'
}

interface ComponentsType {
  Item?: React.ReactNode
  Pagination?: React.ReactNode
}

interface CommentsProps {
  data?: Array<CommentItemProps>
  configs?: CommentsConfigs
  components?: ComponentsType
  el_props?: ElProps
}

export const Comments: React.VoidFunctionComponent<CommentsProps> = React.memo(
  ({ data, el_props, configs, components }) => {
    return (
      <Element el_props={el_props}>
        <>
          {data?.map(item => {
            return <CommentItem {...item} />
          })}
        </>
      </Element>
    )
  }
)
