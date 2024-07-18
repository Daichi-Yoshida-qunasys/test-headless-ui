import {
  RadioGroup,
  Radio,
  RadioGroupProps,
  RadioProps,
} from 'react-aria-components';

import { tv } from 'tailwind-variants';

//NOTE - タブ移動した時のfocusの気挙動がおかしい data-focused属性がなんかおかしい
type valueType = { key: string; text: string } & RadioProps;

type Props = RadioGroupProps & {
  values: valueType[];
};

const radioButtonStyles = tv({
  slots: {
    base: 'flex gap-2 items-center justify-center',
    radio: `group h-[34px] max-w-60 min-w-[112px] flex gap-2 items-center p-2 rounded border border-qunasys-primary bg-white cursor-pointer
       focus:outline-none data-[focused=true]:outline-1 data-[focused=true]:outline-blue-500  data-[selected=true]:bg-qunasys-primary data-[selected=true]:border-transparent`,
    circle: 'w-4 h-4 border border-qunasys-primary bg-white rounded-full',
    textStyle:
      'text-xs font-normal text-qunasys-primary group-data-[selected=true]:text-white',
  },
});

export function ReactAreaRadioGroup({ values, ...other }: Props) {
  const { base, radio, circle, textStyle } = radioButtonStyles();

  return (
    <RadioGroup {...other} className={base()}>
      {values.map(({ key, value, text, ...other }) => (
        <Radio className={radio()} key={key} value={value} {...other}>
          <div className={circle()} />
          <div className={textStyle()}>{text}</div>
        </Radio>
      ))}
    </RadioGroup>
  );
}
