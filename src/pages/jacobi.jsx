import React, { Component } from 'react'

export default class Jacobi extends Component {
  constructor(props) {
    super(props);

    this.state = {
      limite: 3,

      primeiralinha: { x1: 10, x2: 2, x3: 1, resultado: 7 },
      segundalinha: { x1: 1, x2: 5, x3: 1, resultado: -8 },
      terceiralinha: { x1: 2, x2: 3, x3: 10, resultado: 6 },

      x1: 0,
      x2: 0,
      x3: 0,

      historico: [],
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value != null ? event.target.value : ""

    this.setState({ ...this.state, [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { primeiralinha, segundalinha, terceiralinha, limite } = this.state

    var valorx1 = primeiralinha.resultado / primeiralinha.x1
    var valorx2 = segundalinha.resultado / segundalinha.x2
    var valorx3 = terceiralinha.resultado / terceiralinha.x3

    var historico = [{ valorx1, valorx2, valorx3 }]

    var i = 0
    while (i < limite) {
      var anch1 = valorx1
      var anch2 = valorx2
      var anch3 = valorx3

      valorx1 = 1 / primeiralinha.x1 * (primeiralinha.resultado - (primeiralinha.x2 * anch2) - (primeiralinha.x3 * anch3))
      valorx2 = 1 / segundalinha.x2 * (segundalinha.resultado - (segundalinha.x1 * anch1) - (segundalinha.x3 * anch3))
      valorx3 = 1 / terceiralinha.x3 * (terceiralinha.resultado - (terceiralinha.x1 * anch1) - (terceiralinha.x2 * anch2))

      historico.push({ valorx1, valorx2, valorx3 })
      i++
    }

    this.setState({
      ...this.state,
      x1: valorx1,
      x2: valorx2,
      x3: valorx3,
    })

    this.setState(prevState => ({
      historico: historico
    }))
  }

  render() {
    console.log(this.state)

    const { primeiralinha, segundalinha, terceiralinha, historico, limite } = this.state

    const historytable = historico.map((element, index) => {
      return (
        <tr key={index}>
          <td>
            {element.valorx1}
          </td>
          <td>
            {element.valorx2}
          </td>
          <td>
            {element.valorx3}
          </td>
        </tr>
      )
    })
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div>
            <input value={primeiralinha.x1}
              onChange={this.handleChange}
              type="text" name="x1" />
            <label>x1 </label>
            <input value={primeiralinha.x2}
              onChange={this.handleChange}
              type="text" name="x2" />
            <label>x2 </label>
            <input value={primeiralinha.x3}
              onChange={this.handleChange}
              type="text" name="x3" />
            <label>x3 </label>
            <label>= </label>
            <input value={primeiralinha.resultado}
              onChange={this.handleChange}
              type="text" name="resultado" />
          </div>
          <div>
            <input value={segundalinha.x1}
              onChange={this.handleChange}
              type="text" name="x1" />
            <label>x1 </label>
            <input value={segundalinha.x2}
              onChange={this.handleChange}
              type="text" name="x2" />
            <label>x2 </label>
            <input value={segundalinha.x3}
              onChange={this.handleChange}
              type="text" name="x3" />
            <label>x3 </label>
            <label>= </label>
            <input value={segundalinha.resultado}
              onChange={this.handleChange}
              type="text" name="resultado" />
          </div>
          <div>
            <input value={terceiralinha.x1}
              onChange={this.handleChange}
              type="text" name="x1" />
            <label>x1 </label>
            <input value={terceiralinha.x2}
              onChange={this.handleChange}
              type="text" name="x2" />
            <label>x2 </label>
            <input value={terceiralinha.x3}
              onChange={this.handleChange}
              type="text" name="x3" />
            <label>x3 </label>
            <label>= </label>
            <input value={terceiralinha.resultado}
              onChange={this.handleChange}
              type="text" name="resultado" />
          </div>

          <button type="submit" >botao</button>
        </form>
        <div>
          <input value={limite}
            onChange={this.handleChange}
            type="text" name="limite" />
          <label>limite </label>
        </div>
        <table>
          <tr>
            <th>
              x1
            </th>
            <th>
              x2
            </th>
            <th>
              x3
            </th>
          </tr>
          {historytable}
        </table>
      </div>
    )

  }
}




