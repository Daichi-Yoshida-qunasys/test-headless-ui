import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { RadixUIButton } from './index';

const meta: Meta<typeof RadixUIButton> = {
  title: 'RadixUI/Button',
  component: RadixUIButton,
  args: { onClick: fn() },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof RadixUIButton> = {
  args: {
    children: 'RadixUIButton',
    outlined: false,
    color: 'primary',
  },
};
