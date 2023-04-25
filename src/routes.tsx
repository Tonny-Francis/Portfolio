import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";

export default function AppRoutes() {
	return(
		<main  className="flex flex-col w-full min-h-full">
			<Router>
				<NavBar />
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</Router>
		</main>
	);
}