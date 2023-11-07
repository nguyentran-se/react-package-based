import { StoryFn, Meta, StoryObj } from '@storybook/react';
import Button from './index';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as Meta;

// ## StoryFn
const ButtonTemplate: StoryFn<typeof Button> = (args) => {
  const { children } = args;
  return <Button>{children}</Button>;
};
export const ButtonStory = ButtonTemplate.bind({});
ButtonStory.args = {
  children: 'Hello Story Function',
};

// ## StoryObj
type Story = StoryObj<typeof Button>;
export const ButtonStory2: Story = {
  args: { children: 'Hello Story Obj' },
};
