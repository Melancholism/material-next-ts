import { Controller } from "react-hook-form";

type Props = {
	name: string;
	control: any;
	accept: string;
	type?: string;
};

const UploadFileInput = ({ name, control, accept, type = "file" }: Props) => (
	<Controller
		name={name}
		control={control}
		render={({ field }) => (
			<input
				onChange={(event) => field.onChange(event.target.files?.[0])}
				hidden
				accept={accept}
				type={type}
			/>
		)}
	/>
);

export default UploadFileInput;
