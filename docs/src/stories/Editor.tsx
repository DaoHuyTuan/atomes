import React from 'react'
import { Editor } from '../../../core/src'

export const CustomEditor = () => {
  return <Editor components={{ Control: props => <span>hello</span> }} />
}
