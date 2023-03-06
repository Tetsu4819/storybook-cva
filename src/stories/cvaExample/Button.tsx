import { cva, type VariantProps } from 'class-variance-authority';

const button = cva(['font-semibold', 'border', 'rounded'], {
  variants: {
    intent: {
      primary: [
        'bg-blue-500',
        'text-white',
        'border-transparent',
        'hover:bg-blue-600',
      ],
      secondary: [
        'bg-white',
        'text-gray-800',
        'border-gray-400',
        'hover:bg-gray-100',
      ],
    },
    size: {
      small: ['text-sm', 'py-1', 'px-2'],
      medium: ['text-base', 'py-2', 'px-4'],
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      size: 'medium',
      className: 'uppercase',
    },
  ],
  defaultVariants: {
    intent: 'primary',
    size: 'medium',
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export const Button = ({ className, intent, size, ...props }: ButtonProps) => {
  return (
    <button className={button({ intent, size, className })} {...props}>
      {props.children}
    </button>
  );
};
