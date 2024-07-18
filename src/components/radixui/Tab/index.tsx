import * as Tabs from '@radix-ui/react-tabs';
import { tv } from 'tailwind-variants';

const findTabVale = (index: number): string => {
  switch (index) {
    case 0:
      return 'project';
    case 1:
      return 'sample';
    case 2:
      return 'evaluation';
    case 3:
      return 'master';
    default:
      return 'project';
  }
};

type Props = {
  nodes: React.ReactNode[];
};

const tabStyles = tv({
  slots: {
    root: 'flex h-screen w-full justify-center p-6 bg-gray-200',
    content: 'w-full',
    tabWrapper: 'bg-white p-6 rounded-xl',
    tabList: 'flex justify-center bg-gray-100 rounded-xl',
    firstTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 rounded-l-lg data-[state=active]:bg-qunasys-red/10 data-[state=active]:text-qunasys-red',
    secondTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 data-[state=active]:bg-qunasys-green/10 data-[state=active]:text-qunasys-green',
    thirdTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 data-[state=active]:bg-qunasys-yellow/10 data-[state=active]:text-qunasys-yellow',
    lastTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 rounded-r-lg data-[state=active]:bg-qunasys-secondary/10 data-[state=active]:text-qunasys-secondary',
  },
});

export function RadixUITab({ nodes }: Props) {
  const {
    root,
    content,
    tabWrapper,
    tabList,
    firstTab,
    secondTab,
    thirdTab,
    lastTab,
  } = tabStyles();
  return (
    <div className={root()}>
      <div className={content()}>
        <Tabs.Root defaultValue="project">
          <div className={tabWrapper()}>
            <Tabs.List className={tabList()}>
              <Tabs.Trigger value="project" className={firstTab()}>
                プロジェクト
              </Tabs.Trigger>
              <Tabs.Trigger value="sample" className={secondTab()}>
                サンプル
              </Tabs.Trigger>
              <Tabs.Trigger value="evaluation" className={thirdTab()}>
                評価
              </Tabs.Trigger>
              <Tabs.Trigger value="master" className={lastTab()}>
                マスター
              </Tabs.Trigger>
            </Tabs.List>
          </div>
          <div className="mt-3">
            {nodes.map((node, index) => {
              const value = findTabVale(index);
              return (
                <Tabs.Content value={value} key={index}>
                  {node}
                </Tabs.Content>
              );
            })}
          </div>
        </Tabs.Root>
      </div>
    </div>
  );
}
