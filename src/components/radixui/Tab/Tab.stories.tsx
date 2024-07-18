import type { Meta, StoryObj } from '@storybook/react';
import { RadixUITab } from './index';

const meta: Meta<typeof RadixUITab> = {
  title: 'RadixUI/Tab',
  component: RadixUITab,
};
export default meta;

export const Default: StoryObj<typeof RadixUITab> = {
  args: {
    nodes: [
      'RadixUITab プロジェクト',
      'RadixUITab サンプル',
      'RadixUITab 評価',
      'RadixUITab マスター',
    ],
  },
};
