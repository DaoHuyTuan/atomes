import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Page } from './Page'

export default {
  title: 'Components/Editor',
  component: Page
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = args => <Page {...args} />

export const Editor = Template.bind({})
Editor.args = {
  // ...HeaderStories.LoggedIn.args
}
