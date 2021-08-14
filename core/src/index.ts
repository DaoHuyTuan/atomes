import {
  components as editorComponents,
  EditorTypes
} from './components/Editor/components'
import {
  components as commentsComponents,
  CommentsTypes
} from './components/Comments/components'

interface ComponentsTypes {
  Comments: CommentsTypes
  Editor: EditorTypes
}
export const components: ComponentsTypes = {
  Editor: editorComponents,
  Comments: commentsComponents
}
export * from './components/Comments'
export * from './components/Editor'
