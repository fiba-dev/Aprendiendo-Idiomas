import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Game from "./components/Game";
import ListOfVerbs from "./components/listOfVerbs";
import English from "./pages/English/index";
import Home from "./pages/Home/index";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/english/index" element={<English />} />
				<Route path="/english/game" element={<Game />} />
				<Route path="/english/listOfVerbs" element={<ListOfVerbs />} />
			</Routes>
		</Router>
	);
};

export default App;
