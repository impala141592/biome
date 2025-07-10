import styled, { css } from "styled-components";
import type { ButtonProps } from "./Button.types";

export const StyledButton = styled.button<{
	$variant: Required<ButtonProps["variant"]>;
	$size: Required<ButtonProps["size"]>;
}>`
	border: none;
	cursor: pointer;
	font-weight: 500;
	border-radius: 6px;
	transition: background 0.2s ease, color 0.2s ease;

	${({ $size }) => {
		switch ($size) {
			case "sm":
				return css`
					padding: 0.25rem 0.75rem;
					font-size: 0.875rem;
				`;
			case "lg":
				return css`
					padding: 0.75rem 1.5rem;
					font-size: 1.125rem;
				`;
			default:
				return css`
					padding: 0.5rem 1rem;
					font-size: 1rem;
				`;
		}
	}}

	${({ $variant, theme }) => {
		switch ($variant) {
			case "secondary":
				return css`
					background: ${theme.colors.secondary};
					color: ${theme.colors.onSecondary};
				`;
			case "ghost":
				return css`
					background: transparent;
					color: ${theme.colors.primary};
					border: 1px solid ${theme.colors.primary};
				`;
			default:
				return css`
					background: ${theme.colors.primary};
					color: ${theme.colors.onPrimary};
				`;
		}
	}}

  &:disabled {
		opacity: 0.6;
		cursor: not-allowed;
	}
`;
