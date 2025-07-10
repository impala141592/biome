import { StyledButton } from "./Button.styles";
import type { ButtonProps } from "./Button.types";

export const Button = ({
	children,
	variant = "primary",
	size = "md",
	...rest
}: ButtonProps) => {
	return (
		<StyledButton $variant={variant} $size={size} {...rest}>
			{children}
		</StyledButton>
	);
};
