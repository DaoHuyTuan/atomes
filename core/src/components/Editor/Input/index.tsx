import React from 'react'
import Element, { ElProps } from '../../Elements'

export interface InputProps {
  value?: string | ''
  type?: string
  onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined
  onFocus?: React.FocusEventHandler<HTMLInputElement> | undefined
  onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined
  placeHolder?: string | undefined
  icon?: string | React.ReactNode
  setValue?: (value: string) => void
  readOnly?: boolean
  el_props?: ElProps
}

export const Input: React.VoidFunctionComponent<InputProps> = React.memo(
  props => {
    const { value, type, icon, el_props, setValue, ...rest } = props
    return (
      <Element>
        <input value={value} {...rest} />
      </Element>
    )
  }
)
