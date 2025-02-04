import { Button, ButtonProps } from '@headlessui/react';
import { buttonStyles } from '../../lib/buttonStyle';

type Props = ButtonProps & {
  color?: 'primary' | 'secondary';
  outlined?: boolean;
};

export function HeadlessUIButton({
  children,
  className,
  color,
  outlined,
  ...other
}: Props) {
  return (
    <Button
      {...other}
      className={`${className ?? ''} ${buttonStyles({ color, outlined })}`}
    >
      {children}
    </Button>
  );
}
