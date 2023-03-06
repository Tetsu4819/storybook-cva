import { Button } from './Button';
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
  title: 'cvaExample/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={() => console.log('clicked!')}>
    {args.children}
  </Button>
);

export const Default = Template.bind({});
Default.args = {
  children: 'Default',
};
