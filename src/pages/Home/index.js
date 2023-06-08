import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./index.css";
export function Home() {
	return (
		<div className="homeContainer">
			<div>
				<h1 className="homeTitle">Aprende Jugando</h1>
				<div className="gameContainer">
					<Link className="homeSubtitles" to="/game">
						<h3>Verbos de presente a pasado</h3>
					</Link>
					<Link className="homeSubtitles" to="/listOfVerbs">
						<h3>Lista de Verbos</h3>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
