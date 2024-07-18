import type { Meta, StoryObj } from '@storybook/react';
import { ReactAreaTab } from './index';

const meta: Meta<typeof ReactAreaTab> = {
  title: 'ReactArea/Tab',
  component: ReactAreaTab,
};
export default meta;

export const Default: StoryObj<typeof ReactAreaTab> = {
  args: {
    nodes: [
      'ReactAreaTab プロジェクト',
      'ReactAreaTab サンプル',
      'ReactAreaTab 評価',
      'ReactAreaTab マスター',
    ],
  },
};
