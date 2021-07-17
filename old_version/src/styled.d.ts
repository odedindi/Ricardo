import 'styled-components';
import '@material-ui/core';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			background: string;
			blue: string;
			brand: string;
			elementBorder: string;
		};
	}
}

declare module '@material-ui/core' {
	export type DefaultTypographyProps = {
		component: string;
	};
}
