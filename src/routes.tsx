import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
	return(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<NavBar />}>
					<Route path="/" element={<Home />} />
					<Route path="experience" element={<Experience />} />
					<Route path="projects" element={<Projects />} />
					<Route path="skills" element={<Skills />} />
					<Route path="contact" element={<Contact />} />
				</Route>
				<Route path="*" element={<NotFound/>} />
			</Routes>
		</BrowserRouter>
	);
}