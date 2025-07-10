import type { Meta } from "@storybook/react";
import { colors } from "../theme/colors";

const meta: Meta = {
	title: "Foundation/Colors",
};

export default meta;

export const Palette = () => (
	<div
		style={{
			display: "grid",
			gap: 12,
			gridTemplateColumns: "repeat(auto-fit, minmax(100px, 1fr))",
		}}
	>
		{Object.entries(colors).map(([colorName, shades]) =>
			Object.entries(shades).map(([shade, hex]) => (
				<div key={`${colorName}-${shade}`} style={{ textAlign: "center" }}>
					<div
						style={{
							backgroundColor: hex,
							height: 80,
							borderRadius: 8,
							border: "1px solid #ccc",
						}}
					/>
					<div style={{ marginTop: 8, fontSize: 12, fontFamily: "monospace" }}>
						{colorName} {shade} <br /> {hex}
					</div>
				</div>
			))
		)}
	</div>
);
