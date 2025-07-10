import "styled-components";

declare module "styled-components" {
	export interface DefaultTheme {
		colors: {
			primary: string;
			onPrimary: string;
			secondary: string;
			onSecondary: string;
		};
	}
}
