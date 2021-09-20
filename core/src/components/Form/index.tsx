import React from 'react'
import Container from '../Container'
import Element, { ElProps } from '../Elements'

interface FormProps {
  onFormChange?: () => void
  el_props?: ElProps
  children?: React.ReactNode
}

export const Form: React.VoidFunctionComponent<FormProps> = React.memo(
  ({ el_props }) => {
    return (
      <Element el_props={el_props}>
        <Container>fdsfs</Container>
      </Element>
    )
  }
)
