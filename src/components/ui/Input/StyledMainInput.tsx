import { TextField, TextFieldProps } from "@mui/material"
import { styled } from "@mui/material/styles"

export const StyledMainInput = styled((props: TextFieldProps) => (
	<TextField variant="outlined" fullWidth hiddenLabel {...props} />
))(({ theme }) => ({
	// backgroundColor: "#E4FFF9",

	"& .MuiOutlinedInput-root": {
		height: "50px",
		border: "none",
		borderRadius: "12px",
		color: theme.palette.primary,
		backgroundColor: theme.palette.grey[200],

		"& fieldset": {
			borderColor: "transparent"
		},
		"&:hover fieldset": {
			borderColor: "transparent"
		},
		"&.Mui-focused fieldset": {
			borderColor: "transparent"
		}
	},

	"& .MuiFormHelperText-root": {
		textAlign: "right"
	}
}))
