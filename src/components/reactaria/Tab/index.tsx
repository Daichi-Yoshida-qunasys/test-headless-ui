import React from 'react';
import { Tabs, TabList, Tab, TabPanel } from 'react-aria-components';
import { tv } from 'tailwind-variants';

const findTabValue = (index: number): string => {
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
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 rounded-l-lg data-[selected=true]:bg-qunasys-red/10 data-[selected=true]:text-qunasys-red',
    secondTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 data-[selected=true]:bg-qunasys-green/10 data-[selected=true]:text-qunasys-green',
    thirdTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 data-[selected=true]:bg-qunasys-yellow/10 data-[selected=true]:text-qunasys-yellow',
    lastTab:
      'flex justify-center bg-gray-200 flex-1 py-3 text-sm text-gray-700 rounded-r-lg data-[selected=true]:bg-qunasys-secondary/10 data-[selected=true]:text-qunasys-secondary',
  },
});

export function ReactAreaTab({ nodes }: Props) {
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
        <Tabs>
          <div className={tabWrapper()}>
            <TabList className={tabList()}>
              <Tab id="project" className={firstTab()}>
                プロジェクト
              </Tab>
              <Tab id="sample" className={secondTab()}>
                サンプル
              </Tab>
              <Tab id="evaluation" className={thirdTab()}>
                評価
              </Tab>
              <Tab id="master" className={lastTab()}>
                マスター
              </Tab>
            </TabList>
          </div>
          <div className="mt-3">
            {nodes.map((node, index) => {
              const value = findTabValue(index);
              return (
                <TabPanel id={value} key={index}>
                  {node}
                </TabPanel>
              );
            })}
          </div>
        </Tabs>
      </div>
    </div>
  );
}
