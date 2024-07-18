import {
  Radio,
  RadioGroup,
  RadioProps,
  RadioGroupProps,
} from '@headlessui/react';
import { tv } from 'tailwind-variants';

type valueType = { key: string; text: string } & RadioProps;

type Props = RadioGroupProps & {
  values: valueType[];
};

const radioButtonStyles = tv({
  slots: {
    base: 'flex gap-2 items-center justify-center',
    radio:
      'group h-[34px] max-w-60 min-w-[112px] flex gap-2 items-center p-2 rounded border border-qunasys-primary bg-white data-[checked]:bg-qunasys-primary data-[checked]:border-transparent',
    circle: 'w-4 h-4 border border-qunasys-primary bg-white rounded-full',
    textStyle:
      'text-xs font-normal text-qunasys-primary group-data-[checked]:text-white',
  },
});

export function HeadlessUIRadioGroup({ values, ...other }: Props) {
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
