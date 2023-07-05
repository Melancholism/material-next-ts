import { PaletteMode } from "@mui/material";
import { toast } from "react-toastify";
import { create } from "zustand";

export type TMode = "light" | "dark" | "system";

type TUsePriceStore = {
	mode: TMode;
	toggleMode: (colorMode: TMode, preferredMode?: PaletteMode) => void;
};

const useThemeModeStore = create<TUsePriceStore>((set) => ({
	mode: "light",
	toggleMode: (colorMode, preferredMode) => {
		try {
			localStorage.setItem("mode", colorMode);
		} catch (error) {
			// thrown when cookies are disabled.
		}
		if (colorMode === "system") {
			if (preferredMode) {
				set({ mode: colorMode });
			} else {
				toast.error("Unable to read system preferred mode!");
				set({ mode: "light" });
			}
		} else if (colorMode) {
			set({ mode: colorMode });
		}
	},
}));
export default useThemeModeStore;
