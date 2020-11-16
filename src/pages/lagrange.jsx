import React, { Component } from 'react'

export default class Lagrange extends Component {
  constructor(props) {
    super(props);

    this.state = {
      x: {
        x0: -1, x1: 0, x2: 2,
      },
      y: {
        y0: 4, y1: 1, y2: -1,
      },
      l: {
        l0: { numerador: 0, denominador: 0 },
        l1: { numerador:0, denominador: 0 },
        l2: { numerador: 0, denominador: 0 }
      },

      valorX: 1,
      valorY: 0
    }

    this.handleChangex = this.handleChangex.bind(this)
    this.handleChangey = this.handleChangey.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const name = event.target.name
    const value = event.target.value != null ? parseInt(event.target.value) : ""

    this.setState({ [name]: value })
    

  }
  handleChangex(event) {
    const name = event.target.name
    const value = event.target.value != null ? parseInt(event.target.value) : ""

    this.setState(prevState => ({ x: { ...prevState.x, [name]: value } }))
  }

  handleChangey(event) {
    const name = event.target.name
    const value = event.target.value != null ? parseInt(event.target.value) : ""

    this.setState(prevState => ({ y: { ...prevState.y, [name]: value } }))

  }


  handleSubmit(event) {
    event.preventDefault()

    const { x, l, valorX, y  } = this.state
    var { l0, l1, l2 } = l
    const px = valorX

    l0.numerador = (Math.pow(px,2)) - (px * x.x2) - (x.x1 * px) + (x.x1 * x.x2)
    //(px - x.x1) * (px - x.x2) / (x.x0 - x.x1) * (x.x0 - x.x2)
    l0.denominador = (x.x0 - x.x1) * (x.x0 - x.x2)

    l1.numerador = (Math.pow(px,2)) - (px * x.x2) - (x.x0 * px) + (x.x0 * x.x2)
    //(px - x.x0) * (px - x.x2) / (x.x1 - x.x0) * (x.x1 - x.x2)
    l1.denominador = (x.x1 - x.x0) * (x.x1 - x.x2)

    l2.numerador = (Math.pow(px,2)) - (px * x.x1) - (x.x0 * px) + (x.x0 * x.x1)
    //(px - x.x0) * (px - x.x1) / (x.x2 - x.x0) * (x.x2 - x.x1)
    l2.denominador = (x.x2 - x.x1) * (x.x2 - x.x0)

    var valorY = y.y0*(l0.numerador.toFixed(2) / l0.denominador.toFixed(2)) 
    
    valorY += y.y1*(l1.numerador.toFixed(2) / l1.denominador.toFixed(2))

    valorY += y.y2*(l2.numerador.toFixed(2) / l2.denominador.toFixed(2))

    console.log(valorY)
    console.log(l0.denominador)
    this.setState(prevState => ({
      ...prevState, 
      l: { l0, l1, l2 },
      valorY:valorY
      
    }))
  }

  render() {
    console.log(this.state)
    const { x, y, valorX } = this.state

    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <table>
            <tr>
              <th>
                valores de x /
            </th>
              <th>
                x0=
                <input onChange={this.handleChangex} name="x0" value={x.x0} type="number" />
              </th>
              <th>
                x1=
                <input onChange={this.handleChangex} name="x1" value={x.x1} type="number" />
              </th>
              <th>
                x2=
                <input onChange={this.handleChangex} name="x2" value={x.x2} type="number" />
              </th>
            </tr>
            <tr>
              <td>
                valores de y /
            </td>
              <td>
                y0=
                <input onChange={this.handleChangey} name="y0" value={y.y0} type="number" />
              </td>
              <td>
                y1=
                <input onChange={this.handleChangey} name="y1" value={y.y1} type="number" />
              </td>
              <td>
                y2=
                <input onChange={this.handleChangey} name="y2" value={y.y2} type="number" />
              </td>
            </tr>
          </table>
          <button type="submit">botao</button>
        </form>
        <div>
          <p>
            P0L0 = {y.y0}{`((px²) + (${-x.x2 - x.x1}px) + (${x.x1 * x.x2}))`} / {(x.x0 - x.x1) * (x.x0 - x.x2)}
          </p>
          <br></br>
          <p>
            P1L1 ={y.y1}{`((px²) + (${-x.x0 - x.x2}px) + (${x.x0 * x.x2}))`} / {(x.x1 - x.x0) * (x.x1 - x.x2)}
          </p>
          <br></br>
          <p>
            P2L2 ={y.y2}{`((px²) + (${-x.x0 - x.x1}px) + (${x.x0 * x.x1}))`} / {(x.x2 - x.x1) * (x.x2 - x.x0)}
          </p>
        </div>

        <div>
          <br></br>
          <p>
            Para x = <input onChange={this.handleChange} name="valorX" value={valorX ? valorX : 0} type="text" />  Y é igual a {this.state.valorY}
          </p>
        </div>


      </div>
    )
  }
}