import type { BaseButtonProps } from './BaseButton';
import BaseButton from './BaseButton';

type PrimaryButtonProps = Omit<BaseButtonProps, 'className' | 'style'> & {};

export default function PrimaryButton({ ...props }: PrimaryButtonProps) {
	return (
		<BaseButton
			className='
        relative overflow-hidden rounded-full
        bg-pink-500 text-white hover:bg-pink-600
      '
			{...props}
		/>
	);
}
