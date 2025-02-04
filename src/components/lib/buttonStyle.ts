import { tv } from 'tailwind-variants';

export const buttonStyles = tv({
  base: 'h-[34px] max-w-60 inline-flex items-center px-6 py-2 text-xs rounded',
  variants: {
    color: {
      primary: 'bg-qunasys-primary text-white',
      secondary: 'bg-qunasys-secondary text-white',
    },
    outlined: {
      true: 'border bg-transparent',
    },
  },
  compoundVariants: [
    {
      color: 'primary',
      outlined: true,
      class: 'border-qunasys-primary text-qunasys-primary',
    },
    {
      color: 'secondary',
      outlined: true,
      class: 'border-qunasys-secondary text-qunasys-secondary',
    },
  ],
  defaultVariants: {
    color: 'primary',
    outlined: false,
  },
});
