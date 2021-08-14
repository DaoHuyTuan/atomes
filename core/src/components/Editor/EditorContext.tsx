import * as React from 'react'
/**
 * @ignore - internal component.
 */

interface EditorTypes {
  [key: string]: any
}
const EditorContext = React.createContext<EditorTypes>({})

if (process.env.NODE_ENV !== 'production') {
  EditorContext.displayName = 'EditorContext'
}
