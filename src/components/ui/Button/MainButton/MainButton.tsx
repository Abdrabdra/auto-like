import { Button, ButtonProps } from "@mui/material"
import { styled } from "@mui/material/styles"
import { alpha } from "@mui/material"

const MainButton = styled((props: ButtonProps) => (
	<Button variant="outlined" fullWidth {...props} />
))(({ theme }) => ({
	height: "50px",
	backgroundColor: theme.palette.secondary[300],
	borderRadius: "10px",
	fontSize: "16px",
	lineHeight: "20px",
	fontWeight: 600,
	color: "#FFF",
	textTransform: "capitalize",
	justifyContent: "center",
	alignItems: "center",
	borderColor: "transparent",

	transition: theme.transitions.create([
		"border-color",
		"background-color",
		"box-shadow"
	]),

	"&:focus, &:hover": {
		boxShadow: `${alpha(theme.palette.secondary[300], 0.9)} 0 0 0 0.2rem`,
		borderColor: theme.palette.secondary[300],
		backgroundColor: theme.palette.secondary[300]
	},

	".Mui-disabled": {
		color: "#fff",
		backgroundColor: "#fff"
	}
}))

export default MainButton
