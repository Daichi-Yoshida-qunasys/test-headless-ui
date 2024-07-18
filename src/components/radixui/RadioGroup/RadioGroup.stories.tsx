import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { RadixUIRadioGroup } from './index';

const meta: Meta<typeof RadixUIRadioGroup> = {
  title: 'RadixUI/RadioGroup',
  component: RadixUIRadioGroup,
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

export const Default: StoryObj<typeof RadixUIRadioGroup> = {
  args: {
    value: 'true',
    values: [
      { key: '1', value: 'true', text: 'ある' },
      { key: '2', value: 'false', text: 'ない' },
    ],
  },
};
