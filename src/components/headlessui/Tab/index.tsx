import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import { tv } from 'tailwind-variants';

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
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 rounded-l-lg data-[selected]:bg-qunasys-red/10 data-[selected]:text-qunasys-red',
    secondTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 data-[selected]:bg-qunasys-green/10 data-[selected]:text-qunasys-green',
    thirdTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 data-[selected]:bg-qunasys-yellow/10 data-[selected]:text-qunasys-yellow',
    lastTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 rounded-r-lg data-[selected]:bg-qunasys-secondary/10 data-[selected]:text-qunasys-secondary',
  },
});

//NOTE - TabGroupが存在しないとタブの字実装ができないため大きめのコンポーネントになる
export function HeadlessUITab({ nodes }: Props) {
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
        <TabGroup>
          <div className={tabWrapper()}>
            <TabList className={tabList()}>
              <Tab className={firstTab()}>プロジェクト</Tab>
              <Tab className={secondTab()}>サンプル</Tab>
              <Tab className={thirdTab()}>評価</Tab>
              <Tab className={lastTab()}>マスター</Tab>
            </TabList>
          </div>

          <TabPanels className="mt-3">
            {nodes.map((node, index) => (
              <TabPanel key={index}>{node}</TabPanel>
            ))}
          </TabPanels>
        </TabGroup>
      </div>
    </div>
  );
}
