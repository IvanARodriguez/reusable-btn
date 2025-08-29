import {
	forwardRef,
	type ButtonHTMLAttributes,
	type ForwardedRef,
	type ReactNode,
} from 'react';

export type BaseButtonProps = {
	children?: ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	size?: 'small' | 'medium' | 'large';
	fullWidth?: boolean;
	loading?: boolean;
	startIcon?: ReactNode;
	endIcon?: ReactNode;
	className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const BaseButton = forwardRef(
	(props: BaseButtonProps, ref: ForwardedRef<HTMLButtonElement>) => {
		const {
			type = 'button',
			disabled = false,
			onClick,
			children = 'Sample Button',
			size = 'medium',
			fullWidth = false,
			loading = false,
			startIcon,
			endIcon,
			className = '',
			...restProps
		} = props;

		const withGeneralStyles =
			'inline-flex cursor-pointer items-center justify-center font-medium rounded-lg transition-all duration-200';
		const withFocusStyles =
			'focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

		const sizeStyles =
			size === 'small'
				? 'px-3 py-1.5 text-sm'
				: size === 'large'
				? 'px-6 py-3 text-lg'
				: 'px-4 py-2 text-base';

		return (
			<button
				ref={ref}
				type={type}
				disabled={disabled || loading}
				onClick={onClick}
				aria-busy={loading}
				className={`
          ${withGeneralStyles}
          ${withFocusStyles}
          ${sizeStyles}
          ${fullWidth ? 'w-full' : ''}
          ${loading ? 'cursor-wait' : ''}
          ${className}
        `}
				{...restProps}
			>
				<span className='inline-flex items-center gap-2'>
					{!loading && startIcon}
					{children}
					{!loading && endIcon}
				</span>
			</button>
		);
	}
);

export default BaseButton;
