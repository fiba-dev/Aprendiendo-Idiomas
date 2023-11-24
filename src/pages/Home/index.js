import React from "react";
import { US, FR } from "country-flag-icons/react/3x2";
import { Link } from "react-router-dom";
import "./index.css";
export function Home() {
	return (
		<div className="homeContainer">
			<div>
				<h1 className="homeTitle">Aprende Jugando</h1>
				<div className="containerFlags">
					<Link className="homeSubtitles" to="/english/index">
						<US title="United States" className="flags" />
					</Link>

					<FR title="France" className="flags" />
				</div>
			</div>
		</div>
	);
}

export default Home;
