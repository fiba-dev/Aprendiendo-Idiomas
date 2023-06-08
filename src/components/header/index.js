import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";

import "react-toastify/dist/ReactToastify.css";
export function Header() {
	return (
		<div className="linkContainer">
			<Link className="home" to="/">
				<h4>Home</h4>
			</Link>
		</div>
	);
}

export default Header;
