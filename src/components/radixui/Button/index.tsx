import { ButtonHTMLAttributes } from 'react';
import { buttonStyles } from '../../lib/buttonStyle';

//NOTE - RadixUIにButtonが存在しないので、デフォルトのHTMLのbutton要素を拡張する
type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'primary' | 'secondary';
  outlined?: boolean;
};

export function RadixUIButton({
  children,
  className,
  color,
  outlined,
  ...other
}: Props) {
  return (
    <button
      {...other}
      className={`${className ?? ''} ${buttonStyles({ color, outlined })}`}
    >
      {children}
    </button>
  );
}
