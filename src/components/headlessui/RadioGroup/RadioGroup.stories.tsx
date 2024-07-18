import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { HeadlessUIRadioGroup } from './index';

const meta: Meta<typeof HeadlessUIRadioGroup> = {
  title: 'headlessUI/RadioGroup',
  component: HeadlessUIRadioGroup,
  args: { onClick: fn() },
  argTypes: {
    values: [
      { key: '1', value: 'true', text: 'ある' },
      { key: '2', value: 'false', text: 'ない' },
    ],
    value: {
      options: ['true', 'false'],
      control: { type: 'radio' },
    },
  },
};
export default meta;

export const Default: StoryObj<typeof HeadlessUIRadioGroup> = {
  args: {
    value: 'true',
    values: [
      { key: '1', value: 'true', text: 'ある' },
      { key: '2', value: 'false', text: 'ない' },
    ],
  },
};
