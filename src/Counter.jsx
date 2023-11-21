import React, { useState } from "react";

function Counter() {
	// Aquí utilizamos el Hook useState que tendrá la variable clickNumber inicializada a 0
	// además del método setClicsNUmber a 0.
	const [clicsNumber, setClicsNumber] = useState(0);

	return (
		/* Aquí crearemos una etiqueta P en la que añadiremos el valor actual del
			Hook mediante a la variable clicsNUmber*/
		/* Y realizamos la llamada cuando se haga onClick en los dos botones con
			Incrementar y Decrementar en este caso cuando se ejecute el evento
			onClick*/
		<div>
			<p>Has hecho {clicsNumber} clics.</p>
			<button onClick={() => setClicsNumber(clicsNumber - 1)}>
				Decrementar
			</button>
			<button onClick={() => setClicsNumber(clicsNumber + 1)}>
				Incrementar
			</button>
            <button onClick={() => setClicsNumber(clicsNumber - clicsNumber)}>
				Reiniciar
			</button>
		</div>
	);
}

export default Counter;