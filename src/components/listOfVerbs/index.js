import React, { useState, useEffect } from "react";
import verbsData from "../verbs/present-past.json";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../header";
export function ListOfVerbs() {
	const [verbs, setVerbs] = useState(verbsData.verbs);

	const sortedVerbs = verbs.sort((a, b) =>
		a.presente.localeCompare(b.presente)
	);
	return (
		<div className="listContainer">
			<Header></Header>
			<h1>Lista de Verbos</h1>
			<table className="tb">
				<thead className="head">
					<tr>
						<th>Presente</th>
						<th>Pasado</th>
						<th>Español</th>
					</tr>
				</thead>
				<tbody className="body">
					{sortedVerbs.map((verb) => (
						<tr className="bodyTr" key={verb.presente}>
							<td>
								<a
									href={`https://translate.yandex.com/es/?source_lang=en&target_lang=es&text=${verb.presente}`}
									target="_blank"
									rel="noreferrer"
								>
									{verb.presente}{" "}
								</a>
							</td>
							<td>
								<a
									href={`https://translate.yandex.com/es/?source_lang=en&target_lang=es&text=${verb.pasado}`}
									target="_blank"
									rel="noreferrer"
								>
									{verb.pasado}{" "}
								</a>
							</td>
							<td>{verb.traduccion}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default ListOfVerbs;
