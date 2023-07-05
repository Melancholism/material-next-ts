import { toast } from "react-toastify";

export const displayTxError = (error) => {
	if (error) {
		if (error?.cause?.reason)
			toast.error(error.cause.reason, { toastId: "failed0" });
		else if (error?.details) toast.error(error.details, { toastId: "failed01" });
		else if (error?.cause?.message)
			toast.error(error?.cause?.message, { toastId: "failed02" });
		else if (error?.reason) toast.error(error.reason, { toastId: "failed03" });
		else if (error?.errorName)
			toast.error(error.errorName, { toastId: "failed04" });
		// Axios errors:
		else if (error?.response?.data?.message) {
			toast.error(error?.response?.data?.message, { toastId: "failed05" });
			toast.error(error?.response?.data?.errors?.[0]?.message, {
				toastId: "failed06",
			});
		} else if (error.message)
			toast.error(error.message, { toastId: "failed07" });
	} else {
		toast.error("Transaction encountered an error", { toastId: "failed08" });
	}
};
