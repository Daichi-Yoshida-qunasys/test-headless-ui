import * as RadioGroup from '@radix-ui/react-radio-group';
import {
  RadioGroupProps,
  RadioGroupItemProps,
} from '@radix-ui/react-radio-group';
import { tv } from 'tailwind-variants';

type valueType = { key: string; text: string } & RadioGroupItemProps;

type Props = RadioGroupProps & {
  values: valueType[];
};

const radioButtonStyles = tv({
  slots: {
    base: 'flex gap-2 items-center justify-center',
    radio:
      'group h-[34px] max-w-60 min-w-[112px] flex gap-2 items-center p-2 rounded border border-qunasys-primary bg-white cursor-pointer focus:outline-none data-[state=checked]:outline-1 data-[state=checked]:outline-blue-500 data-[state=checked]:bg-qunasys-primary data-[state=checked]:border-transparent',
    circle: 'w-4 h-4 border border-qunasys-primary bg-white rounded-full',
    textStyle:
      'text-xs font-normal text-qunasys-primary group-data-[state=checked]:text-white',
  },
});

export function RadixUIRadioGroup({ values, ...other }: Props) {
  const { base, radio, circle, textStyle } = radioButtonStyles();
  return (
    <RadioGroup.Root {...other} className={base()}>
      {values.map(({ key, value, text, ...other }) => (
        <RadioGroup.Item key={key} value={value} {...other} className={radio()}>
          <RadioGroup.RadioGroupIndicator className={circle()} />
          <label className={textStyle()}>{text}</label>
        </RadioGroup.Item>
      ))}
    </RadioGroup.Root>
  );
}
