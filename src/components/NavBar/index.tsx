import * as React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./style.css";

interface StyledTabProps {
  label: string;
  to: string;
}

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
	<Tabs
		{...props}
		TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
	/>
))({
	"& .MuiTabs-indicator": {
		display: "flex",
		justifyContent: "center",
		backgroundColor: "transparent",
	},
	"& .MuiTabs-indicatorSpan": {
		maxWidth: 45,
		width: "100%",
		backgroundColor: "#5DB65D",
	},
});

const StyledTab = styled((props: StyledTabProps) => (
	<Tab disableRipple {...props} />
))(() => ({
	textTransform: "none",
	fontWeight: "400",
	fontSize: "12pt",
	color: "#FFFFFF",
	"&.Mui-selected": {
		color: "#5DB65D",
	},
	padding: "0px",
}));

export default function Desktop() {
	const [value, setValue] = React.useState(0);
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		event.preventDefault();
		setValue(newValue);
	};

	return (
		<Box className="NavBar">
			<Box className="NavBar-Left-Side">
				<img src="/assets/imgs/Umaru-Chan.png" className="Logo"/>
				<Typography className="Name">
					TONNY FRANCIS
				</Typography>
			</Box>
			<Box className="NavBar-Rigth-Side">
				<StyledTabs
					value={value}
					onChange={handleChange}
					aria-label="styled tabs example"
				>
					<StyledTab label="About" to="/" />
					<StyledTab label="Experience" to="/" />
					<StyledTab label="Projects" to="/" />
					<StyledTab label="Skills" to="/" />
					<StyledTab label="Contact" to="/" />
				</StyledTabs>
			</Box>
		</Box>
	);
}