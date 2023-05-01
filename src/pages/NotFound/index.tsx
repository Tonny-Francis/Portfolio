import React from "react";
import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import "./style.css";

export default function NotFound() {
	const navigate = useNavigate();

	return (
		<Box className="container-not-found">
			<Box className="not-found-top-bar">
				<Button variant="outlined" className="not-found-button" onClick={() => {
					navigate("/");
				}}>
                    Home
				</Button>
			</Box>
			<Box className="not-found-content">
				<img src="/assets/imgs/Umaru-Chan-Pensive.png" className="container-img"/>
				<p className="not-found">
                    PAGE NOT FOUND
				</p>
			</Box>
		</Box>
	);
}