import React from 'react'
import { useMemo } from 'react'
import Element, { ElProps } from '../Elements'

interface ButtonProps {
  type?: string
  label?: string
  onClick?: () => void
  children?: React.ReactNode
  el_props?: ElProps
}

export const Button: React.VoidFunctionComponent<ButtonProps> = React.memo(
  props => {
    const { el_props, label, children, onClick, ...rest } = props

    const customLabel = useMemo(() => {
      return children ? children : label
    }, [children])

    return (
      <Element el_props={el_props}>
        <button onClick={onClick}>{customLabel}</button>
      </Element>
    )
  }
)
