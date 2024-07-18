import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ReactAreaRadioGroup } from './index';

const meta: Meta<typeof ReactAreaRadioGroup> = {
  title: 'ReactArea/RadioGroup',
  component: ReactAreaRadioGroup,
  args: { onChange: fn() },
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

export const Default: StoryObj<typeof ReactAreaRadioGroup> = {
  args: {
    value: 'true',
    values: [
      { key: '1', value: 'true', text: 'ある' },
      { key: '2', value: 'false', text: 'ない' },
    ],
  },
};
