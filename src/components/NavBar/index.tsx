import * as React from "react";
import { Box, Typography } from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import "./style.css";
import { Outlet, useNavigate } from "react-router-dom";


export default function Desktop() {
	const navigate = useNavigate();
	const [value, setValue] = React.useState(0);
  
	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		event.preventDefault();
		setValue(newValue);
	};
	
	return (
		<Box>
			<Box className="NavBar">
				<Box className="NavBar-Left-Side">
					<img src="/assets/imgs/Umaru-Chan.png" className="Logo"/>
					<Typography className="Name">
						TONNY FRANCIS
					</Typography>
				</Box>
				<Box className="NavBar-Rigth-Side">
					<Tabs
						value={value}
						onChange={handleChange}
						textColor="primary"
						indicatorColor="secondary"
					>
						<Tab label="About" disableRipple onClick={() => navigate("/")} />
						<Tab label="Experience" disableRipple onClick={() => navigate("/experience")} />
						<Tab label="Projects" disableRipple onClick={() => navigate("/projects")} />
						<Tab label="Skills" disableRipple onClick={() => navigate("/skills")} />
						<Tab label="Contact" disableRipple onClick={() => navigate("/contact")} />
					</Tabs>
				</Box>
			</Box>
			<Outlet/>
		</Box>
	);
}