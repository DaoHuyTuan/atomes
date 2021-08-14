import { Control, ControlProps } from './Control'
import { Input, InputProps } from './Input'

export interface EditorTypes {
  Control: (props: ControlProps) => JSX.Element
  Input: (props: InputProps) => JSX.Element
}
export const components: EditorTypes = {
  Control: (props: ControlProps) => <Control {...props} />,
  Input: (props: InputProps) => <Input {...props} />
}
