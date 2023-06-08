import React, { useState, useEffect } from "react";
import verbsData from "../verbs/present-past.json";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "../header";
export function Game() {
	const [verbs, setVerbs] = useState(verbsData.verbs);
	const [currentVerbIndex, setCurrentVerbIndex] = useState(0);
	const [inputValue, setInputValue] = useState("");
	const currentVerb = verbs[currentVerbIndex];
	const [puntaje, setPuntaje] = useState(0);
	const [inputDisabled, setInputDisabled] = useState(true);
	const [currentTimer, setCurrentTimer] = useState(0);
	const handleChange = (event) => {
		const value = event.target.value;
		setInputValue(value);
	};
	function getRandomIndex() {
		return Math.floor(Math.random() * verbs.length - 1);
	}
	function StartGame() {
		setInputValue("");
		setInputDisabled(false);
		setCurrentVerbIndex(getRandomIndex());
		setCurrentTimer(10);
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		if (inputValue.toLowerCase() === currentVerb.pasado.toLowerCase()) {
			toast.success(
				`Excelent the word was ${currentVerb.pasado.toUpperCase()}`,
				{
					position: "top-center",
					autoClose: 2000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "colored",
				}
			);
			setPuntaje(puntaje + 1);
			setInputValue("");
			if (puntaje < verbs.length - 1) {
				setCurrentVerbIndex(getRandomIndex());
				setCurrentTimer(10);
			} else {
				toast.success(`JUEGO COMPLETADO!!!!!`, {
					position: "top-center",
					autoClose: 30000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				});
				// Aquí puedes realizar acciones adicionales cuando se completen todos los verbos.
			}
		} else {
			toast.error("You Lost!! Try Again ", {
				position: "top-center",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			toast.info(`Your score was ${puntaje}`, {
				position: "top-center",
				autoClose: 20000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			toast.success(
				`The correct answer was ${currentVerb.pasado.toUpperCase()}`,
				{
					position: "top-center",
					autoClose: 20000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
					theme: "dark",
				}
			);
			setCurrentTimer(0);
			setPuntaje(0);
			setInputValue("");
			setInputDisabled(true);
		}
	};

	useEffect(() => {
		const timer =
			currentTimer > 0 &&
			setInterval(() => setCurrentTimer((prevTimer) => prevTimer - 1), 1000);

		if (currentTimer === 0 && inputDisabled === false) {
			// Aquí puedes realizar acciones cuando el contador llega a cero.
			toast.warn("TIEMPO AGOTADO!!", {
				position: "top-center",
				autoClose: 2000,
				hideProgressBar: false,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			toast.info(`TU PUNTAJE FUE ${puntaje}`, {
				position: "top-center",
				autoClose: 20000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "colored",
			});
			setInputDisabled(true);
		}

		return () => clearInterval(timer);
	}, [currentTimer]);
	return (
		<div className="a1Container">
			<Header></Header>
			<h1>Completa el verbo en pasado:</h1>
			<h3 className={`timer timerAnimation`}>{currentTimer}s</h3>
			<ToastContainer></ToastContainer>
			<h1 className="presenText"> {currentVerb.presente}</h1>
			<h1 className="correctText"> {currentVerb.traduccion}</h1>
			<form className="formDiv" onSubmit={handleSubmit}>
				<input
					className="inputText"
					type="text"
					value={inputValue}
					onChange={handleChange}
					disabled={inputDisabled}
				/>
				<button disabled={inputDisabled} className="btn" type="submit">
					Send
				</button>
			</form>
			<h1>PUNTOS:{puntaje}</h1>

			<button className="btnStart" onClick={StartGame}>
				START
			</button>
		</div>
	);
}

export default Game;
