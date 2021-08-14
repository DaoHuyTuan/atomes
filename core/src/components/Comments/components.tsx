import { CommentItem as Item, CommentItemProps } from './CommentItem'
import { Pagination, PaginationProps } from './Pagination'

export interface CommentsTypes {
  Item: (props: CommentItemProps) => JSX.Element
  Pagination: (props: PaginationProps) => JSX.Element
}
export const components: CommentsTypes = {
  Item: (props: CommentItemProps) => <Item {...props} />,
  Pagination: (props: PaginationProps) => <Pagination {...props} />
}
