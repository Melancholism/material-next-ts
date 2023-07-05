import { NumericFormat } from "react-number-format";
import { Controller } from "react-hook-form";
import { InputAdornment, TextField } from "@mui/material";

type Props = {
	control: any;
	name: string;
	onChange?: (value: string) => void;
	required?: boolean;
	min?: string | number;
	max?: string | number;
	decimalScale?: number;
	thousandSeparator?: boolean;
	shouldUnregister?: boolean;
	asNumber?: boolean;
	endAdornment?: string;
	fixedDecimalScale?: boolean;
	[key: string]: any;
};

const NumberFormatInput = ({
	control,
	name,
	onChange,
	required,
	min,
	max,
	decimalScale,
	thousandSeparator,
	shouldUnregister,
	endAdornment,
	fixedDecimalScale = false,
	asNumber = false,
	...props
}: Props) => (
	<Controller
		name={name}
		control={control}
		shouldUnregister={shouldUnregister}
		rules={{
			required,
			min,
			max,
		}}
		render={({ field }) => {
			const { onChange: fieldOnChange, ...restField } = field;
			return (
				<NumericFormat
					// customNumerals={["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]}
					thousandSeparator={thousandSeparator ?? true}
					decimalScale={decimalScale ?? 18}
					allowNegative={false}
					// allowEmptyFormatting={false}
					fixedDecimalScale={fixedDecimalScale}
					customInput={TextField}
					onValueChange={({ value, floatValue }) =>
						onChange
							? onChange(value)
							: asNumber
							? fieldOnChange(floatValue)
							: fieldOnChange(value)
					}
					InputProps={{
						endAdornment: endAdornment && (
							<InputAdornment
								sx={
									{
										// "& .MuiTypography-root": { fontFamily: "Gilroy-light" },
									}
								}
								position="end"
							>
								{endAdornment}
							</InputAdornment>
						),
					}}
					{...props}
					{...restField}
				/>
			);
		}}
	/>
);
export default NumberFormatInput;
