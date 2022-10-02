import { memo, SVGProps } from 'react';

interface Props extends SVGProps<SVGSVGElement> {}

export const Linkedin = memo<Props>(function Linkedin({ color = '#000', height = 20, width = 20, ...props }) {
  return (
    <svg color={color} height={height} viewBox="0 0 20 20" width={width} {...props}>
      <path
        d="M1 6h4v13H1V6zm2-5C1.8 1 1 2 1 3.1 1 4.1 1.8 5 3 5c1.3 0 2-.9 2-2s-.8-2-2-2zm11.6 5.2c-2.1 0-3.3 1.2-3.8 2h-.1l-.2-1.7H6.9c0 1.1.1 2.4.1 3.9V19h4v-7.1c0-.4 0-.7.1-1 .3-.7.8-1.6 1.9-1.6 1.4 0 2 1.2 2 2.8V19h4v-7.4c0-3.7-1.9-5.4-4.4-5.4z"
        fill="currentColor"
      />
    </svg>
  );
});