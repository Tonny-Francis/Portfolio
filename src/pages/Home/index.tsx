import React from "react";
import { Box, Button, Typography } from "@mui/material";

import "./style.css";

export default function Home() {
	return (
		<Box className="container">
			<Box className="home">
				<Box className="home-left-side">
					<img src="/assets/imgs/Tonny.png" width="480"/>
				</Box>
				<Box className="home-right-side">
					<Box className="home-right-side-background">
						<Box className="home-right-side-container-about-me">
							<p className="home-right-side-about-me">
								Undergraduate Student in Control and Automation Engineering 
								at UFRJ - Federal University of Rio de Janeiro and Working 
								as a Software Developer at Startup Convem Stores.
							</p>
						</Box>
						<Box className="home-right-side-container-social-media">
							<a href="https://www.linkedin.com/in/tonny-francis/" target="new_blank">
								<img src="/assets/imgs/LinkedIn.png" className="home-right-side-social-media-img"/>
							</a>
							<a href="https://github.com/Tonny-Francis" target="new_blank">
								<img src="/assets/imgs/GitHub.png" className="home-right-side-social-media-img"/>
							</a>
							<a href="https://www.instagram.com/_tonnyfr/" target="new_blank">
								<img src="/assets/imgs/Instagram.png" className="home-right-side-social-media-img"/>
							</a>
							<a href="https://api.whatsapp.com/send/?phone=%2B5521973783765&text&type=phone_number&app_absent=0" target="new_blank">
								<img src="/assets/imgs/WhatsApp.png" className="home-right-side-social-media-img"/>
							</a>
						</Box>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}