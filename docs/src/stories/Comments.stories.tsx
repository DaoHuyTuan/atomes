import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Page } from './Page'
import * as HeaderStories from './Header.stories'

export default {
  title: 'Components/Comments',
  component: Page
} as ComponentMeta<typeof Page>

const Template: ComponentStory<typeof Page> = args => <Page {...args} />

export const Comments = Template.bind({})
Comments.args = {
  // ...HeaderStories.LoggedIn.args
}
