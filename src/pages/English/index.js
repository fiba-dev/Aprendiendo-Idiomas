import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import Header from "../../components/header";
export function English() {
	return (
		<div className="homeContainer">
			<Header></Header>
			<div>
				<h1 className="englishTitle">Aprende Jugando</h1>
				<div className="gameContainer">
					<Link className="englishSubtitles" to="/english/game">
						<div className="cards">
							{" "}
							<h3>Verbos de presente a pasado</h3>{" "}
						</div>
					</Link>
					<Link className="englishSubtitles" to="/english/listOfVerbs">
						<div className="cards">
							{" "}
							<h3>Lista de Verbos</h3>{" "}
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default English;
