export declare module "@mui/material/styles" {
	interface Palette {
		inactive?: object;
	}
	interface PaletteOptions {
		inactive?: object;
	}
	interface TypographyVariants {
		caption2?: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		caption2?: React.CSSProperties;
	}

	interface SimplePaletteColorOptions {
		main2?: string;
	}

	interface TypeBackground {
		transparent?: string | undefined;
	}
}

export declare module "@mui/material/Button" {
	interface ButtonPropsColorOverrides {
		inactive?: true;
	}
	interface ButtonPropsVariantOverrides {
		gradient?: true;
	}
}

export declare module "@mui/material/Typography" {
	interface TypographyPropsVariantOverrides {
		caption2?: true;
	}
}
