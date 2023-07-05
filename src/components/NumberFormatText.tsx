/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-props-no-spreading */
import { Typography } from "@mui/material";
import { NumericFormat } from "react-number-format";

type Props = {
	prefix?: string;
	suffix?: string;
	thousandSeparator?: boolean;
	variant?: any;
	value: string | number;
	decimalScale?: number;
	fixedDecimalScale?: boolean;
	TypographyProps?: object;
	showZero?: boolean;
};

const NumberFormatText = ({
	prefix,
	suffix,
	thousandSeparator,
	variant,
	value,
	decimalScale,
	fixedDecimalScale,
	TypographyProps,
	showZero,
}: Props) =>
	!Number.isFinite(+value) || (value !== 0 && !value) ? (
		<Typography variant={variant} {...TypographyProps}>
			{showZero ? 0 : `${prefix}NaN${suffix}`}
		</Typography>
	) : (
		<NumericFormat
			value={value}
			displayType="text"
			fixedDecimalScale={fixedDecimalScale}
			thousandSeparator={thousandSeparator}
			prefix={prefix}
			suffix={suffix}
			decimalScale={decimalScale}
			renderText={(val) => (
				<Typography
					variant={variant}
					style={{
						display: "inline-block",
					}}
					{...TypographyProps}
				>
					{Number(value) > 1e6
						? `${prefix}${Number(value).toExponential(2)}${suffix}`
						: Number(value) < 0.001 && Number(value) !== 0
						? `${prefix}${Number(value).toExponential(2)}${suffix}`
						: val}
				</Typography>
			)}
		/>
	);
NumberFormatText.defaultProps = {
	prefix: "",
	suffix: "",
	thousandSeparator: true,
	variant: "body2",
	decimalScale: 3,
	fixedDecimalScale: false,
	TypographyProps: {},
	showZero: false,
};
export default NumberFormatText;
