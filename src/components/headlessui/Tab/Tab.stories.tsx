import type { Meta, StoryObj } from '@storybook/react';
import { HeadlessUITab } from './index';

const meta: Meta<typeof HeadlessUITab> = {
  title: 'headlessUI/Tab',
  component: HeadlessUITab,
};
export default meta;

export const Default: StoryObj<typeof HeadlessUITab> = {
  args: {
    nodes: [
      'HeadlessUITab プロジェクト',
      'HeadlessUITab サンプル',
      'HeadlessUITab 評価',
      'HeadlessUITab マスター',
    ],
  },
};
