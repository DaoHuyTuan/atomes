import * as React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useMemo } from 'react'
import { ElProps } from '../Elements'
import { components as DefaultComponents } from './components'

interface EditorComponents {
  Control?: any
  Input?: React.ReactNode
  ToolBox?: React.ReactNode
  ValueContainer?: React.ReactNode
  InputContainer?: React.ReactNode
  Placeholder?: React.ReactNode
  IndicatorSeparator?: React.ReactNode
  IndicatorsContainer?: React.ReactNode
  MultiValueContainer?: React.ReactNode
  MultiValueLabel?: React.ReactNode
  MultiValueRemove?: React.ReactNode
  MultiValueSelectControl?: React.ReactNode
}

export interface EditorProps {
  isMulti?: boolean
  components?: EditorComponents
  el_props?: ElProps
}

export const Editor: React.VoidFunctionComponent<EditorProps> = ({
  components
}) => {
  const [state, setState] = useState({ hello: 'fsd', age: 12 })
  const renderChilds = useCallback(
    data => {
      if (components && components.hasOwnProperty('Control')) {
        debugger
        const customControl = React.cloneElement(
          components.Control,
          { state },
          null
        )
        return customControl
      }
    },
    [components]
  )

  return (
    <div className='editor-container'>
      <>{renderChilds(state)}</>
    </div>
  )
}
