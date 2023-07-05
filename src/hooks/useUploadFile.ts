import AxiosT from "@/setup/axios.setup";
import { useMutation } from "@tanstack/react-query";

const useUploadFile = () => {
	const { STATIC_SERVER_BASE_URL } = process.env;
	const { mutate, isLoading } = useMutation({
		mutationFn: (file: Blob | string) => {
			const formData = new FormData();
			formData.append("file", file);
			return AxiosT.post("/static-server/weed/upload", formData, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			});
		},
	});
	const upload = (file: Blob | string, fileTypeArray: string[]) =>
		new Promise((resolve, reject) => {
			if (file instanceof Blob && file.size > 0) {
				reject(new Error("The file is too big"));
			}
			if (file instanceof Blob && !fileTypeArray.includes(file.type)) {
				reject(new Error("The file format is not acceptable"));
			}
			mutate(file, {
				onSuccess: (data) => {
					if (data) {
						return resolve(
							encodeURI(`${STATIC_SERVER_BASE_URL}${data?.data?.data?.path}`)
						);
					}
					return reject(
						new Error(
							"Something went wrong when uploading your files! Please try again later."
						)
					);
				},
				onError: (err) => reject(err),
			});
		});

	return { upload, isUploading: isLoading };
};

export default useUploadFile;
