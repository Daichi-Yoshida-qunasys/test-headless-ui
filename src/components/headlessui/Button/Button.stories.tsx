import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HeadlessUIButton } from './index';

const meta: Meta<typeof HeadlessUIButton> = {
  title: 'headlessUI/Button',
  component: HeadlessUIButton,
  args: { onClick: fn() },
  argTypes: {
    color: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof HeadlessUIButton> = {
  args: {
    children: 'HeadlessUIButton',
    outlined: false,
    color: 'primary',
  },
};
