import type { Meta } from "@storybook/react";
import { colors } from "../theme/colors";
import { useState } from "react";
import styled from "styled-components";

const meta: Meta = {
	title: "Foundation/Colors",
};

const Shade = styled.div<{ $hex: string; $textColor: string }>`
	background-color: ${({ $hex }) => $hex};
	color: ${({ $textColor }) => $textColor};
	height: 100px;
	width: calc(100% / 5);
	display: flex;
	align-items: center;
	justify-content: center;
	text-align: center;
	padding: 8px;
	font-size: 12px;
	font-family: monospace;
	cursor: pointer;
	user-select: none;
	position: relative;
	transition: width 0.2s ease;

	span {
		color: ${({ $textColor }) => $textColor};
		display: none;
	}

	&:hover,
	&:focus {
		width: 100%;

		span {
			display: block;
		}
	}
`;

const Color = styled.div`
	display: flex;
	border-radius: 8px;
	overflow: hidden;
`;

const ColorContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	width: calc(100% / 4 - 12px);

	span {
		font-family: monospace;
		margin-left: 8px;
	}
`;

const PaletteContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	gap: 16px;
`;

export default meta;

export const Palette = () => {
	const [copiedHex, setCopiedHex] = useState<string | null>(null);

	const handleCopy = async (hex: string) => {
		try {
			await navigator.clipboard.writeText(hex);
			setCopiedHex(hex);
			setTimeout(() => setCopiedHex(null), 1000);
		} catch (err) {
			console.error("Failed to copy!", err);
		}
	};

	return (
		<PaletteContainer>
			{Object.entries(colors).map(([colorName, shades]) => {
				if (typeof shades !== "object" || !("on" in shades)) return null;
				return (
					<ColorContainer key={colorName}>
						<span>{colorName}</span>
						<Color key={colorName}>
							{Object.entries(shades)
								.filter(([shade]) => shade !== "on")
								.map(([shade, hex]) => {
									const isCopied = copiedHex === hex;

									return (
										<Shade
											key={`${colorName}-${shade}`}
											$hex={hex}
											$textColor={shades.on}
											onClick={() => handleCopy(hex)}
											title={
												isCopied ? "Copied!" : `${colorName} ${shade} - ${hex}`
											}
											tabIndex={0}
											onKeyDown={(e) => e.key === "Enter" && handleCopy(hex)}
										>
											<span>{isCopied ? "Copied!" : `${hex}`}</span>
										</Shade>
									);
								})}
						</Color>
					</ColorContainer>
				);
			})}
		</PaletteContainer>
	);
};
