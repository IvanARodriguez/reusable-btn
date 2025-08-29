import type { BaseButtonProps } from './BaseButton';
import BaseButton from './BaseButton';

type PrimaryButtonProps = Omit<BaseButtonProps, 'className'> & {
	className?: string;
};

export default function PrimaryButton({
	className = '',
	...props
}: PrimaryButtonProps) {
	return (
		<BaseButton
			className={`
        relative overflow-hidden rounded-full
        bg-pink-500 text-white hover:bg-pink-600
        ${className}
      `}
			{...props}
		/>
	);
}
