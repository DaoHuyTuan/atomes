import * as React from 'react'
import Element, { ElProps } from '../../Elements'

export interface PaginationProps {
  page?: number
  onPageNext?: () => void
  onPageBack?: () => void
  onGotoPage?: (page: number) => void
  el_props?: ElProps
}

export const Pagination: React.VoidFunctionComponent<PaginationProps> = () => {
  return <Element></Element>
}
