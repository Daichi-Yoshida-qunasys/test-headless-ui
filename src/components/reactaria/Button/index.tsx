import { Button, ButtonProps } from 'react-aria-components';
import { buttonStyles } from '../../lib/buttonStyle';

type Props = ButtonProps & {
  color?: 'primary' | 'secondary';
  outlined?: boolean;
};

export function ReactAreaButton({
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
