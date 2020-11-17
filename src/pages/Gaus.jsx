import React, { useState } from "react";

export default function Gaus() {
  const [primeiralinha, setprimeiralinha] = useState({ x1: 3, x2: 2, x3: 4, resultado: 1 })
  const [segundalinha, setsegundalinha] = useState({ x1: 1, x2: 1, x3: 2, resultado: 2 })
  const [terceiralinha, setterceiralinha] = useState({ x1: 4, x2: 3, x3: -2, resultado: 3 })

  const [resultadoFinal, setresultadoFinal] = useState({ x1: 0, x2: 0, x3: 0, resultado: 0 })

  function submitGaus(event) {
    event.preventDefault()

    if (segundalinha.x1 !== 0) {
      const pivo = primeiralinha.x1

      const multiplicador1 = (segundalinha.x1 / pivo)
      const multiplicador2 = (terceiralinha.x1 / pivo)

      setsegundalinha({
        x1: (segundalinha.x1 * pivo) - (multiplicador1 * (primeiralinha.x1 * pivo)),
        x2: (segundalinha.x2 * pivo) - (multiplicador1 * (primeiralinha.x2 * pivo)),
        x3: (segundalinha.x3 * pivo) - (multiplicador1 * (primeiralinha.x3 * pivo)),
        resultado: (segundalinha.resultado * pivo) - (multiplicador1 * (primeiralinha.resultado * pivo))
      })

      setterceiralinha({
        x1: (terceiralinha.x1 * pivo) - (multiplicador2 * (primeiralinha.x1 * pivo)),
        x2: (terceiralinha.x2 * pivo) - (multiplicador2 * (primeiralinha.x2 * pivo)),
        x3: (terceiralinha.x3 * pivo) - (multiplicador2 * (primeiralinha.x3 * pivo)),
        resultado: (terceiralinha.resultado * pivo) - (multiplicador2 * (primeiralinha.resultado * pivo))
      })
    } else if (segundalinha.x1 === 0 && terceiralinha.x2 !== 0) {

      const pivo = segundalinha.x2
      const multiplicador = (terceiralinha.x2 / pivo)

      setterceiralinha({
        x1: terceiralinha.x1 - (multiplicador * (segundalinha.x1)),
        x2: terceiralinha.x2 - (multiplicador * (segundalinha.x2)),
        x3: terceiralinha.x3 - (multiplicador * (segundalinha.x3)),
        resultado: terceiralinha.resultado - (multiplicador * (segundalinha.resultado))
      })
    } else if (segundalinha.x1 === 0 && terceiralinha.x2 === 0 && terceiralinha.x1 === 0) {

      let final = {
        x1: 0,
        x2: 0,
        x3: terceiralinha.resultado / terceiralinha.x3,
        resultado: 0
      }

      final.x2 = (segundalinha.resultado - (segundalinha.x3 * final.x3) ) / segundalinha.x2
      final.x1 = (primeiralinha.resultado - ((primeiralinha.x2 * final.x2) + (primeiralinha.x3 * final.x3))) / primeiralinha.x1
      
      setresultadoFinal(final)

    }
  }

  return (
    <div>
      <form onSubmit={submitGaus}>
        <div>
          <input value={primeiralinha.x1}
            onChange={event => setprimeiralinha({ ...primeiralinha, [event.target.name]: event.target.value })}
            type="text" name="x1" id="" />
          <label>x1 </label>
          <input value={primeiralinha.x2}
            onChange={event => setprimeiralinha({ ...primeiralinha, [event.target.name]: event.target.value })}
            type="text" name="x2" id="" />
          <label>x2 </label>
          <input value={primeiralinha.x3}
            onChange={event => setprimeiralinha({ ...primeiralinha, [event.target.name]: event.target.value })}
            type="text" name="x3" id="" />
          <label>x3 </label>
          <label>= </label>
          <input value={primeiralinha.resultado}
            onChange={event => setprimeiralinha({ ...primeiralinha, [event.target.name]: event.target.value })}
            type="text" name="resultado" id="" />
        </div>
        <div>
          <input value={segundalinha.x1}
            onChange={event => setsegundalinha({ ...segundalinha, [event.target.name]: event.target.value })}
            type="text" name="x1" id="" />
          <label>x1 </label>
          <input value={segundalinha.x2}
            onChange={event => setsegundalinha({ ...segundalinha, [event.target.name]: event.target.value })}
            type="text" name="x2" id="" />
          <label>x2 </label>
          <input value={segundalinha.x3}
            onChange={event => setsegundalinha({ ...segundalinha, [event.target.name]: event.target.value })}
            type="text" name="x3" id="" />
          <label>x3 </label>
          <label>= </label>
          <input value={segundalinha.resultado}
            onChange={event => setsegundalinha({ ...segundalinha, [event.target.name]: event.target.value })}
            type="text" name="resultado" id="" />
        </div>
        <div>
          <input value={terceiralinha.x1}
            onChange={event => setterceiralinha({ ...terceiralinha, [event.target.name]: event.target.value })}
            type="text" name="x1" id="" />
          <label>x1 </label>
          <input value={terceiralinha.x2}
            onChange={event => setterceiralinha({ ...terceiralinha, [event.target.name]: event.target.value })}
            type="text" name="x2" id="" />
          <label>x2 </label>
          <input value={terceiralinha.x3}
            onChange={event => setterceiralinha({ ...terceiralinha, [event.target.name]: event.target.value })}
            type="text" name="x3" id="" />
          <label>x3 </label>
          <label>= </label>
          <input value={terceiralinha.resultado}
            onChange={event => setterceiralinha({ ...terceiralinha, [event.target.name]: event.target.value })}
            type="text" name="resultado" id="" />
        </div>
        <button type="submit">botao</button>
      </form>
      {resultadoFinal ? (
        <div>
          <div>X1 = {resultadoFinal.x1}</div>
          <div>X2 = {resultadoFinal.x2}</div>
          <div>X3 = {resultadoFinal.x3}</div>
        </div>
      ) : ("")}

    </div>
  )
}
