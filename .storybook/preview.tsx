import type { Preview } from "@storybook/react";
import type { Decorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../src/theme";

const withTheme: Decorator = (Story, context) => (
	<ThemeProvider theme={lightTheme}>
		<Story {...context} />
	</ThemeProvider>
);

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
		a11y: {
			test: "todo",
		},
	},
	decorators: [withTheme],
};

export default preview;
