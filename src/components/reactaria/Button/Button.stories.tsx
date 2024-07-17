import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactAreaButton } from './index';

const meta: Meta<typeof ReactAreaButton> = {
  title: 'ReactArea/Button',
  component: ReactAreaButton,
  args: { onPress: fn() },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof ReactAreaButton> = {
  args: {
    children: 'ReactAreaButton',
    outlined: false,
    color: 'primary',
  },
};
